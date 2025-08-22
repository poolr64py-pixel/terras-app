import React, { useState, useEffect } from 'react';

const DashboardCRM = () => {
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
      { id: 3, title: 'Sitio Rural Premium', price: 'USD 180.000', status: 'Vendido', views: 28 }
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">🏠 Dashboard CRM</h1>
          <p className="text-gray-600">Visão geral das propriedades e performance</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Propriedades</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalProperties}</p>
              </div>
              <div className="text-4xl">🏠</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Visualizações</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalViews}</p>
              </div>
              <div className="text-4xl">👁️</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Leads do Mês</p>
                <p className="text-2xl font-bold text-gray-900">{stats.monthlyLeads}</p>
              </div>
              <div className="text-4xl">📞</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Ativos</p>
                <p className="text-2xl font-bold text-gray-900">{stats.activeListings}</p>
              </div>
              <div className="text-4xl">✅</div>
            </div>
          </div>
        </div>

        {/* Recent Properties */}
        <div className="bg-white rounded-xl shadow-sm border">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold">Propriedades Recentes</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {properties.map(property => (
                <div key={property.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                  <div className="flex-1">
                    <h4 className="font-medium">{property.title}</h4>
                    <p className="text-sm text-gray-600">{property.price}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500">{property.views} visualizações</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      property.status === 'Ativo' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {property.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCRM;
