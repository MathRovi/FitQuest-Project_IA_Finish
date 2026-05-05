import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  // Saves the selected language after refresh
  useEffect(() => {
    const savedLang = localStorage.getItem('fitquest_lang');
    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  const toggleLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('fitquest_lang', lang);
  };

  return (
    <div className="flex items-center gap-1 bg-gray-100 rounded-xl p-1">
      <button
        onClick={() => toggleLang('fr')}
        className={`px-3 py-1.5 rounded-lg text-sm font-heading font-semibold transition-all ${
          i18n.language.startsWith('fr')
            ? 'bg-white text-primary shadow-sm'
            : 'text-text-muted hover:text-primary'
        }`}
      >
        🇫🇷 FR
      </button>

      <button
        onClick={() => toggleLang('en')}
        className={`px-3 py-1.5 rounded-lg text-sm font-heading font-semibold transition-all ${
          i18n.language.startsWith('en')
            ? 'bg-white text-primary shadow-sm'
            : 'text-text-muted hover:text-primary'
        }`}
      >
        🇬🇧 EN
      </button>
    </div>
  );
}