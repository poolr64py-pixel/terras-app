import ZenLanguageSelector from './ZenLanguageSelector';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const ServicosPage = ({ onSendWhatsApp }) => {
  const [currentLang, setCurrentLang] = useState('pt');

  const translations = {
    pt: {
      meta: {
        title: "Serviços Imobiliários Paraguay | Consultoria, Assessoria Jurídica | Terras Paraguay",
        description: "Serviços completos para investimento imobiliário no Paraguay: consultoria, assessoria jurídica, planejamento financeiro, residência fiscal e mais.",
        keywords: "servicos imobiliarios paraguai, consultoria paraguai, assessoria juridica paraguai, residencia fiscal paraguai"
      },
      title: "Nossos Serviços",
      subtitle: "Suporte completo para seu investimento imobiliário no Paraguay",
      requestQuote: "Solicitar Orçamento",
      whatsappMsg: "Olá! Gostaria de mais informações sobre: "
    },
    es: {
      meta: {
        title: "Servicios Inmobiliarios Paraguay | Consultoría, Asesoría Jurídica | Tierras Paraguay",
        description: "Servicios completos para inversión inmobiliaria en Paraguay: consultoría, asesoría jurídica, planificación financiera, residencia fiscal y más.",
        keywords: "servicios inmobiliarios paraguay, consultoria paraguay, asesoria juridica paraguay, residencia fiscal paraguay"
      },
      title: "Nuestros Servicios",
      subtitle: "Soporte completo para su inversión inmobiliaria en Paraguay",
      requestQuote: "Solicitar Presupuesto",
      whatsappMsg: "¡Hola! Me gustaría más información sobre: "
    },
    en: {
      meta: {
        title: "Real Estate Services Paraguay | Consulting, Legal Advisory | Tierras Paraguay",
        description: "Complete services for real estate investment in Paraguay: consulting, legal advisory, financial planning, fiscal residency and more.",
        keywords: "real estate services paraguay, consulting paraguay, legal advisory paraguay, fiscal residency paraguay"
      },
      title: "Our Services",
      subtitle: "Complete support for your real estate investment in Paraguay",
      requestQuote: "Request Quote",
      whatsappMsg: "Hello! I would like more information about: "
    },
    de: {
      meta: {
        title: "Immobiliendienstleistungen Paraguay | Beratung, Rechtsberatung | Tierras Paraguay",
        description: "Komplette Dienstleistungen für Immobilieninvestitionen in Paraguay: Beratung, Rechtsberatung, Finanzplanung, steuerlicher Wohnsitz und mehr.",
        keywords: "immobiliendienstleistungen paraguay, beratung paraguay, rechtsberatung paraguay, steuerlicher wohnsitz paraguay"
      },
      title: "Unsere Dienstleistungen",
      subtitle: "Komplette Unterstützung für Ihre Immobilieninvestition in Paraguay",
      requestQuote: "Angebot anfordern",
      whatsappMsg: "Hallo! Ich hätte gerne weitere Informationen über: "
    }
  };

  const getServices = (lang) => [
    {
      icon: '🏠',
      title: lang === 'pt' ? 'Consultoria Imobiliária' :
            lang === 'es' ? 'Consultoría Inmobiliaria' :
            lang === 'en' ? 'Real Estate Consulting' :
            'Immobilienberatung',
      description: lang === 'pt' ? 'Análise completa do mercado paraguaio e seleção de imóveis com melhor potencial de valorização.' :
                  lang === 'es' ? 'Análisis completo del mercado paraguayo y selección de inmuebles con mejor potencial de valorización.' :
                  lang === 'en' ? 'Complete analysis of Paraguayan market and selection of properties with best appreciation potential.' :
                  'Vollständige Analyse des paraguayanischen Marktes und Auswahl von Immobilien mit bestem Wertsteigerungspotential.',
      price: lang === 'pt' ? 'Consultoria gratuita' :
             lang === 'es' ? 'Consultoría gratuita' :
             lang === 'en' ? 'Free consultation' :
             'Kostenlose Beratung'
    },
    {
      icon: '⚖️',
      title: lang === 'pt' ? 'Assessoria Jurídica' :
            lang === 'es' ? 'Asesoría Jurídica' :
            lang === 'en' ? 'Legal Advisory' :
            'Rechtsberatung',
      description: lang === 'pt' ? 'Acompanhamento jurídico completo desde a due diligence até a escritura final.' :
                  lang === 'es' ? 'Acompañamiento jurídico completo desde la due diligence hasta la escritura final.' :
                  lang === 'en' ? 'Complete legal support from due diligence to final deed.' :
                  'Vollständige rechtliche Betreuung von Due Diligence bis zur finalen Urkunde.',
      price: lang === 'pt' ? 'A partir de R$ 5.500' :
             lang === 'es' ? 'Desde R$ 5.500' :
             lang === 'en' ? 'From R$ 5,500' :
             'Ab R$ 5.500'
    },
    {
      icon: '💰',
      title: lang === 'pt' ? 'Planejamento Financeiro' :
            lang === 'es' ? 'Planificación Financiera' :
            lang === 'en' ? 'Financial Planning' :
            'Finanzplanung',
      description: lang === 'pt' ? 'Estruturação de investimento e planejamento tributário para maximizar rentabilidade.' :
                  lang === 'es' ? 'Estructuración de inversión y planificación tributaria para maximizar rentabilidad.' :
                  lang === 'en' ? 'Investment structuring and tax planning to maximize profitability.' :
                  'Investitionsstrukturierung und Steuerplanung zur Rentabilitätsmaximierung.',
      price: lang === 'pt' ? 'A partir de R$ 3.500' :
             lang === 'es' ? 'Desde R$ 3.500' :
             lang === 'en' ? 'From R$ 3,500' :
             'Ab R$ 3.500'
    },
    {
      icon: '📄',
      title: lang === 'pt' ? 'Residência Fiscal' :
            lang === 'es' ? 'Residencia Fiscal' :
            lang === 'en' ? 'Fiscal Residency' :
            'Steuerlicher Wohnsitz',
      description: lang === 'pt' ? 'Assessoria completa para obtenção de residência fiscal no Paraguay.' :
                  lang === 'es' ? 'Asesoría completa para obtención de residencia fiscal en Paraguay.' :
                  lang === 'en' ? 'Complete advisory for obtaining fiscal residency in Paraguay.' :
                  'Vollständige Beratung für die Erlangung des steuerlichen Wohnsitzes in Paraguay.',
      price: lang === 'pt' ? 'A partir de R$ 8.500' :
             lang === 'es' ? 'Desde R$ 8.500' :
             lang === 'en' ? 'From R$ 8,500' :
             'Ab R$ 8.500'
    },
    {
      icon: '🏗️',
      title: lang === 'pt' ? 'Construção e Reforma' :
            lang === 'es' ? 'Construcción y Reforma' :
            lang === 'en' ? 'Construction and Renovation' :
            'Bau und Renovierung',
      description: lang === 'pt' ? 'Gerenciamento de obras e reformas com equipe local especializada.' :
                  lang === 'es' ? 'Gestión de obras y reformas con equipo local especializado.' :
                  lang === 'en' ? 'Construction and renovation management with specialized local team.' :
                  'Bau- und Renovierungsmanagement mit spezialisiertem lokalen Team.',
      price: lang === 'pt' ? 'Orçamento personalizado' :
             lang === 'es' ? 'Presupuesto personalizado' :
             lang === 'en' ? 'Personalized quote' :
             'Individuelles Angebot'
    },
    {
      icon: '🏢',
      title: lang === 'pt' ? 'Gestão Patrimonial' :
            lang === 'es' ? 'Gestión Patrimonial' :
            lang === 'en' ? 'Asset Management' :
            'Vermögensverwaltung',
      description: lang === 'pt' ? 'Administração e gestão do seu patrimônio imobiliário no Paraguay.' :
                  lang === 'es' ? 'Administración y gestión de su patrimonio inmobiliario en Paraguay.' :
                  lang === 'en' ? 'Administration and management of your real estate assets in Paraguay.' :
                  'Verwaltung und Management Ihres Immobilienvermögens in Paraguay.',
      price: lang === 'pt' ? 'A partir de R$ 1.200/mês' :
             lang === 'es' ? 'Desde R$ 1.200/mes' :
             lang === 'en' ? 'From R$ 1,200/month' :
             'Ab R$ 1.200/Monat'
    }
  ];

  const t = translations[currentLang];
  const services = getServices(currentLang);

  return (
    <div style={{ background: '#f8f9fa', minHeight: 'calc(100vh - 80px)', padding: '40px 20px' }}>
      <Helmet>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <meta name="keywords" content={t.meta.keywords} />
      </Helmet>

      {/* Language Selector */}
      <ZenLanguageSelector currentLang={currentLang} setCurrentLang={setCurrentLang} />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '36px', marginBottom: '16px', color: '#333' }}>
            {t.title}
          </h1>
          <p style={{ fontSize: '18px', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            {t.subtitle}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {services.map((service, index) => (
            <div key={index} style={{
              background: 'white',
              borderRadius: '15px',
              padding: '30px',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>{service.icon}</div>
              <h3 style={{ fontSize: '22px', marginBottom: '15px', color: '#333' }}>{service.title}</h3>
              <p style={{ color: '#666', marginBottom: '20px', lineHeight: '1.6' }}>{service.description}</p>
              <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#667eea', marginBottom: '20px' }}>{service.price}</p>
              <button
                onClick={() => onSendWhatsApp(`${t.whatsappMsg}${service.title}`)}
                style={{
                  background: '#667eea',
                  color: 'white',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                {t.requestQuote}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicosPage;