"use client";

import { useLanguage } from "@/lib/language-context";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
      style={{
        fontSize: '14px',
        fontWeight: '500',
        color: 'var(--ink)',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '4px 8px',
        borderRadius: '4px',
        transition: 'background-color 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--rule)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
      }}
    >
      {language === 'en' ? 'DE' : 'EN'}
    </button>
  );
}