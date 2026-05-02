const Meal = require('../models/Meal');
const User = require('../models/User');
const axios = require('axios');


// 🔹 Ajouter un repas
exports.createMeal = async (req, res) => {
  try {
    const { name, mealType, calories, protein, carbs } = req.body;

    const meal = await Meal.create({
      user: req.userId,
      name,
      mealType,
      calories,
      protein,
      carbs
    });

    await User.findByIdAndUpdate(req.userId, { $inc: { xp: 10 } });

    const updatedUser = await User.findById(req.userId);
    const level = Math.floor((updatedUser.xp || 0) / 100) + 1;
    await User.findByIdAndUpdate(req.userId, { level });

    res.status(201).json({ message: 'Repas ajouté ! +10 XP', meal });

  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }
};


// 🔹 Récupérer les repas
exports.getMeals = async (req, res) => {
  try {
    const { date } = req.query;
    let filter = { user: req.userId };

    if (date) {
      const start = new Date(date);
      start.setHours(0, 0, 0, 0);
      const end = new Date(date);
      end.setHours(23, 59, 59, 999);
      filter.date = { $gte: start, $lte: end };
    }

    const meals = await Meal.find(filter).sort({ date: -1 });
    res.json(meals);

  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};


// 🔹 Historique paginé
exports.getMealHistory = async (req, res) => {
  try {
    const { page = 1, limit = 5 } = req.query;

    const meals = await Meal.find({ user: req.userId }).sort({ date: -1 });

    const grouped = {};
    meals.forEach(meal => {
      const dateKey = new Date(meal.date).toISOString().split('T')[0];

      if (!grouped[dateKey]) {
        grouped[dateKey] = {
          date: dateKey,
          meals: [],
          totalCalories: 0,
          totalProtein: 0,
          totalCarbs: 0,
        };
      }

      grouped[dateKey].meals.push(meal);
      grouped[dateKey].totalCalories += meal.calories;
      grouped[dateKey].totalProtein += meal.protein;
      grouped[dateKey].totalCarbs += meal.carbs;
    });

    const days = Object.values(grouped).sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    const total = days.length;
    const totalPages = Math.ceil(total / limit);
    const paginated = days.slice((page - 1) * limit, page * limit);

    res.json({
      days: paginated,
      total,
      totalPages,
      currentPage: Number(page)
    });

  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};


// 🔹 Supprimer un repas
exports.deleteMeal = async (req, res) => {
  try {
    const meal = await Meal.findOneAndDelete({
      _id: req.params.id,
      user: req.userId
    });

    if (!meal) {
      return res.status(404).json({ message: 'Repas non trouvé' });
    }

    res.json({ message: 'Repas supprimé' });

  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};


// 🔥 IA NUTRITION (OPENROUTER)
exports.analyzeMeal = async (req, res) => {
  const { query } = req.body;

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openrouter/auto",
        messages: [
          {
            role: "user",
            content: `Give calories, protein and carbs for ${query}.
Respond ONLY in JSON:
{"calories": number, "protein": number, "carbs": number}`
          }
        ]
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    let text = response.data.choices[0].message.content;

    console.log("🧠 IA RAW:", text);

    const match = text.match(/\{[\s\S]*\}/);

    if (!match) {
      return res.status(500).json({ error: "Réponse IA invalide" });
    }

    const data = JSON.parse(match[0]);

    res.json({
      calories: Math.round(data.calories || 0),
      protein: Math.round(data.protein || 0),
      carbs: Math.round(data.carbs || 0)
    });

  } catch (error) {
    console.error("❌ ERREUR IA:", error.response?.data || error.message);

    res.status(500).json({
      error: "Erreur IA",
      details: error.message
    });
  }
};