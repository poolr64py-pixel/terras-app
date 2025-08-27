import React, { Suspense } from 'react';

// Lazy loading dos componentes
export const LazyHomePage = React.lazy(() => import('../components/HomePage'));
export const LazyImoveisPage = React.lazy(() => import('../components/ImoveisPage'));
export const LazyServicosPage = React.lazy(() => import('../components/ServicosPage'));
export const LazySobrePage = React.lazy(() => import('../components/SobrePage'));
export const LazyContatoPage = React.lazy(() => import('../components/ContatoPage'));
export const LazyBlogSystem = React.lazy(() => import('../blog/BlogSystem'));
export const LazyCRMDashboard = React.lazy(() => import('../CRM'));

// Loading component
export const PageLoader = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '50vh',
    flexDirection: 'column',
    gap: '20px'
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '4px solid #f3f3f3',
      borderTop: '4px solid #667eea',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }} />
    <p style={{ color: '#666', fontSize: '16px' }}>Carregando...</p>
    <style>
      {`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}
    </style>
  </div>
);

// HOC para lazy loading com Suspense
export const withLazyLoading = (LazyComponent) => (props) => (
  <Suspense fallback={<PageLoader />}>
    <LazyComponent {...props} />
  </Suspense>
);