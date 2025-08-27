import ZenLanguageSelector from './ZenLanguageSelector';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Analytics, FacebookPixel } from '../utils/Analytics';
const HomePage = ({ onSendWhatsApp, onNavigate }) => {
useEffect(() => {
  Analytics.trackPageView('/', 'Home - Terras Paraguay');
}, []);
  const [currentLang, setCurrentLang] = useState('pt');

  // Sistema de traduções completo
  const translations = {
    pt: {

      meta: {
        title: "Imóveis no Paraguai | Invista com Segurança Jurídica | Terras Paraguay",
        description: "Descubra propriedades premium no Paraguai com segurança jurídica completa e suporte especializado. Mais de 12 anos de experiência no mercado imobiliário paraguaio.",
        keywords: "imoveis paraguai, investir paraguai, terras paraguai, casas paraguai, apartamentos paraguai, residencia fiscal paraguai"
      },
      hero: {
        title: "Encontre a propriedade perfeita que combina com seu estilo de vida!",
        subtitle: "Descubra propriedades premium no Paraguai com total segurança jurídica e suporte especializado",
        searchPlaceholder: "Busque por localização, tipo de propriedade...",
        searchBtn: "Buscar",
        browseBtn: "Ver Todas as Propriedades",
        contactBtn: "Falar com Especialista",
        whatsappMsg: "Olá! Quero saber mais sobre propriedades premium no Paraguai."
      },
      featured: {
        title: "Propriedades em Destaque",
        subtitle: "Propriedades premium selecionadas com o maior potencial de investimento",
        contact: "Contatar",
        viewAll: "Ver Todas as Propriedades →",
        whatsappMsg: "Olá! Tenho interesse em: "
      },
      regions: {
        title: "Propriedades por Região",
        subtitle: "Explore propriedades nas localizações mais procuradas do Paraguai",
        available: "propriedades disponíveis"
      },
      cta: {
        title: "Deixe-nos ajudá-lo a encontrar a opção ideal!",
        subtitle: "Nossa equipe de especialistas está dedicada a ajudá-lo a encontrar a propriedade perfeita que se adequa ao seu estilo de vida e preferências. Seja para comprar, vender ou alugar, estamos aqui para guiá-lo em cada etapa do processo.",
        helpBtn: "Obter Ajuda Especializada",
        helpMsg: "Olá! Preciso de ajuda para encontrar a propriedade perfeita no Paraguai.",
        learnBtn: "Saiba Mais Sobre Nós"
      }
    },
    es: {
      meta: {
        title: "Inmuebles en Paraguay | Invierte con Seguridad Jurídica | Tierras Paraguay",
        description: "Descubre propiedades premium en Paraguay con completa seguridad jurídica y soporte especializado. Más de 12 años de experiencia en el mercado inmobiliario paraguayo.",
        keywords: "inmuebles paraguay, invertir paraguay, tierras paraguay, casas paraguay, apartamentos paraguay, residencia fiscal paraguay"
      },
      hero: {
        title: "¡Encuentra la propiedad perfecta que se adapte a tu estilo de vida!",
        subtitle: "Descubre propiedades premium en Paraguay con total seguridad jurídica y soporte especializado",
        searchPlaceholder: "Busca por ubicación, tipo de propiedad...",
        searchBtn: "Buscar",
        browseBtn: "Ver Todas las Propiedades",
        contactBtn: "Hablar con Especialista",
        whatsappMsg: "¡Hola! Quiero saber más sobre propiedades premium en Paraguay."
      },
      featured: {
        title: "Propiedades Destacadas",
        subtitle: "Propiedades premium seleccionadas con el mayor potencial de inversión",
        contact: "Contactar",
        viewAll: "Ver Todas las Propiedades →",
        whatsappMsg: "¡Hola! Tengo interés en: "
      },
      regions: {
        title: "Propiedades por Región",
        subtitle: "Explora propiedades en las ubicaciones más buscadas de Paraguay",
        available: "propiedades disponibles"
      },
      cta: {
        title: "¡Déjanos ayudarte a encontrar la opción ideal!",
        subtitle: "Nuestro equipo de especialistas está dedicado a ayudarte a encontrar la propiedad perfecta que se adapte a tu estilo de vida y preferencias. Ya sea para comprar, vender o alquilar, estamos aquí para guiarte en cada paso del proceso.",
        helpBtn: "Obtener Ayuda Especializada",
        helpMsg: "¡Hola! Necesito ayuda para encontrar la propiedad perfecta en Paraguay.",
        learnBtn: "Conoce Más Sobre Nosotros"
      }
    },
    en: {
      meta: {
        title: "Properties in Paraguay | Invest with Legal Security | Tierras Paraguay",
        description: "Discover premium properties in Paraguay with complete legal security and specialized support. Over 12 years of experience in the Paraguayan real estate market.",
        keywords: "properties paraguay, invest paraguay, land paraguay, houses paraguay, apartments paraguay, fiscal residency paraguay"
      },
      hero: {
        title: "Find the perfect property that fits your lifestyle!",
        subtitle: "Discover premium properties in Paraguay with complete legal security and expert support",
        searchPlaceholder: "Search by location, property type...",
        searchBtn: "Search",
        browseBtn: "Browse All Properties",
        contactBtn: "Contact Expert",
        whatsappMsg: "Hello! I want to know more about premium properties in Paraguay."
      },
      featured: {
        title: "Featured Properties",
        subtitle: "Hand-picked premium properties with the highest investment potential",
        contact: "Contact",
        viewAll: "View All Properties →",
        whatsappMsg: "Hello! I'm interested in: "
      },
      regions: {
        title: "Properties by Region",
        subtitle: "Explore properties in Paraguay's most sought-after locations",
        available: "properties available"
      },
      cta: {
        title: "Let us help you find the right option!",
        subtitle: "Our team of experts is dedicated to helping you find the perfect property that suits your lifestyle and preferences. Whether you're looking to buy, sell, or rent, we're here to guide you through every step of the process.",
        helpBtn: "Get Expert Help",
        helpMsg: "Hello! I need help finding the perfect property in Paraguay.",
        learnBtn: "Learn More About Us"
      }
    },
    de: {
      meta: {
        title: "Immobilien in Paraguay | Investieren mit Rechtssicherheit | Tierras Paraguay",
        description: "Entdecken Sie Premium-Immobilien in Paraguay mit vollständiger Rechtssicherheit und spezialisierter Unterstützung. Über 12 Jahre Erfahrung im paraguayanischen Immobilienmarkt.",
        keywords: "immobilien paraguay, investieren paraguay, land paraguay, häuser paraguay, wohnungen paraguay, steuerlicher wohnsitz paraguay"
      },
      hero: {
        title: "Finden Sie die perfekte Immobilie, die zu Ihrem Lebensstil passt!",
        subtitle: "Entdecken Sie Premium-Immobilien in Paraguay mit vollständiger Rechtssicherheit und Expertenbetreuung",
        searchPlaceholder: "Nach Standort, Immobilientyp suchen...",
        searchBtn: "Suchen",
        browseBtn: "Alle Immobilien durchsuchen",
        contactBtn: "Experten kontaktieren",
        whatsappMsg: "Hallo! Ich möchte mehr über Premium-Immobilien in Paraguay erfahren."
      },
      featured: {
        title: "Ausgewählte Immobilien",
        subtitle: "Handverlesene Premium-Immobilien mit höchstem Investitionspotential",
        contact: "Kontakt",
        viewAll: "Alle Immobilien ansehen →",
        whatsappMsg: "Hallo! Ich interessiere mich für: "
      },
      regions: {
        title: "Immobilien nach Regionen",
        subtitle: "Erkunden Sie Immobilien in Paraguays gefragtesten Standorten",
        available: "verfügbare Immobilien"
      },
      cta: {
        title: "Lassen Sie uns Ihnen helfen, die richtige Option zu finden!",
        subtitle: "Unser Expertenteam widmet sich der Aufgabe, Ihnen dabei zu helfen, die perfekte Immobilie zu finden, die zu Ihrem Lebensstil und Ihren Vorlieben passt. Ob Sie kaufen, verkaufen oder mieten möchten, wir begleiten Sie durch jeden Schritt des Prozesses.",
        helpBtn: "Expertenberatung erhalten",
        helpMsg: "Hallo! Ich benötige Hilfe bei der Suche nach der perfekten Immobilie in Paraguay.",
        learnBtn: "Mehr über uns erfahren"
      }
    }
  };

  const t = translations[currentLang];

  const featuredProperties = [
    {
      id: 1,
      title: currentLang === 'pt' ? 'Casa Premium Assunção Centro' :
             currentLang === 'es' ? 'Casa Premium Centro Asunción' :
             currentLang === 'en' ? 'Premium House Asunción Center' :
             'Premium Haus Asunción Zentrum',
      price: 'USD 350.000',
      area: '220m²',
      rooms: '4 quartos',
      location: currentLang === 'de' ? 'Asunción, Paraguay' : 'Assunção, Paraguay',
      image: '🏠',
      badge: 'Featured',
      type: currentLang === 'pt' ? 'Casa' : 
            currentLang === 'es' ? 'Casa' :
            currentLang === 'en' ? 'House' : 'Haus'
    },
    {
      id: 2,
      title: currentLang === 'pt' ? 'Apartamento Vista Rio Premium' :
             currentLang === 'es' ? 'Apartamento Vista Río Premium' :
             currentLang === 'en' ? 'Premium River View Apartment' :
             'Premium Apartment mit Flussblick',
      price: 'USD 280.000',
      area: '150m²',
      rooms: '3 quartos',
      location: 'Puerto Sajonia',
      image: '🏢',
      badge: 'New',
      type: currentLang === 'pt' ? 'Apartamento' :
            currentLang === 'es' ? 'Apartamento' :
            currentLang === 'en' ? 'Apartment' : 'Apartment'
    },
    {
      id: 3,
      title: currentLang === 'pt' ? 'Lote Comercial Centro' :
             currentLang === 'es' ? 'Lote Comercial Centro' :
             currentLang === 'en' ? 'Commercial Lot Downtown' :
             'Gewerbegrundstück Zentrum',
      price: 'USD 420.000',
      area: '400m²',
      rooms: 'Comercial',
      location: currentLang === 'pt' ? 'Centro, Assunção' :
               currentLang === 'es' ? 'Centro, Asunción' :
               currentLang === 'en' ? 'Downtown, Asunción' :
               'Zentrum, Asunción',
      image: '🏪',
      badge: 'Hot',
      type: currentLang === 'pt' ? 'Comercial' :
            currentLang === 'es' ? 'Comercial' :
            currentLang === 'en' ? 'Commercial' : 'Gewerbe'
    }
  ];

  const regions = [
    { 
      name: currentLang === 'de' ? 'Asunción Zentrum' : 'Assunção Centro', 
      properties: 45, 
      image: '🏙️' 
    },
    { name: 'Lambaré', properties: 32, image: '🏞️' },
    { name: 'San Lorenzo', properties: 28, image: '🏡' },
    { name: 'Capiatá', properties: 15, image: '🌾' }
  ];

  // Schema.org para SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Terras Paraguay",
    "description": t.meta.description,
    "url": "https://terrasnoparaguay.com",
    "telephone": "+595994718400",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PY",
      "addressRegion": "Asunción"
    },
    "areaServed": "Paraguay",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Propriedades Paraguay",
      "itemListElement": featuredProperties.map(prop => ({
        "@type": "RealEstateListing",
        "name": prop.title,
        "price": prop.price,
        "priceCurrency": "USD"
      }))
    }
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <meta name="keywords" content={t.meta.keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://terrasnoparaguay.com/${currentLang !== 'pt' ? currentLang : ''}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={t.meta.title} />
        <meta property="og:description" content={t.meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://terrasnoparaguay.com" />
        <meta property="og:image" content="https://terrasnoparaguay.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.meta.title} />
        <meta name="twitter:description" content={t.meta.description} />
        
        {/* Hreflang */}
        <link rel="alternate" hrefLang="pt" href="https://terrasnoparaguay.com" />
        <link rel="alternate" hrefLang="es" href="https://terrasnoparaguay.com/es" />
        <link rel="alternate" hrefLang="en" href="https://terrasnoparaguay.com/en" />
        <link rel="alternate" hrefLang="de" href="https://terrasnoparaguay.com/de" />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      {/* Language Selector */}
      <ZenLanguageSelector currentLang={currentLang} setCurrentLang={setCurrentLang} />


      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.3)',
          zIndex: 1
        }} />
        
        <div style={{ zIndex: 2, maxWidth: '800px', padding: '0 20px' }}>
          <h1 style={{
            fontSize: '56px',
            fontWeight: 'bold',
            marginBottom: '24px',
            lineHeight: '1.2'
          }}>
            {t.hero.title}
          </h1>
          
          <p style={{
            fontSize: '24px',
            marginBottom: '40px',
            opacity: 0.9,
            lineHeight: '1.6'
          }}>
            {t.hero.subtitle}
          </p>

          {/* Search Bar */}
          <div style={{
            background: 'rgba(255,255,255,0.95)',
            borderRadius: '50px',
            padding: '8px',
            display: 'flex',
            alignItems: 'center',
            maxWidth: '600px',
            margin: '0 auto 40px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
          }}>
            <input
              type="text"
              placeholder={t.hero.searchPlaceholder}
              style={{
                flex: 1,
                border: 'none',
                padding: '20px 24px',
                fontSize: '16px',
                borderRadius: '50px',
                outline: 'none',
                color: '#333'
              }}
            />
            <button
              onClick={() => onNavigate('imoveis')}
              style={{
                background: '#667eea',
                color: 'white',
                border: 'none',
                padding: '20px 32px',
                borderRadius: '50px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginRight: '4px'
              }}
            >
              🔍 {t.hero.searchBtn}
            </button>
          </div>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => onNavigate('imoveis')}
              style={{
                background: 'rgba(255,255,255,0.2)',
                border: '2px solid rgba(255,255,255,0.3)',
                color: 'white',
                padding: '16px 32px',
                borderRadius: '25px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)'
              }}
            >
              {t.hero.browseBtn}
            </button>
            <button
