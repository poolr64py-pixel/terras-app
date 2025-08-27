import React, { useState } from 'react';

const PropertyFilter = ({ onFilter, currentLang }) => {
  const [filters, setFilters] = useState({
    type: 'all',
    priceRange: 'all',
    location: 'all',
    area: 'all'
  });

  const translations = {
    pt: {
      filterBy: 'Filtrar por:',
      propertyType: 'Tipo',
      priceRange: 'Preço',
      location: 'Localização',
      area: 'Área',
      all: 'Todos',
      house: 'Casa',
      apartment: 'Apartamento',
      land: 'Terreno',
      commercial: 'Comercial',
      under100k: 'Até USD 100k',
      '100k200k': 'USD 100k - 200k',
      '200k300k': 'USD 200k - 300k',
      above300k: 'Acima de USD 300k',
      asuncion: 'Assunção',
      lambare: 'Lambaré',
      sanlorenzo: 'San Lorenzo',
      capiata: 'Capiatá',
      under100m: 'Até 100m²',
      '100m200m': '100m² - 200m²',
      above200m: 'Acima de 200m²'
    },
    es: {
      filterBy: 'Filtrar por:',
      propertyType: 'Tipo',
      priceRange: 'Precio',
      location: 'Ubicación',
      area: 'Área',
      all: 'Todos',
      house: 'Casa',
      apartment: 'Apartamento',
      land: 'Terreno',
      commercial: 'Comercial'
    },
    en: {
      filterBy: 'Filter by:',
      propertyType: 'Type',
      priceRange: 'Price',
      location: 'Location',
      area: 'Area',
      all: 'All',
      house: 'House',
      apartment: 'Apartment',
      land: 'Land',
      commercial: 'Commercial'
    },
    de: {
      filterBy: 'Filtern nach:',
      propertyType: 'Typ',
      priceRange: 'Preis',
      location: 'Standort',
      area: 'Fläche',
      all: 'Alle',
      house: 'Haus',
      apartment: 'Apartment',
      land: 'Grundstück',
      commercial: 'Gewerbe'
    }
  };

  const t = translations[currentLang] || translations.pt;

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
onFilter(newFilters);
  };

  return (
    <div style={{
      background: 'white',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      marginBottom: '30px'
    }}>
      <h3 style={{ marginBottom: '20px', color: '#333' }}>{t.filterBy}</h3>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px'
      }}>
        {/* Tipo */}
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
            {t.propertyType}
          </label>
          <select
            value={filters.type}
            onChange={(e) => handleFilterChange('type', e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #ddd',
              fontSize: '14px'
            }}
          >
            <option value="all">{t.all}</option>
            <option value="house">{t.house}</option>
            <option value="apartment">{t.apartment}</option>
            <option value="land">{t.land}</option>
            <option value="commercial">{t.commercial}</option>
          </select>
        </div>

        {/* Preço */}
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
            {t.priceRange}
          </label>
          <select
            value={filters.priceRange}
            onChange={(e) => handleFilterChange('priceRange', e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #ddd',
              fontSize: '14px'
            }}
          >
            <option value="all">{t.all}</option>
            <option value="under100k">{t.under100k}</option>
            <option value="100k200k">{t['100k200k']}</option>
            <option value="200k300k">{t['200k300k']}</option>
            <option value="above300k">{t.above300k}</option>
          </select>
        </div>

        {/* Localização */}
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
            {t.location}
          </label>
          <select
            value={filters.location}
            onChange={(e) => handleFilterChange('location', e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #ddd',
              fontSize: '14px'
            }}
          >
            <option value="all">{t.all}</option>
            <option value="asuncion">{t.asuncion}</option>
            <option value="lambare">{t.lambare}</option>
            <option value="sanlorenzo">{t.sanlorenzo}</option>
            <option value="capiata">{t.capiata}</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilter;