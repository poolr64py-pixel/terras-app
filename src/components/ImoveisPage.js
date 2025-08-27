import PropertyFilter from './PropertyFilter';
import ZenLanguageSelector from './ZenLanguageSelector';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const ImoveisPage = ({ onSendWhatsApp }) => {
  const [currentLang, setCurrentLang] = useState('pt');

  const translations = {
    pt: {
      meta: {
        title: "Imóveis Disponíveis no Paraguai | Casas, Apartamentos, Terrenos | Terras Paraguay",
        description: "Explore nossa seleção exclusiva de propriedades no Paraguai. Casas, apartamentos, terrenos comerciais com documentação completa e segurança jurídica.",
        keywords: "imoveis paraguai, casas paraguai, apartamentos paraguai, terrenos paraguai, propriedades paraguai"
      },

      title: "Imóveis Disponíveis no Paraguai",
      subtitle: "Seleção exclusiva de propriedades com alto potencial de valorização",
      interest: "Tenho Interesse",
      whatsappMsg: "Olá! Tenho interesse no imóvel: ",
      notFound: "Não encontrou o que procura?",
      notFoundDesc: "Temos mais opções disponíveis. Entre em contato conosco!",
      moreOptions: "Ver Mais Opções",
      moreOptionsMsg: "Olá! Gostaria de ver mais opções de imóveis disponíveis no Paraguai."
    },
    es: {
      meta: {
        title: "Inmuebles Disponibles en Paraguay | Casas, Apartamentos, Terrenos | Tierras Paraguay",
        description: "Explora nuestra selección exclusiva de propiedades en Paraguay. Casas, apartamentos, terrenos comerciales con documentación completa y seguridad jurídica.",
        keywords: "inmuebles paraguay, casas paraguay, apartamentos paraguay, terrenos paraguay, propiedades paraguay"
      },
      title: "Inmuebles Disponibles en Paraguay",
      subtitle: "Selección exclusiva de propiedades con alto potencial de valorización",
      interest: "Tengo Interés",
      whatsappMsg: "¡Hola! Tengo interés en el inmueble: ",
      notFound: "¿No encontraste lo que buscas?",
      notFoundDesc: "Tenemos más opciones disponibles. ¡Contáctanos!",
      moreOptions: "Ver Más Opciones",
      moreOptionsMsg: "¡Hola! Me gustaría ver más opciones de inmuebles disponibles en Paraguay."
    },
    en: {
      meta: {
        title: "Available Properties in Paraguay | Houses, Apartments, Land | Tierras Paraguay",
        description: "Explore our exclusive selection of properties in Paraguay. Houses, apartments, commercial land with complete documentation and legal security.",
        keywords: "properties paraguay, houses paraguay, apartments paraguay, land paraguay, real estate paraguay"
      },
      title: "Available Properties in Paraguay",
      subtitle: "Exclusive selection of properties with high appreciation potential",
      interest: "I'm Interested",
      whatsappMsg: "Hello! I'm interested in the property: ",
      notFound: "Didn't find what you're looking for?",
      notFoundDesc: "We have more options available. Contact us!",
      moreOptions: "See More Options",
      moreOptionsMsg: "Hello! I would like to see more property options available in Paraguay."
    },
    de: {
      meta: {
        title: "Verfügbare Immobilien in Paraguay | Häuser, Wohnungen, Grundstücke | Tierras Paraguay",
        description: "Entdecken Sie unsere exklusive Auswahl an Immobilien in Paraguay. Häuser, Wohnungen, Gewerbegrundstücke mit vollständiger Dokumentation und Rechtssicherheit.",
        keywords: "immobilien paraguay, häuser paraguay, wohnungen paraguay, grundstücke paraguay, immobilien paraguay"
      },
      title: "Verfügbare Immobilien in Paraguay",
      subtitle: "Exklusive Auswahl von Immobilien mit hohem Wertsteigerungspotential",
      interest: "Ich bin interessiert",
      whatsappMsg: "Hallo! Ich interessiere mich für die Immobilie: ",
      notFound: "Nicht gefunden, wonach Sie suchen?",
      notFoundDesc: "Wir haben weitere Optionen verfügbar. Kontaktieren Sie uns!",
      moreOptions: "Mehr Optionen ansehen",
      moreOptionsMsg: "Hallo! Ich möchte gerne mehr Immobilienoptionen in Paraguay sehen."
    }
  };

  const t = translations[currentLang];

  const properties = [
    {
      id: 1,
      title: currentLang === 'pt' ? 'Casa em Assunção Centro' :
             currentLang === 'es' ? 'Casa en Centro Asunción' :
             currentLang === 'en' ? 'House in Asunción Center' :
             'Haus in Asunción Zentrum',
      price: 'USD 185.000',
      area: '180m²',
      rooms: '3 quartos',
      location: currentLang === 'de' ? 'Asunción, Paraguay' : 'Assunção, Paraguay',
      description: currentLang === 'pt' ? 'Casa moderna em localização privilegiada no centro de Assunção.' :
                  currentLang === 'es' ? 'Casa moderna en ubicación privilegiada en el centro de Asunción.' :
                  currentLang === 'en' ? 'Modern house in privileged location in downtown Asunción.' :
                  'Modernes Haus in privilegierter Lage im Zentrum von Asunción.',
      image: '🏠',
      features: currentLang === 'pt' ? ['Garagem', 'Jardim', 'Piscina'] :
               currentLang === 'es' ? ['Garaje', 'Jardín', 'Piscina'] :
               currentLang === 'en' ? ['Garage', 'Garden', 'Pool'] :
               ['Garage', 'Garten', 'Pool']
    },
    {
      id: 2,
      title: currentLang === 'pt' ? 'Terreno em Lambaré' :
             currentLang === 'es' ? 'Terreno en Lambaré' :
             currentLang === 'en' ? 'Land in Lambaré' :
             'Grundstück in Lambaré',
      price: 'USD 95.000',
      area: '500m²',
      rooms: currentLang === 'pt' ? 'Terreno' :
             currentLang === 'es' ? 'Terreno' :
             currentLang === 'en' ? 'Land' :
             'Grundstück',
      location: 'Lambaré, Paraguay',
      description: currentLang === 'pt' ? 'Terreno pronto para construção em área nobre de Lambaré.' :
                  currentLang === 'es' ? 'Terreno listo para construcción en zona noble de Lambaré.' :
                  currentLang === 'en' ? 'Land ready for construction in prime area of Lambaré.' :
                  'Bauland in erstklassiger Lage von Lambaré.',
      image: '🏞️',
      features: currentLang === 'pt' ? ['Documentação OK', 'Área nobre', 'Fácil acesso'] :
               currentLang === 'es' ? ['Documentación OK', 'Zona noble', 'Fácil acceso'] :
               currentLang === 'en' ? ['Documentation OK', 'Prime area', 'Easy access'] :
               ['Dokumentation OK', 'Erstklassige Lage', 'Leichter Zugang']
    },
    {
      id: 3,
      title: currentLang === 'pt' ? 'Apartamento Vista Rio' :
             currentLang === 'es' ? 'Apartamento Vista Río' :
             currentLang === 'en' ? 'River View Apartment' :
             'Apartment mit Flussblick',
      price: 'USD 125.000',
      area: '95m²',
      rooms: '2 quartos',
      location: 'Puerto Sajonia',
      description: currentLang === 'pt' ? 'Apartamento com vista para o Rio Paraguai, totalmente mobiliado.' :
                  currentLang === 'es' ? 'Apartamento con vista al Río Paraguay, completamente amueblado.' :
                  currentLang === 'en' ? 'Apartment with Paraguay River view, fully furnished.' :
                  'Apartment mit Blick auf den Paraguay-Fluss, voll möbliert.',
      image: '🏢',
      features: currentLang === 'pt' ? ['Vista rio', 'Mobiliado', 'Sacada'] :
               currentLang === 'es' ? ['Vista río', 'Amueblado', 'Balcón'] :
               currentLang === 'en' ? ['River view', 'Furnished', 'Balcony'] :
               ['Flussblick', 'Möbliert', 'Balkon']
    },
    {
      id: 4,
      title: currentLang === 'pt' ? 'Chácara em Capiatá' :
             currentLang === 'es' ? 'Chacra en Capiatá' :
             currentLang === 'en' ? 'Ranch in Capiatá' :
             'Ranch in Capiatá',
      price: 'USD 220.000',
      area: '2000m²',
      rooms: '4 quartos',
      location: 'Capiatá, Paraguay',
      description: currentLang === 'pt' ? 'Chácara com casa principal e anexos, ideal para investimento.' :
                  currentLang === 'es' ? 'Chacra con casa principal y anexos, ideal para inversión.' :
                  currentLang === 'en' ? 'Ranch with main house and annexes, ideal for investment.' :
                  'Ranch mit Haupthaus und Nebengebäuden, ideal für Investitionen.',
      image: '🌾',
      features: currentLang === 'pt' ? ['Poço artesiano', 'Pomares', '2 casas'] :
               currentLang === 'es' ? ['Pozo artesiano', 'Frutales', '2 casas'] :
               currentLang === 'en' ? ['Artesian well', 'Orchards', '2 houses'] :
               ['Artesischer Brunnen', 'Obstgärten', '2 Häuser']
    },
    {
      id: 5,
      title: currentLang === 'pt' ? 'Lote Comercial Centro' :
             currentLang === 'es' ? 'Lote Comercial Centro' :
             currentLang === 'en' ? 'Commercial Lot Downtown' :
             'Gewerbegrundstück Zentrum',
      price: 'USD 350.000',
      area: '300m²',
      rooms: currentLang === 'pt' ? 'Comercial' :
             currentLang === 'es' ? 'Comercial' :
             currentLang === 'en' ? 'Commercial' :
             'Gewerbe',
      location: currentLang === 'pt' ? 'Centro, Assunção' :
               currentLang === 'es' ? 'Centro, Asunción' :
               currentLang === 'en' ? 'Downtown, Asunción' :
               'Zentrum, Asunción',
      description: currentLang === 'pt' ? 'Lote comercial em área de grande movimento, ideal para negócios.' :
                  currentLang === 'es' ? 'Lote comercial en zona de gran movimiento, ideal para negocios.' :
                  currentLang === 'en' ? 'Commercial lot in high-traffic area, ideal for business.' :
                  'Gewerbegrundstück in verkehrsreicher Gegend, ideal für Geschäfte.',
      image: '🏪',
      features: currentLang === 'pt' ? ['Alto tráfego', 'Zoneamento comercial', 'Esquina'] :
               currentLang === 'es' ? ['Alto tráfico', 'Zonificación comercial', 'Esquina'] :
               currentLang === 'en' ? ['High traffic', 'Commercial zoning', 'Corner lot'] :
               ['Hoher Verkehr', 'Gewerbezone', 'Ecklage']
    },
    {
      id: 6,
      title: currentLang === 'pt' ? 'Condomínio Fechado' :
             currentLang === 'es' ? 'Condominio Cerrado' :
             currentLang === 'en' ? 'Gated Community' :
             'Wohnanlage',
      price: 'USD 280.000',
      area: '150m²',
      rooms: '3 quartos',
      location: 'San Lorenzo',
      description: currentLang === 'pt' ? 'Casa em condomínio fechado com segurança 24h e área de lazer.' :
                  currentLang === 'es' ? 'Casa en condominio cerrado con seguridad 24h y área de recreo.' :
                  currentLang === 'en' ? 'House in gated community with 24h security and recreation area.' :
                  'Haus in Wohnanlage mit 24h-Sicherheit und Freizeitbereich.',
      image: '🏡',
      features: currentLang === 'pt' ? ['Segurança 24h', 'Área de lazer', 'Playground'] :
               currentLang === 'es' ? ['Seguridad 24h', 'Área de recreo', 'Playground'] :
               currentLang === 'en' ? ['24h security', 'Recreation area', 'Playground'] :
               ['24h-Sicherheit', 'Freizeitbereich', 'Spielplatz']
    }
  ];

  return (
    <div style={{ background: '#f8f9fa', minHeight: 'calc(100vh - 80px)', padding: '40px 20px' }}>

      <Helmet>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <meta name="keywords" content={t.meta.keywords} />
      </Helmet>

      <PropertyFilter 
       onFilter={(filters) => console.log('Filtros:', filters)} 
       currentLang={currentLang} 
     />
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

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '30px' 
        }}>
          {properties.map(property => (
            <div key={property.id} style={{
              background: 'white',
              borderRadius: '15px',
              padding: '25px',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ fontSize: '60px', textAlign: 'center', marginBottom: '20px' }}>
                {property.image}
              </div>
              
              <h3 style={{ fontSize: '22px', marginBottom: '10px', color: '#333' }}>
                {property.title}
              </h3>
              
              <p style={{ 
                fontSize: '28px', 
                fontWeight: 'bold', 
                color: '#667eea', 
                marginBottom: '15px' 
              }}>
                {property.price}
              </p>
              
              <div style={{ marginBottom: '15px' }}>
                <p style={{ margin: '5px 0', color: '#666' }}>
                  📐 {property.area}
                </p>
                <p style={{ margin: '5px 0', color: '#666' }}>
                  🛏️ {property.rooms}
                </p>
                <p style={{ margin: '5px 0', color: '#666' }}>
                  📍 {property.location}
                </p>
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {property.features.map((feature, index) => (
                    <span key={index} style={{
                      background: '#667eea',
                      color: 'white',
                      padding: '4px 8px',
                      borderRadius: '12px',
                      fontSize: '12px',
                      fontWeight: '500'
                    }}>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              <p style={{ 
                color: '#666', 
                marginBottom: '20px', 
                lineHeight: '1.5' 
              }}>
                {property.description}
              </p>
              
              <button
                onClick={() => onSendWhatsApp(`${t.whatsappMsg}${property.title} - ${property.price}. ${currentLang === 'pt' ? 'Gostaria de mais informações.' : currentLang === 'es' ? 'Me gustaría más información.' : currentLang === 'en' ? 'I would like more information.' : 'Ich hätte gerne weitere Informationen.'}`)}
                style={{
                  width: '100%',
                  background: '#25D366',
                  color: 'white',
                  border: 'none',
                  padding: '12px',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                📱 {t.interest}
              </button>
            </div>
          ))}
        </div>
        
        <div style={{ 
          textAlign: 'center', 
          marginTop: '40px', 
          padding: '30px', 
          background: 'white',
          borderRadius: '15px',
          boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ marginBottom: '15px', color: '#333' }}>
            {t.notFound}
          </h3>
          <p style={{ marginBottom: '20px', color: '#666' }}>
            {t.notFoundDesc}
          </p>
          <button
            onClick={() => onSendWhatsApp(t.moreOptionsMsg)}
            style={{
              background: '#667eea',
              color: 'white',
              border: 'none',
              padding: '15px 30px',
              borderRadius: '25px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            {t.moreOptions}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImoveisPage;