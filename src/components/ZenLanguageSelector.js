import React, { useState } from 'react';

const ZenLanguageSelector = ({ currentLang, setCurrentLang }) => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);

  const languages = [
    { code: 'pt', flag: '🇧🇷', name: 'PT' },
    { code: 'es', flag: '🇪🇸', name: 'ES' },
    { code: 'en', flag: '🇺🇸', name: 'EN' },
    { code: 'de', flag: '🇩🇪', name: 'DE' }
  ];

  const currencies = [
    { code: 'USD', symbol: '$', name: 'USD' },
    { code: 'BRL', symbol: 'R$', name: 'BRL' },
    { code: 'EUR', symbol: '€', name: 'EUR' },
    { code: 'PYG', symbol: '₲', name: 'PYG' }
  ];

  const [currentCurrency, setCurrentCurrency] = useState('USD');
  const currentLanguage = languages.find(lang => lang.code === currentLang);
  const selectedCurrency = currencies.find(curr => curr.code === currentCurrency);

  const handleLanguageSelect = (langCode) => {
    setCurrentLang(langCode);
    setIsLangOpen(false);
  };

  const handleCurrencySelect = (currCode) => {
    setCurrentCurrency(currCode);
    setIsCurrencyOpen(false);
  };

  return (
    <div style={{
      position: 'fixed',
      top: '90px',
      right: '15px',
      zIndex: 1001,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      display: 'flex',
      gap: '8px'
    }}>
      <div style={{ position: 'relative' }}>
        <button
          onClick={() => setIsLangOpen(!isLangOpen)}
          style={{
            background: '#0EA5E9',
            color: 'white',
            border: 'none',
            borderRadius: '25px',
            padding: '10px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 2px 10px rgba(14, 165, 233, 0.3)',
            minWidth: '85px',
            justifyContent: 'center'
          }}
        >
          🌐 <span>{currentLanguage.name}</span>
          <span style={{ transform: isLangOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
        </button>

        {isLangOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            right: '0',
            marginTop: '4px',
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            minWidth: '140px',
            overflow: 'hidden'
          }}>
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
                  borderBottom: lang.code !== 'de' ? '1px solid #F3F4F6' : 'none'
                }}
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <div style={{ position: 'relative' }}>
        <button
          onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
          style={{
            background: '#10B981',
            color: 'white',
            border: 'none',
            borderRadius: '25px',
            padding: '10px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 2px 10px rgba(16, 185, 129, 0.3)',
            minWidth: '90px',
            justifyContent: 'center'
          }}
        >
          💰 <span>{selectedCurrency.symbol} {selectedCurrency.name}</span>
          <span style={{ transform: isCurrencyOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
        </button>

        {isCurrencyOpen && (
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
            overflow: 'hidden'
          }}>
            {currencies.map((currency) => (
              <button
                key={currency.code}
                onClick={() => handleCurrencySelect(currency.code)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: 'none',
                  background: currentCurrency === currency.code ? '#F0FDF4' : 'white',
                  color: currentCurrency === currency.code ? '#10B981' : '#374151',
                  fontSize: '14px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  borderBottom: currency.code !== 'PYG' ? '1px solid #F3F4F6' : 'none'
                }}
              >
                <span>{currency.symbol}</span>
                <span>{currency.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {(isLangOpen || isCurrencyOpen) && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            zIndex: -1
          }}
          onClick={() => {
            setIsLangOpen(false);
            setIsCurrencyOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default ZenLanguageSelector;