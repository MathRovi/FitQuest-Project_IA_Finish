import { useState } from 'react';
import { useNavigate, Link, Navigate } from 'react-router-dom';
import { login } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const { user, loginUser } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  if (user) return <Navigate to="/" />; // if already logged in → redirect

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload
    try {
      const res = await login(form); // send login request
      loginUser(res.data.token, res.data.user); // save token + user
      toast.success(`${t('auth.welcomeBack')} ${res.data.user.username} ! 👋`); // success message
      navigate('/'); 
    } catch (err) {
      toast.error(err.response?.data?.message || t('auth.loginError'));
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-slide-up">

        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="font-heading text-4xl font-bold text-primary">
            Fit<span className="text-secondary">Quest</span>
          </h1>
          <p className="font-body text-text-muted mt-2">
            {t('auth.tagline')}
          </p>
        </div>

        {/* Card */}
        <div className="card">
          <h2 className="font-heading text-2xl font-semibold text-text-main mb-6">
            {t('auth.login')}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label className="font-body text-sm font-medium text-text-muted mb-1 block">
                {t('auth.email')}
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                className="input-field"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div>
              <label className="font-body text-sm font-medium text-text-muted mb-1 block">
                {t('auth.password')}
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="input-field"
                value={form.password}
                onChange={e => setForm({ ...form, password: e.target.value })}
              />
            </div>

            <button type="submit" className="btn-primary w-full mt-2">
              {t('auth.loginBtn')}
            </button>
          </form>

          <p className="font-body text-center text-text-muted mt-6 text-sm">
            {t('auth.noAccount')}{' '}
            <Link to="/register" className="text-primary font-medium hover:underline">
              {t('auth.signup')}
            </Link>
          </p>

          <p className="font-body text-center text-text-muted mt-2 text-sm">
            <Link to="/home" className="text-text-muted hover:text-primary">
              {t('auth.backHome')}
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}