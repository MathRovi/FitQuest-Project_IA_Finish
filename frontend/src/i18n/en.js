// English translation
const en = {
  nav: {
    dashboard: 'Dashboard',
    workouts: 'Workouts',
    nutrition: 'Nutrition',
    achievements: 'Achievements',
    exercises: 'Exercises',
    logout: 'Logout',
  },

  auth: {
    login: 'Login',
    register: 'Create account',
    email: 'Email',
    password: 'Password',
    username: 'Username',
    loginBtn: 'Sign in',
    registerBtn: 'Create my account',
    noAccount: 'No account?',
    hasAccount: 'Already have an account?',
    signup: 'Sign up',
    signin: 'Sign in',
    backHome: '← Back to home',
    welcomeBack: 'Welcome back',
    accountCreated: 'Account created successfully!',
    loginError: 'Login error',
    registerError: 'Registration error',
    tagline: 'Track workouts, nutrition and stay motivated',
    joinCommunity: 'Join the FitQuest community',
  },

  dashboard: {
    welcome: 'Welcome,',
    subtitle: "Here's your current summary",
    currentStreak: 'Current streak',
    days: 'days',
    totalXP: 'Total XP',
    level: 'Level',
    totalWorkouts: 'Total Workouts',
    sinceBeginning: 'Since the beginning',
    caloriesBurned: 'Calories burned',
    lastDays: 'Last 7 days',
    badges: 'Badges',
    unlocked: 'Unlocked',
    caloriesChart: 'Calories — Last 7 days',
    burned: 'Burned',
    consumed: 'Consumed',
    workoutsPerDay: 'Workouts per day',
    unlockedBadges: 'Unlocked badges 🏆',
    loading: 'Loading...',
    currentStreak: 'Current streak',
    
  },

  workouts: {
    title: 'My Workouts',
    found: 'workout found',
    founds: 'workouts found',
    filters: 'Filters',
    resetFilters: 'Reset all',
    searchByName: 'Search by name',
    searchPlaceholder: 'E.g.: Running, Chest Day...',
    workoutType: 'Workout type',
    period: 'Period',
    allTypes: 'All types',
    allPeriods: 'All time',
    today: 'Today',
    last7: 'Last 7 days',
    last30: 'Last 30 days',
    custom: 'Custom dates',
    startDate: 'Start date',
    endDate: 'End date',
    add: '+ Add',
    cancel: '✕ Cancel',
    newWorkout: 'New workout',
    workoutName: 'Workout name',
    duration: 'Duration (min)',
    caloriesBurned: 'Calories burned',
    save: '💾 Save (+20 XP)',
    saving: 'Saving...',
    delete: 'Delete',
    noWorkout: 'No workout found',
    noWorkoutSub: 'Add your first workout!',
    modifyFilters: 'Try modifying your filters',
    totalWorkouts: 'Workouts',
    totalMinutes: 'Total minutes',
    totalCalories: 'Calories burned',
    addedSuccess: '💪 Workout added! +20 XP',
    deletedSuccess: 'Workout deleted',
    addError: 'Error adding workout',
    deleteError: 'Error deleting workout',
    types: {
      strength: '💪 Strength',
      cardio: '🏃 Cardio',
      yoga: '🧘 Yoga',
      other: '⚡ Other',
    }
  },

  nutrition: {
    title: 'Nutrition',
    calories: 'Calories',
    calorieGoal: 'Calorie Goal',
    calorieGoalDesc: 'Daily goal',
    setGoal: 'Set my goal',
    goalSaved: 'Goal updated!',
    goalError: 'Error updating goal',
    remaining: 'remaining',
    exceeded: 'exceeded by',
    goalReached: 'Goal reached!',
    progressToGoal: 'Progress to goal',
    editGoal: 'Edit goal',
    kcalGoal: 'kcal / day',
    protein: 'Protein',
    carbs: 'Carbs',
    addMeal: '+ Add a meal',
    cancel: '✕ Cancel',
    addMealTitle: 'Add a meal',
    foodName: 'Food name',
    mealType: 'Meal type',
    caloriesField: 'Calories',
    proteinField: 'Protein (g)',
    carbsField: 'Carbs (g)',
    save: 'Add (+10 XP)',
    saving: 'Saving...',
    noMeals: 'No meals recorded today.',
    delete: 'Delete',
    addedSuccess: '🥗 Meal added! +10 XP',
    deletedSuccess: 'Meal deleted',
    addError: 'Error adding meal',
    deleteError: 'Error deleting meal',
    consumed: 'consumed',
    readOnly: "📖 View mode — you cannot add meals for this date",
    mealTypes: {
      breakfast: '🌅 Breakfast',
      lunch: '☀️ Lunch',
      dinner: '🌙 Dinner',
      snack: '🍎 Snack',
    },

    history: 'History',
    historyTitle: 'Meal History',
    historyEmpty: 'No meals recorded.',
    today: 'Today',
    yesterday: 'Yesterday',
    totalDay: "Day's total",
    viewDay: 'View this day',
    backToToday: '← Back to today',
    noHistory: 'No meals recorded yet.',
    page: 'Page',
    of: 'of',
    analyze: "Analyze 🍎",

    feedback: {
      light: "🥗 Light meal, perfect for a snack",
      protein: "💪 High in protein, great for training",
      carbs: "⚡ High in carbs, good for energy",
      heavy: "🔥 High calorie meal, watch portions",
      balanced: "👍 Balanced meal"
    }
  },

  achievements: {
    title: 'Achievements',
    totalXP: 'Total XP',
    xpToNext: 'XP to level',
    badges: 'Badges',
    unlocked: 'Unlocked ✓',
    locked: 'Locked',
    howToEarn: 'How to earn XP',
    addWorkout: 'Add a workout',
    logMeal: 'Log a meal',
    streak7: '7 day streak',
    progress: 'Progress',
    yourLevel: 'Your level',
    nextLevel: 'Next level',
    xpNeeded: 'XP needed',
    allBadges: 'All badges',
    earnedOn: 'Unlocked',

    badgeNames: {
      'First Workout': '🏋️ First Workout',
      'Fitness Beginner': '⭐ Fitness Beginner',
      'Consistency Champion': '🏆 Consistency Champion',
      '7 Day Streak': '🔥 7 Day Streak',
    },

    badgeDescriptions: {
      'First Workout': 'Complete your first workout',
      'Fitness Beginner': 'Complete 10 workouts',
      'Consistency Champion': 'Complete 50 workouts',
      '7 Day Streak': 'Maintain a 7 day streak',
    }
  },
  
  profile: {
    title: 'My Profile',
    level: 'Level',
    xpToNext: 'XP remaining',
    totalWorkouts: 'Total Workouts',
    totalMeals: 'Meals Logged',
    caloriesBurned: 'Calories Burned',
    trainingMinutes: 'Training Minutes',
    badges: 'Badges',
    currentStreak: 'Current Streak',
    days: 'days',

    changeUsername: 'Change Username',
    newUsername: 'New Username',
    update: 'Update',

    changePassword: 'Change Password',
    currentPassword: 'Current Password',
    newPassword: 'New Password',
    confirmPassword: 'Confirm Password',
    changePasswordBtn: 'Change Password',

    passwordMismatch: 'Passwords do not match',

    usernameUpdated: 'Username updated! ✓',
    passwordUpdated: 'Password updated! 🔒',

    loading: 'Loading...',
  },

  // HOME
  home: {
    hero: 'Transform your',
    heroFitness: 'fitness',
    heroIn: 'into an',
    heroAdventure: 'adventure',
    heroSub: 'FitQuest lets you track your workouts and nutrition while earning XP, unlocking badges and maintaining streaks.',
    startFree: 'Get started for free →',
    login: 'Sign in',

    featuresTitle: 'Everything you need',
    featuresSub: 'A complete app to transform your fitness habits',

    howTitle: 'How does it work?',
    howSub: 'Get started in 3 simple steps',

    ctaTitle: 'Ready to start your adventure?',
    ctaSub: 'Join FitQuest for free and transform your fitness habits today.',
    ctaBtn: 'Create my free account →',

    gamified: 'Fitness, gamified',
    everyAction: 'Every action counts 🎯',
    everyActionSub: 'Gamification rewards every healthy habit',
    perWorkout: 'per workout added',
    perMeal: 'per meal logged',
    perStreak: 'for a 7-day streak',
    levelUp: 'Level up',
    obtainBadges: "Earn badges",

    footer: 'A Gamified Fitness and Nutrition Web Application',

    features: {
      workoutTitle: "Workout Tracking",
      workoutDesc: "Track your workouts and progress.",
      nutritionTitle: "Nutrition Tracking",
      nutritionDesc: "Monitor your meals and calories.",
      xpTitle: "XP System",
      xpDesc: "Earn experience points.",
      badgesTitle: "Badges",
      badgesDesc: "Unlock achievements.",
      streakTitle: "Streaks",
      streakDesc: "Stay consistent daily.",
      dashboardTitle: "Dashboard",
      dashboardDesc: "Visualize your stats."
    },

    steps: {
      create: "Create your account",
      createDesc: "Quick signup in seconds.",
      log: "Log your activities",
      logDesc: "Track workouts and meals.",
      earn: "Earn rewards",
      earnDesc: "Gain XP and unlock badges."
    }
  },

  exercises: {
    title: 'Exercise Library',
    search: 'Search an exercise...',
    found: 'exercise found',
    founds: 'exercises found',
    allMuscles: 'All',
    allLevels: 'All Levels',
    clickDetails: 'Click for details',
    clickClose: 'Click to close',

    muscles: {
      chest: 'Chest',
      back: 'Back',
      legs: 'Legs',
      shoulders: 'Shoulders',
      arms: 'Arms',
      core: 'Core',
      cardio: 'Cardio'
    },

    difficulty: {
      all: "All levels",
      beginner: 'Beginner',
      intermediate: 'Intermediate',
      advanced: 'Advanced'
    },

    descriptions: {
      "Bench Press": "Classic chest exercise using a barbell on a flat bench.",
      "Push Up": "Bodyweight exercise targeting chest and triceps.",
      "Incline Bench Press": "Incline bench press targeting upper chest.",
      "Chest Fly": "Isolation exercise focusing on chest muscles.",
      "Dips": "Bodyweight exercise targeting chest and triceps.",
      
      "Deadlift": "Full-body compound exercise focusing on back and legs.",
      "Pull Up": "Bodyweight back exercise using a pull-up bar.",
      "Bent Over Row": "Barbell row targeting upper and middle back.",
      "Lat Pulldown": "Machine exercise for back width and strength.",
      "Seated Cable Row": "Cable exercise targeting mid-back.",
      
      "Squat": "Fundamental lower body exercise targeting quads and glutes.",
      "Leg Press": "Machine exercise for legs with controlled movement.",
      "Romanian Deadlift": "Hamstring-focused deadlift variation.",
      "Lunges": "Unilateral leg exercise improving balance and strength.",
      "Leg Curl": "Isolation exercise for hamstrings.",
      "Calf Raises": "Exercise targeting calf muscles.",
      
      "Overhead Press": "Shoulder press exercise using barbell or dumbbells.",
      "Lateral Raise": "Isolation exercise targeting side delts.",
      "Front Raise": "Exercise focusing on front shoulders.",
      "Arnold Press": "Dumbbell shoulder press with rotation.",
      
      "Bicep Curl": "Isolation exercise for biceps.",
      "Tricep Pushdown": "Cable exercise targeting triceps.",
      "Hammer Curl": "Bicep curl variation targeting brachialis.",
      "Skull Crusher": "Lying triceps extension exercise.",
      
      "Plank": "Core stability exercise using bodyweight.",
      "Crunch": "Abdominal exercise focusing on upper abs.",
      "Russian Twist": "Rotational core exercise.",
      "Leg Raise": "Lower abdominal exercise.",
      "Ab Wheel": "Advanced core exercise using ab wheel.",
      
      "Running": "Cardio exercise improving endurance.",
      "Cycling": "Low-impact cardio exercise.",
      "Jump Rope": "Cardio exercise improving coordination.",
      "Rowing Machine": "Full-body cardio machine exercise.",
      "Burpees": "High-intensity full-body exercise."
    }
  },

footerCreators: 'Created by Adam Saidane, Matheo Rouviere and Lucas Bonsergent',

  common: {
    loading: 'Loading...',
    error: 'Server error',
    days: 'days',
    minutes: 'min',
    kcal: 'kcal',
  }
};

export default en;