import React from 'react';

const CRMDashboard = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="mb-6">
          <div className="text-6xl mb-4">🏠</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">CRM Imóveis</h1>
          <p className="text-gray-600">Sistema de Gestão de Propriedades</p>
        </div>
        
        <div className="space-y-4">
          <a 
            href="./login-secure.html"
            className="block w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
          >
            🔐 CRM Admin - Login Seguro
          </a>
          
          <p className="text-sm text-gray-500">
            Acesso seguro com autenticação PHP
          </p>
          
          <button
            onClick={onBack}
            className="text-gray-600 hover:text-gray-900 text-sm"
          >
            ← Voltar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CRMDashboard;
