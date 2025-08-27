import React, { useState, useEffect } from 'react';

const DashboardCRM = ({ onBack }) => {
  const [stats, setStats] = useState({
    totalProperties: 0,
    totalViews: 0,
    monthlyLeads: 0,
    activeListings: 0
  });

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Simular dados por enquanto
    setStats({
      totalProperties: 15,
      totalViews: 1250,
      monthlyLeads: 23,
      activeListings: 12
    });

    setProperties([
      { id: 1, title: 'Casa Moderna Centro', price: 'USD 350.000', status: 'Ativo', views: 45 },
      { id: 2, title: 'Apartamento Vista Mar', price: 'USD 250.000', status: 'Ativo', views: 32 },
      { id: 3, title: 'Sítio Rural Premium', price: 'USD 180.000', status: 'Vendido', views: 28 }
    ]);
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa', padding: '24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header com botão Voltar */}
        <div style={{ marginBottom: '32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#333', marginBottom: '8px' }}>
              🏠 Dashboard CRM
            </h1>
            <p style={{ color: '#666' }}>Visão geral das propriedades e performance</p>
          </div>
          
          {/* Botão Voltar */}
          <button
            onClick={onBack}
            style={{
              background: '#667eea',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            ← Voltar para Site
          </button>
        </div>

        {/* Stats Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '24px', 
          marginBottom: '32px' 
        }}>
          <div style={{ background: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>Total Propriedades</p>
                <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#333' }}>{stats.totalProperties}</p>
              </div>
              <div style={{ fontSize: '48px' }}>🏠</div>
            </div>
          </div>

          <div style={{ background: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>Visualizações</p>
                <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#333' }}>{stats.totalViews}</p>
              </div>
              <div style={{ fontSize: '48px' }}>👀</div>
            </div>
          </div>

          <div style={{ background: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>Leads do Mês</p>
                <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#333' }}>{stats.monthlyLeads}</p>
              </div>
              <div style={{ fontSize: '48px' }}>📞</div>
            </div>
          </div>

          <div style={{ background: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>Ativos</p>
                <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#333' }}>{stats.activeListings}</p>
              </div>
              <div style={{ fontSize: '48px' }}>✅</div>
            </div>
          </div>
        </div>

        {/* Recent Properties */}
        <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <div style={{ padding: '24px', borderBottom: '1px solid #eee' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#333' }}>Propriedades Recentes</h3>
          </div>
          <div style={{ padding: '24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {properties.map(property => (
                <div key={property.id} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px',
                  border: '1px solid #eee',
                  borderRadius: '8px',
                  transition: 'background 0.2s ease'
                }}>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontWeight: '500', marginBottom: '4px', color: '#333' }}>{property.title}</h4>
                    <p style={{ fontSize: '14px', color: '#666' }}>{property.price}</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span style={{ fontSize: '14px', color: '#666' }}>{property.views} visualizações</span>
                    <span style={{
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: '500',
                      background: property.status === 'Ativo' ? '#dcfce7' : '#f3f4f6',
                      color: property.status === 'Ativo' ? '#166534' : '#374151'
                    }}>
                      {property.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Botão Voltar no rodapé também */}
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <button
            onClick={onBack}
            style={{
              background: '#6b7280',
              color: 'white',
              border: 'none',
              padding: '12px 32px',
              borderRadius: '8px',
              fontSize: '16px',
              cursor: 'pointer'
            }}
          >
            ← Voltar para o Site
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardCRM;