import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();

  console.log('lang:', i18n.language);

  const handleLogout = () => {
    logoutUser();
    navigate('/login');
  };

  // Here we put 'key' for the translation
  const navLinks = [
    { path: '/', key: 'nav.dashboard' },
    { path: '/workouts', key: 'nav.workouts' },
    { path: '/nutrition', key: 'nav.nutrition' },
    { path: '/achievements', key: 'nav.achievements' },
    { path: '/exercises', key: 'nav.exercises' },
  ];

  return (
    <nav className="bg-white shadow-card px-8 py-4 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="font-heading text-2xl font-bold text-primary">
        Fit<span className="text-secondary">Quest</span>
      </Link>

      <div className="flex gap-1 items-center">
        {navLinks.map(link => (
          <Link
            key={link.path}
            to={link.path}
            className={`px-4 py-2 rounded-xl font-body text-sm font-medium transition-all duration-200 ${
              location.pathname === link.path
                ? 'bg-primary-light text-primary font-semibold'
                : 'text-text-muted hover:text-primary hover:bg-gray-50'
            }`}
          >
            {/* Live traduction */}
            {t(link.key)}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <LanguageSwitcher />

        <div className="flex items-center gap-1 bg-orange-50 px-3 py-1.5 rounded-xl">
          <span>🔥</span>
          <span className="text-orange-500 font-heading font-bold text-sm">
            {user?.streak || 0}
          </span>
        </div>

        <div className="flex items-center gap-1 bg-secondary-light px-3 py-1.5 rounded-xl">
          <span className="text-secondary font-heading font-bold text-sm">
            {user?.xp || 0} XP
          </span>
        </div>

        <Link
          to="/profile"
          className="w-9 h-9 bg-primary text-white rounded-xl flex items-center justify-center font-heading font-bold hover:bg-primary-dark transition-all"
        >
          {user?.username?.charAt(0).toUpperCase()}
        </Link>

        <button onClick={handleLogout} className="btn-danger text-sm px-4 py-2">
          {t('nav.logout')}
        </button>
      </div>
    </nav>
  );
}