onClick={() => {
  Analytics.trackWhatsAppClick('Hero CTA');
  onSendWhatsApp(t.hero.whatsappMsg);
}}
             
              style={{
                background: '#25D366',
                border: 'none',
                color: 'white',
                padding: '16px 32px',
                borderRadius: '25px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              📱 {t.hero.contactBtn}
            </button>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section style={{ padding: '80px 20px', background: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '42px', fontWeight: 'bold', color: '#333', marginBottom: '16px' }}>
              {t.featured.title}
            </h2>
            <p style={{ fontSize: '18px', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              {t.featured.subtitle}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '32px'
          }}>
            {featuredProperties.map(property => (
              <article key={property.id} style={{
                background: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  background: property.badge === 'Featured' ? '#667eea' : 
                             property.badge === 'New' ? '#10B981' : '#EF4444',
                  color: 'white',
                  padding: '6px 16px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  zIndex: 2
                }}>
                  {property.badge}
                </div>

                <div style={{
                  height: '250px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '80px',
                  position: 'relative'
                }}>
                  {property.image}
                  <div style={{
                    position: 'absolute',
                    bottom: '20px',
                    right: '20px',
                    background: 'rgba(255,255,255,0.9)',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    color: '#333'
                  }}>
                    {property.type}
                  </div>
                </div>

                <div style={{ padding: '30px' }}>
                  <div style={{ marginBottom: '16px' }}>
                    <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#333', marginBottom: '8px' }}>
                      {property.title}
                    </h3>
                    <p style={{ color: '#666', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      📍 {property.location}
                    </p>
                  </div>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '20px',
                    padding: '16px',
                    background: '#f8f9fa',
                    borderRadius: '12px'
                  }}>
                    <div style={{ textAlign: 'center' }}>
                      <p style={{ fontSize: '12px', color: '#666', margin: '0 0 4px 0' }}>Área</p>
                      <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#333', margin: 0 }}>{property.area}</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <p style={{ fontSize: '12px', color: '#666', margin: '0 0 4px 0' }}>Quartos</p>
                      <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#333', margin: 0 }}>{property.rooms}</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#667eea', margin: 0 }}>
                        {property.price}
                      </p>
                    </div>
                    <button
                      onClick={() => onSendWhatsApp(`${t.featured.whatsappMsg}${property.title} - ${property.price}`)}
                      style={{
                        background: '#25D366',
                        color: 'white',
                        border: 'none',
                        padding: '12px 24px',
                        borderRadius: '25px',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                      }}
                    >
                      📱 {t.featured.contact}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button
              onClick={() => onNavigate('imoveis')}
              style={{
                background: '#667eea',
                color: 'white',
                border: 'none',
                padding: '16px 40px',
                borderRadius: '25px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              {t.featured.viewAll}
            </button>
          </div>
        </div>
      </section>

      {/* Properties by Region */}
      <section style={{ padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '42px', fontWeight: 'bold', color: '#333', marginBottom: '16px' }}>
              {t.regions.title}
            </h2>
            <p style={{ fontSize: '18px', color: '#666' }}>
              {t.regions.subtitle}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px'
          }}>
            {regions.map((region, index) => (
              <div key={index} style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '20px',
                padding: '40px 30px',
                textAlign: 'center',
                color: 'white',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onClick={() => onNavigate('imoveis')}>
                <div style={{ fontSize: '60px', marginBottom: '20px' }}>
                  {region.image}
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '12px' }}>
                  {region.name}
                </h3>
                <p style={{ fontSize: '16px', opacity: 0.9 }}>
                  {region.properties} {t.regions.available}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '80px 20px',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: 'bold', marginBottom: '24px' }}>
            {t.cta.title}
          </h2>
          <p style={{ fontSize: '20px', marginBottom: '40px', opacity: 0.9, lineHeight: '1.6' }}>
            {t.cta.subtitle}
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => onSendWhatsApp(t.cta.helpMsg)}
              style={{
                background: '#25D366',
                color: 'white',
                border: 'none',
                padding: '18px 40px',
                borderRadius: '25px',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              📱 {t.cta.helpBtn}
            </button>
            <button
              onClick={() => onNavigate('sobre')}
              style={{
                background: 'rgba(255,255,255,0.2)',
                border: '2px solid rgba(255,255,255,0.3)',
                color: 'white',
                padding: '16px 40px',
                borderRadius: '25px',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)'
              }}
            >
              {t.cta.learnBtn}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;