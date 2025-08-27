import React, { useState } from 'react';

const LanguageSelector = ({ currentLang, setCurrentLang }) => {
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'pt', flag: '🇧🇷', name: 'PT' },
    { code: 'es', flag: '🇪🇸', name: 'ES' },
    { code: 'en', flag: '🇺🇸', name: 'EN' },
    { code: 'de', flag: '🇩🇪', name: 'DE' }
  ];

  const currentLanguage = languages.find(lang => lang.code === currentLang);

  const handleLanguageSelect = (langCode) => {
    setCurrentLang(langCode);
    setIsOpen(false);
  };

  return (
    <div style={{
      position: 'fixed',
      top: '90px',
      right: '15px',
      zIndex: 1001,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Botão Principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: '#0EA5E9',
          color: 'white',
          border: 'none',
          borderRadius: '25px',
          padding: '8px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '14px',
          fontWeight: '600',
          cursor: 'pointer',
          boxShadow: '0 2px 10px rgba(14, 165, 233, 0.3)',
          transition: 'all 0.2s ease',
          minWidth: '80px',
          justifyContent: 'center'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = '#0284C7';
          e.target.style.transform = 'translateY(-1px)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = '#0EA5E9';
          e.target.style.transform = 'translateY(0)';
        }}
      >
        <span style={{ fontSize: '16px' }}>{currentLanguage.flag}</span>
        <span>{currentLanguage.name}</span>
        <svg 
          width="12" 
          height="12" 
          viewBox="0 0 12 12" 
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease'
          }}
        >
          <path 
            d="M3 4.5L6 7.5L9 4.5" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          right: '0',
          marginTop: '4px',
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          minWidth: '120px',
          overflow: 'hidden',
          animation: 'fadeIn 0.2s ease'
        }}>
          <style>
            {`
              @keyframes fadeIn {
                from { 
                  opacity: 0; 
                  transform: translateY(-10px); 
                }
                to { 
                  opacity: 1; 
                  transform: translateY(0); 
                }
              }
            `}
          </style>
          
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageSelect(lang.code)}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: 'none',
                background: currentLang === lang.code ? '#F0F9FF' : 'white',
                color: currentLang === lang.code ? '#0EA5E9' : '#374151',
                fontSize: '14px',
                fontWeight: currentLang === lang.code ? '600' : '500',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'all 0.2s ease',
                borderBottom: lang.code !== 'de' ? '1px solid #F3F4F6' : 'none'
              }}
              onMouseEnter={(e) => {
                if (currentLang !== lang.code) {
                  e.target.style.background = '#F9FAFB';
                }
              }}
              onMouseLeave={(e) => {
                if (currentLang !== lang.code) {
                  e.target.style.background = 'white';
                }
              }}
            >
              <span style={{ fontSize: '16px' }}>{lang.flag}</span>
              <span>{lang.name}</span>
              {currentLang === lang.code && (
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16" 
                  style={{ marginLeft: 'auto' }}
                >
                  <path 
                    d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                    fill="currentColor"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Overlay para fechar o dropdown */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            zIndex: -1
          }}
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default LanguageSelector;