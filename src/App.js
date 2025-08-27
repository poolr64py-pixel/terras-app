import React, { useState, lazy, Suspense } from 'react';
import MobileMenu from './components/MobileMenu';

// Lazy Components
const LazyHomePage = lazy(() => import('./components/HomePage'));
const LazyImoveisPage = lazy(() => import('./components/ImoveisPage'));
const LazyServicosPage = lazy(() => import('./components/ServicosPage'));
const LazySobrePage = lazy(() => import('./components/SobrePage'));
const LazyContatoPage = lazy(() => import('./components/ContatoPage'));
const LazyBlogSystem = lazy(() => import('./blog/BlogSystem'));
const LazyCRMDashboard = lazy(() => import('./CRM'));

// HOC para Lazy Loading com fallback
const withLazyLoading = (Component) => (props) => (
  <Suspense fallback={<div>Carregando...</div>}>
    <Component {...props} />
  </Suspense>
);

function App() {
  const [showCRM, setShowCRM] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const whatsappNumber = '+595994718400';
  const sendWhatsApp = (message) => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  if (showCRM) {
    const LazyCRM = withLazyLoading(LazyCRMDashboard);
    return <LazyCRM onBack={() => setShowCRM(false)} />;
  }

  const renderPage = () => {
    const LazyHome = withLazyLoading(LazyHomePage);
    const LazyImoveis = withLazyLoading(LazyImoveisPage);
    const LazyServicos = withLazyLoading(LazyServicosPage);
    const LazySobre = withLazyLoading(LazySobrePage);
    const LazyContato = withLazyLoading(LazyContatoPage);
    const LazyBlog = withLazyLoading(LazyBlogSystem);

    switch (currentPage) {
      case 'imoveis':
        return <LazyImoveis onSendWhatsApp={sendWhatsApp} />;
      case 'servicos':
        return <LazyServicos onSendWhatsApp={sendWhatsApp} />;
      case 'sobre':
        return <LazySobre />;
      case 'contato':
        return <LazyContato onSendWhatsApp={sendWhatsApp} />;
      case 'blog':
        return <LazyBlog onSendWhatsApp={sendWhatsApp} />;
      default:
        return <LazyHome onSendWhatsApp={sendWhatsApp} onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'rgba(102, 126, 234, 0.95)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 50px',
        color: 'white'
      }}>
        <div
          style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
          onClick={() => setCurrentPage('home')}
        >
          <span style={{ fontSize: '24px' }}>🏠</span>
          <div>
            <h1 style={{ margin: 0, fontSize: '20px' }}>Imóveis Paraguay</h1>
            <p style={{ margin: 0, fontSize: '12px' }}>Terras no Paraguay</p>
          </div>
          <MobileMenu currentPage={currentPage} setCurrentPage={setCurrentPage} setShowCRM={setShowCRM} />
        </div>

        <nav className="desktop-nav" style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
          {['home', 'imoveis', 'servicos', 'sobre', 'contato', 'blog'].map((page) => (
            <button
              key={page}
              onClick={() => page === 'home' ? setCurrentPage('home') : setCurrentPage(page)}
              style={{
                background: 'none',
                border: 'none',
                color: currentPage === page ? '#fff' : 'rgba(255,255,255,0.8)',
                cursor: 'pointer',
                textDecoration: currentPage === page ? 'underline' : 'none'
              }}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          ))}
          <button
            onClick={() => setShowCRM(true)}
            style={{
              background: 'none',
              border: 'none',
              color: '#667eea',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
          >
            ⚙️👨‍💼 CRM Admin
          </button>
        </nav>
      </header>

      <div style={{ paddingTop: '80px' }}>
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
