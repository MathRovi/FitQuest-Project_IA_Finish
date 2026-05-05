import { useState } from 'react';
import { useNavigate, Link, Navigate } from 'react-router-dom';
import { register } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';

export default function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const { user, loginUser } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  if (user) return <Navigate to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await register(form);
      loginUser(res.data.token, res.data.user);
      toast.success(t('auth.accountCreated'));
      navigate('/');
    } catch (err) {
      toast.error(err.response?.data?.message || t('auth.registerError'));
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
            {t('auth.joinCommunity')}
          </p>
        </div>

        {/* Card */}
        <div className="card">
          <h2 className="font-heading text-2xl font-semibold text-text-main mb-6">
            {t('auth.register')}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label className="font-body text-sm font-medium text-text-muted mb-1 block">
                {t('auth.username')}
              </label>
              <input
                type="text"
                placeholder="username"
                className="input-field"
                value={form.username}
                onChange={e => setForm({ ...form, username: e.target.value })}
              />
            </div>

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
              {t('auth.registerBtn')}
            </button>
          </form>

          <p className="font-body text-center text-text-muted mt-6 text-sm">
            {t('auth.hasAccount')}{' '}
            <Link to="/login" className="text-primary font-medium hover:underline">
              {t('auth.signin')}
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