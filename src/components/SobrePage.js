import ZenLanguageSelector from './ZenLanguageSelector';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const SobrePage = () => {
  const [currentLang, setCurrentLang] = useState('pt');

  const translations = {
    pt: {
      meta: {
        title: "Sobre a Terras no Paraguay | 12 Anos de Experiência | Especialistas Imobiliários",
        description: "Conheça a Terras no Paraguay: mais de 12 anos ajudando brasileiros a investir com segurança no mercado imobiliário paraguaio.",
        keywords: "sobre terras paraguay, experiencia imobiliaria paraguai, historia empresa, missao visao"
      },
      title: "Sobre a Terras no Paraguay",
      history: {
        title: "Nossa História",
        content: "Há mais de 12 anos ajudamos brasileiros a investir com segurança no Paraguay. Somos especialistas no mercado imobiliário paraguaio e oferecemos suporte completo desde a escolha do imóvel até a escritura final."
      },
      mission: {
        title: "Nossa Missão",
        content: "Democratizar o acesso ao mercado imobiliário paraguaio para investidores brasileiros, oferecendo total transparência, segurança jurídica e o melhor retorno sobre investimento."
      },
      why: {
        title: "Por que Paraguay?",
        reasons: [
          "Moeda estável (Guarani) com economia sólida",
          "Impostos reduzidos (0% sobre ganho de capital)",
          "Facilidade para residência fiscal",
          "Mercado imobiliário em crescimento",
          "Proximidade cultural e geográfica com o Brasil",
          "Custo de vida reduzido"
        ]
      }
    },
    es: {
      meta: {
        title: "Sobre Tierras en Paraguay | 12 Años de Experiencia | Especialistas Inmobiliarios",
        description: "Conoce Tierras en Paraguay: más de 12 años ayudando a brasileños a invertir con seguridad en el mercado inmobiliario paraguayo.",
        keywords: "sobre tierras paraguay, experiencia inmobiliaria paraguay, historia empresa, mision vision"
      },
      title: "Sobre Tierras en Paraguay",
      history: {
        title: "Nuestra Historia",
        content: "Hace más de 12 años ayudamos a brasileños a invertir con seguridad en Paraguay. Somos especialistas en el mercado inmobiliario paraguayo y ofrecemos soporte completo desde la elección del inmueble hasta la escritura final."
      },
      mission: {
        title: "Nuestra Misión",
        content: "Democratizar el acceso al mercado inmobiliario paraguayo para inversores brasileños, ofreciendo total transparencia, seguridad jurídica y el mejor retorno sobre la inversión."
      },
      why: {
        title: "¿Por qué Paraguay?",
        reasons: [
          "Moneda estable (Guaraní) con economía sólida",
          "Impuestos reducidos (0% sobre ganancia de capital)",
          "Facilidad para residencia fiscal",
          "Mercado inmobiliario en crecimiento",
          "Proximidad cultural y geográfica con Brasil",
          "Costo de vida reducido"
        ]
      }
    },
    en: {
      meta: {
        title: "About Tierras Paraguay | 12 Years of Experience | Real Estate Specialists",
        description: "Learn about Tierras Paraguay: over 12 years helping Brazilians invest safely in the Paraguayan real estate market.",
        keywords: "about tierras paraguay, real estate experience paraguay, company history, mission vision"
      },
      title: "About Tierras Paraguay",
      history: {
        title: "Our History",
        content: "For over 12 years we have been helping Brazilians invest safely in Paraguay. We are specialists in the Paraguayan real estate market and offer complete support from property selection to final deed."
      },
      mission: {
        title: "Our Mission",
        content: "To democratize access to the Paraguayan real estate market for Brazilian investors, offering total transparency, legal security and the best return on investment."
      },
      why: {
        title: "Why Paraguay?",
        reasons: [
          "Stable currency (Guarani) with solid economy",
          "Reduced taxes (0% on capital gains)",
          "Easy fiscal residency",
          "Growing real estate market",
          "Cultural and geographical proximity to Brazil",
          "Reduced cost of living"
        ]
      }
    },
    de: {
      meta: {
        title: "Über Tierras Paraguay | 12 Jahre Erfahrung | Immobilienspezialisten",
        description: "Lernen Sie Tierras Paraguay kennen: über 12 Jahre Erfahrung dabei, Brasilianern zu helfen, sicher in den paraguayanischen Immobilienmarkt zu investieren.",
        keywords: "über tierras paraguay, immobilienerfahrung paraguay, firmengeschichte, mission vision"
      },
      title: "Über Tierras Paraguay",
      history: {
        title: "Unsere Geschichte",
        content: "Seit über 12 Jahren helfen wir Brasilianern dabei, sicher in Paraguay zu investieren. Wir sind Spezialisten für den paraguayanischen Immobilienmarkt und bieten komplette Unterstützung von der Immobilienauswahl bis zur finalen Urkunde."
      },
      mission: {
        title: "Unsere Mission",
        content: "Den Zugang zum paraguayanischen Immobilienmarkt für brasilianische Investoren zu demokratisieren und dabei totale Transparenz, Rechtssicherheit und die beste Kapitalrendite zu bieten."
      },
      why: {
        title: "Warum Paraguay?",
        reasons: [
          "Stabile Währung (Guarani) mit solider Wirtschaft",
          "Reduzierte Steuern (0% auf Kapitalgewinne)",
          "Einfache steuerliche Residenz",
          "Wachsender Immobilienmarkt",
          "Kulturelle und geografische Nähe zu Brasilien",
          "Reduzierte Lebenshaltungskosten"
        ]
      }
    }
  };

  const t = translations[currentLang];

  return (
    <div style={{ background: '#f8f9fa', minHeight: 'calc(100vh - 80px)', padding: '40px 20px' }}>
      <Helmet>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <meta name="keywords" content={t.meta.keywords} />
      </Helmet>

      {/* Language Selector */}
     <ZenLanguageSelector currentLang={currentLang} setCurrentLang={setCurrentLang} />

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', fontSize: '36px', marginBottom: '40px', color: '#333' }}>
          {t.title}
        </h1>

        <div style={{ background: 'white', borderRadius: '15px', padding: '40px', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#667eea', marginBottom: '20px' }}>{t.history.title}</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '25px', color: '#555' }}>
            {t.history.content}
          </p>

          <h2 style={{ color: '#667eea', marginBottom: '20px' }}>{t.mission.title}</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '25px', color: '#555' }}>
            {t.mission.content}
          </p>

          <h2 style={{ color: '#667eea', marginBottom: '20px' }}>{t.why.title}</h2>
          <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px' }}>
            <ul style={{ lineHeight: '1.8', color: '#555', paddingLeft: '20px' }}>
              {t.why.reasons.map((reason, index) => (
                <li key={index} style={{ marginBottom: '8px' }}>
                  {['💱', '📊', '🏠', '📈', '🤝', '💰'][index]} {reason}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobrePage;