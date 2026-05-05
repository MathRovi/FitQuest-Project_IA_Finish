// Home page: landing page of the app
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function Home() {
  const { t, i18n } = useTranslation();

  const features = [
    { icon: '🏋️', title: t('home.features.workoutTitle'), desc: t('home.features.workoutDesc') },
    { icon: '🥗', title: t('home.features.nutritionTitle'), desc: t('home.features.nutritionDesc') },
    { icon: '⭐', title: t('home.features.xpTitle'), desc: t('home.features.xpDesc') },
    { icon: '🏆', title: t('home.features.badgesTitle'), desc: t('home.features.badgesDesc') },
    { icon: '🔥', title: t('home.features.streakTitle'), desc: t('home.features.streakDesc') },
    { icon: '📊', title: t('home.features.dashboardTitle'), desc: t('home.features.dashboardDesc') },
  ];

  const steps = [
    { number: '01', title: t('home.steps.create'), desc: t('home.steps.createDesc') },
    { number: '02', title: t('home.steps.log'), desc: t('home.steps.logDesc') },
    { number: '03', title: t('home.steps.earn'), desc: t('home.steps.earnDesc') },
  ];

  const stats = [
    { value: '20 XP', label: t('home.perWorkout') },
    { value: '10 XP', label: t('home.perMeal') },
    { value: '50 XP', label: t('home.perStreak') },
    { value: '🎖️', label: t('home.obtainBadges') }
    
  ];

  const creators = [
    {
    name: 'Adam Saidane',
    url: 'https://www.linkedin.com/in/adam-saidane/'
  },
  {
    name: 'Matheo Rouviere',
    url: 'https://www.linkedin.com/in/matheo-rouviere-8198722b0/'
  },
  {
    name: 'Lucas Bonsergent',
    url: 'https://www.linkedin.com/in/lucas-bonsergent/'
  }
];

  return (
    <div className="min-h-screen bg-background font-body">

      <nav className="bg-white shadow-card px-8 py-4 flex justify-between items-center sticky top-0 z-50">
        <span className="font-heading text-2xl font-bold text-primary">
          Fit<span className="text-secondary">Quest</span>
        </span>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Link to="/login" className="px-5 py-2.5 rounded-xl font-heading font-semibold text-sm text-primary border-2 border-primary hover:bg-primary-light transition-all">
            {t('home.login')}
          </Link>
          <Link to="/register" className="btn-primary text-sm">
            {t('home.ctaBtn')}
          </Link>
        </div>
      </nav>

      {/* Title */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-primary-light text-primary px-4 py-2 rounded-full text-sm font-heading font-semibold mb-6">
            🎮 {t('home.gamified')}
          </div>

          <h1 className="font-heading text-5xl md:text-6xl font-bold text-text-main mb-6 leading-tight">
            {t('home.hero')}{' '}
            <span className="text-primary">{t('home.heroFitness')}</span>{' '}
            {t('home.heroIn')}{' '}
            <span className="text-secondary">{t('home.heroAdventure')}</span>
          </h1>

          <p className="font-body text-xl text-text-muted mb-10 max-w-2xl mx-auto">
            {t('home.heroSub')}
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/register" className="btn-primary text-lg px-8 py-4 shadow-lg">
              {t('home.startFree')}
            </Link>
            <Link to="/login" className="px-8 py-4 rounded-xl font-heading font-semibold text-lg text-text-muted border-2 border-gray-200 hover:border-primary hover:text-primary transition-all">
              {t('home.login')}
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {stats.map((s, i) => (
              <div key={i} className="card text-center">
                <p className="font-heading text-2xl font-bold text-primary">{s.value}</p>
                <p className="font-body text-sm text-text-muted mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="font-heading text-4xl font-bold text-text-main mb-4">
            {t('home.featuresTitle')}
          </h2>
          <p className="text-text-muted">{t('home.featuresSub')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <div key={i} className="card text-center">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-heading font-semibold">{f.title}</h3>
              <p className="text-sm text-text-muted">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STEPS */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="font-heading text-4xl font-bold mb-4">{t('home.howTitle')}</h2>
        <p className="text-text-muted mb-12">{t('home.howSub')}</p>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div key={i}>
              <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-primary">{step.number}</span>
              </div>
              <h3 className="font-heading">{step.title}</h3>
              <p className="text-sm text-text-muted">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white text-center">
        <h2 className="font-heading text-4xl font-bold mb-4">{t('home.ctaTitle')}</h2>
        <p className="text-text-muted mb-8">{t('home.ctaSub')}</p>
        <Link to="/register" className="btn-primary text-lg px-10 py-4">
          {t('home.ctaBtn')}
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="bg-text-main py-8 text-center">
        <p className="text-white font-bold">
          Fit<span className="text-secondary">Quest</span>
        </p>

        <p className="text-gray-400 text-sm">
          {t('home.footer')}
        </p>

        <p className="mt-3 text-gray-500 text-sm">
          {creators.map((creator, index) => (
            <span key={creator.name}>
              <a
                href={creator.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline mx-1"
              >
                {creator.name}
              </a>
              {index < creators.length - 1 && ' • '}
            </span>
          ))}
        </p>   
      </footer>
    </div>
  );
}