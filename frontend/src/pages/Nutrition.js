import { useState, useEffect } from 'react';
import { getMeals, createMeal, deleteMeal } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import CalorieGoalWidget from '../components/CalorieGoalWidget';

export default function Nutrition() {
  const { t } = useTranslation();
  const { refreshUser } = useAuth();

  const [meals, setMeals] = useState([]);
  const [form, setForm] = useState({
    name: '',
    mealType: 'breakfast',
    calories: '',
    protein: '',
    carbs: ''
  });

  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);

  const today = new Date().toISOString().split('T')[0];
  const mealTypes = ['breakfast', 'lunch', 'dinner', 'snack'];

  useEffect(() => { fetchMeals(); }, []);

  const fetchMeals = async () => {
    const res = await getMeals(today);
    setMeals(res.data);
  };

  // 🔥 IA
  const analyzeMeal = async () => {
    if (!form.name) return;

    setAnalyzing(true);

    try {
      const res = await fetch("http://localhost:5000/api/meals/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: form.name }),
      });

      const data = await res.json();

      setForm(prev => ({
        ...prev,
        calories: data.calories,
        protein: data.protein,
        carbs: data.carbs
      }));

    } catch (error) {
      console.error("Erreur IA:", error);
    } finally {
      setAnalyzing(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createMeal(form);
      await refreshUser();
      setForm({ name: '', mealType: 'breakfast', calories: '', protein: '', carbs: '' });
      setShowForm(false);
      fetchMeals();
      toast.success(t('nutrition.addedSuccess'));
    } catch (err) {
      toast.error(t('nutrition.addError'));
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteMeal(id);
      fetchMeals();
      toast.success(t('nutrition.deletedSuccess'));
    } catch {
      toast.error(t('nutrition.deleteError'));
    }
  };

  // 🔥 FEEDBACK
  const getFeedback = () => {
    if (!form.calories) return "";

    if (form.calories < 150) return t('nutrition.feedback.light');
    if (form.protein > 20) return t('nutrition.feedback.protein');
    if (form.carbs > 50) return t('nutrition.feedback.carbs');
    if (form.calories > 600) return t('nutrition.feedback.heavy');

    return t('nutrition.feedback.balanced');
  };

  const totalCals = meals.reduce((s, m) => s + m.calories, 0);

  // 🔥 REGROUPEMENT PAR TYPE
  const mealsByType = {
    breakfast: [],
    lunch: [],
    dinner: [],
    snack: []
  };

  meals.forEach(meal => {
    if (mealsByType[meal.mealType]) {
      mealsByType[meal.mealType].push(meal);
    }
  });

  return (
    <div className="min-h-screen bg-background p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="font-heading text-3xl font-bold text-text-main">
          {t('nutrition.title')}
        </h1>

        <button
          onClick={() => setShowForm(!showForm)}
          className="btn-primary text-sm"
        >
          {showForm ? t('nutrition.cancel') : t('nutrition.addMeal')}
        </button>
      </div>

      {/* OBJECTIF */}
      <CalorieGoalWidget totalCalories={totalCals} />

      {/* FORMULAIRE */}
      {showForm && (
        <div className="card mb-6">
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">

            <input
              placeholder={t('nutrition.foodName')}
              required
              className="input-field col-span-2"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />

            <button
              type="button"
              onClick={analyzeMeal}
              disabled={analyzing || !form.name}
              className="btn-primary col-span-2"
            >
              {analyzing ? t('common.loading') : t('nutrition.analyze')}
            </button>

            <select
              className="input-field"
              value={form.mealType}
              onChange={e => setForm({ ...form, mealType: e.target.value })}
            >
              {mealTypes.map(type => (
                <option key={type} value={type}>
                  {t(`nutrition.mealTypes.${type}`)}
                </option>
              ))}
            </select>

            <input className="input-field" value={form.calories} readOnly placeholder="Calories" />
            <input className="input-field" value={form.protein} readOnly placeholder="Protein" />
            <input className="input-field" value={form.carbs} readOnly placeholder="Carbs" />

            {form.calories && (
              <div className="col-span-2 bg-gray-50 rounded-xl p-3 text-center">
                {getFeedback()}
              </div>
            )}

            <button type="submit" className="btn-secondary col-span-2">
              {t('nutrition.save')}
            </button>

          </form>
        </div>
      )}

      {/* 🔥 AFFICHAGE PAR TYPE */}
      {mealTypes.map(type => (
        <div key={type} className="card mb-4">

          <div className="flex justify-between mb-3">
            <h2 className="font-bold">
              {t(`nutrition.mealTypes.${type}`)}
            </h2>

            <span className="text-sm text-gray-400">
              {mealsByType[type].reduce((sum, m) => sum + m.calories, 0)} kcal
            </span>
          </div>

          {mealsByType[type].length === 0 ? (
            <p className="text-gray-400 text-sm">
              Aucun repas
            </p>
          ) : (
            mealsByType[type].map(meal => (
              <div key={meal._id} className="flex justify-between py-2 border-b">

                <div>
                  <p>{meal.name}</p>
                  <p className="text-sm text-gray-500">
                    {meal.calories} kcal • {meal.protein}g • {meal.carbs}g
                  </p>
                </div>

                <button
                  onClick={() => handleDelete(meal._id)}
                  className="text-red-400"
                >
                  {t('nutrition.delete')}
                </button>

              </div>
            ))
          )}
        </div>
      ))}

    </div>
  );
}