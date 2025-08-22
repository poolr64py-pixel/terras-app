import React, { useState } from 'react';

const MobileMenu = ({ currentPage, setCurrentPage, setShowCRM }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setIsOpen(false);
  };

  const handleCRM = () => {
    setShowCRM(true);
    setIsOpen(false);
  };

  return (
    <>
      {/* Botão Hambúrguer - só aparece no mobile */}
      <button 
        onClick={toggleMenu}
        style={{
          display: 'block',
          background: 'rgba(255,255,255,0.9)',
          border: 'none',
          color: '#333',
          fontSize: '24px',
          cursor: 'pointer',
          padding: '10px'
        }}
        className="mobile-menu-btn"
      >
        ☰
      </button>

      {/* Menu Overlay */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 1001,
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <div style={{
            backgroundColor: 'none',
            width: '250px',
            height: '100%',
            padding: '20px',
            color: '#333'
          }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '30px'
            }}>
              <h3 style={{ margin: 0 }}>Menu</h3>
              <button 
                onClick={toggleMenu}
                style={{
                  background: 'rgba(255,255,255,0.9)',
                  border: 'none',
                  color: '#333',
                  fontSize: '24px',
                  cursor: 'pointer'
                }}
              >
                ✕
              </button>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <button onClick={() => handleNavigation('home')} style={menuItemStyle}>
                🏠 Início
              </button>
              <button onClick={() => handleNavigation('imoveis')} style={menuItemStyle}>
                🏘️ Imóveis
              </button>
              <button onClick={() => handleNavigation('servicos')} style={menuItemStyle}>
                ⚙️ Serviços
              </button>
              <button onClick={() => handleNavigation('sobre')} style={menuItemStyle}>
                ℹ️ Sobre
              </button>
              <button onClick={() => handleNavigation('contato')} style={menuItemStyle}>
                📞 Contato
              </button>
              <hr style={{ border: '1px solid rgba(255,255,255,0.3)', margin: '20px 0' }} />
              <button onClick={handleCRM} style={menuItemStyle}>
                👨‍💼 CRM Admin
              </button>
            </div>
          </div>
        </div>
      )}
      
      <style>{`
        @media (min-width: 769px) {
          .mobile-menu-btn {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

const menuItemStyle = {
  background: 'rgba(255,255,255,0.9)',
  border: 'none',
  color: '#333',
  fontSize: '16px',
  padding: '12px 0',
  textAlign: 'left',
  cursor: 'pointer',
  width: '100%',
  borderBottom: '1px solid rgba(255,255,255,0.1)'
};

export default MobileMenu;
