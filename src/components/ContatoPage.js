import ZenLanguageSelector from './ZenLanguageSelector';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const ContatoPage = ({ onSendWhatsApp }) => {
  const [currentLang, setCurrentLang] = useState('pt');

  const translations = {
    pt: {
      meta: {
        title: "Contato | Fale Conosco WhatsApp | Terras no Paraguay",
        description: "Entre em contato conosco via WhatsApp, email ou visite nossos escritórios no Brasil e Paraguay. Atendimento especializado em português.",
        keywords: "contato terras paraguay, whatsapp paraguai, escritorio brasil paraguay, atendimento portugues"
      },
      title: "Entre em Contato",
      channels: "Nossos Canais",
      whatsapp: "WhatsApp",
      sendMessage: "Enviar Mensagem",
      email: "Email",
      offices: "Escritórios",
      brazil: "Brasil",
      paraguay: "Paraguay",
      quickService: "Atendimento Rápido",
      quickServiceDesc: "Para agilizar o atendimento, clique no botão abaixo para falar diretamente no WhatsApp:",
      talkWhatsApp: "Falar no WhatsApp",
      schedule: "Horário de Atendimento",
      weekdays: "Segunda a Sexta: 8h às 18h",
      saturday: "Sábado: 8h às 12h",
      sunday: "Domingo: Emergências",
      whatsappMsg: "Olá! Gostaria de mais informações sobre investimentos no Paraguay.",
      quickWhatsappMsg: "Olá! Gostaria de mais informações sobre investimentos em imóveis no Paraguay."
    },
    es: {
      meta: {
        title: "Contacto | Hable con Nosotros WhatsApp | Tierras en Paraguay",
        description: "Póngase en contacto con nosotros vía WhatsApp, email o visite nuestras oficinas en Brasil y Paraguay. Atención especializada en español.",
        keywords: "contacto tierras paraguay, whatsapp paraguay, oficina brasil paraguay, atencion español"
      },
      title: "Póngase en Contacto",
      channels: "Nuestros Canales",
      whatsapp: "WhatsApp",
      sendMessage: "Enviar Mensaje",
      email: "Email",
      offices: "Oficinas",
      brazil: "Brasil",
      paraguay: "Paraguay",
      quickService: "Atención Rápida",
      quickServiceDesc: "Para agilizar la atención, haga clic en el botón de abajo para hablar directamente por WhatsApp:",
      talkWhatsApp: "Hablar por WhatsApp",
      schedule: "Horario de Atención",
      weekdays: "Lunes a Viernes: 8h a 18h",
      saturday: "Sábado: 8h a 12h",
      sunday: "Domingo: Emergencias",
      whatsappMsg: "¡Hola! Me gustaría más información sobre inversiones en Paraguay.",
      quickWhatsappMsg: "¡Hola! Me gustaría más información sobre inversiones en inmuebles en Paraguay."
    },
    en: {
      meta: {
        title: "Contact | Talk to Us WhatsApp | Tierras Paraguay",
        description: "Contact us via WhatsApp, email or visit our offices in Brazil and Paraguay. Specialized service in English.",
        keywords: "contact tierras paraguay, whatsapp paraguay, office brazil paraguay, english service"
      },
      title: "Get in Touch",
      channels: "Our Channels",
      whatsapp: "WhatsApp",
      sendMessage: "Send Message",
      email: "Email",
      offices: "Offices",
      brazil: "Brazil",
      paraguay: "Paraguay",
      quickService: "Quick Service",
      quickServiceDesc: "For faster service, click the button below to talk directly on WhatsApp:",
      talkWhatsApp: "Talk on WhatsApp",
      schedule: "Business Hours",
      weekdays: "Monday to Friday: 8am to 6pm",
      saturday: "Saturday: 8am to 12pm",
      sunday: "Sunday: Emergencies",
      whatsappMsg: "Hello! I would like more information about investments in Paraguay.",
      quickWhatsappMsg: "Hello! I would like more information about real estate investments in Paraguay."
    },
    de: {
      meta: {
        title: "Kontakt | Sprechen Sie mit uns WhatsApp | Tierras Paraguay",
        description: "Kontaktieren Sie uns über WhatsApp, E-Mail oder besuchen Sie unsere Büros in Brasilien und Paraguay. Spezialisierter Service auf Deutsch.",
        keywords: "kontakt tierras paraguay, whatsapp paraguay, büro brasilien paraguay, deutscher service"
      },
      title: "Kontakt aufnehmen",
      channels: "Unsere Kanäle",
      whatsapp: "WhatsApp",
      sendMessage: "Nachricht senden",
      email: "E-Mail",
      offices: "Büros",
      brazil: "Brasilien",
      paraguay: "Paraguay",
      quickService: "Schneller Service",
      quickServiceDesc: "Für schnelleren Service klicken Sie auf die Schaltfläche unten, um direkt über WhatsApp zu sprechen:",
      talkWhatsApp: "Über WhatsApp sprechen",
      schedule: "Geschäftszeiten",
      weekdays: "Montag bis Freitag: 8 bis 18 Uhr",
      saturday: "Samstag: 8 bis 12 Uhr",
      sunday: "Sonntag: Notfälle",
      whatsappMsg: "Hallo! Ich hätte gerne weitere Informationen über Investitionen in Paraguay.",
      quickWhatsappMsg: "Hallo! Ich hätte gerne weitere Informationen über Immobilieninvestitionen in Paraguay."
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

      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', fontSize: '36px', marginBottom: '40px', color: '#333' }}>
          {t.title}
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          <div style={{ background: 'white', borderRadius: '15px', padding: '30px', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' }}>
            <h2 style={{ color: '#667eea', marginBottom: '25px' }}>{t.channels}</h2>

            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ color: '#333', marginBottom: '10px' }}>📱 {t.whatsapp}</h3>
              <p style={{ color: '#666', marginBottom: '10px' }}>+595 99 471 8400</p>
              <button
                onClick={() => onSendWhatsApp(t.whatsappMsg)}
                style={{
                  background: '#25D366',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  cursor: 'pointer'
                }}
              >
                {t.sendMessage}
              </button>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ color: '#333', marginBottom: '10px' }}>📧 {t.email}</h3>
              <p style={{ color: '#666' }}>contato@terrasnoparaguay.com</p>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ color: '#333', marginBottom: '10px' }}>🏢 {t.offices}</h3>
              <p style={{ color: '#666', marginBottom: '5px' }}><strong>{t.brazil}:</strong> São Paulo, SP</p>
              <p style={{ color: '#666' }}><strong>{t.paraguay}:</strong> Assunção, Paraguay</p>
            </div>
          </div>

          <div style={{ background: 'white', borderRadius: '15px', padding: '30px', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' }}>
            <h2 style={{ color: '#667eea', marginBottom: '25px' }}>{t.quickService}</h2>
            <p style={{ marginBottom: '20px', color: '#666' }}>
              {t.quickServiceDesc}
            </p>
            <button
              onClick={() => onSendWhatsApp(t.quickWhatsappMsg)}
              style={{
                width: '100%',
                background: '#25D366',
                color: 'white',
                border: 'none',
                padding: '15px',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginBottom: '20px'
              }}
            >
              📱 {t.talkWhatsApp}
            </button>
            
            <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px' }}>
              <h3 style={{ color: '#333', marginBottom: '15px' }}>⏰ {t.schedule}</h3>
              <p style={{ color: '#666', marginBottom: '5px' }}>{t.weekdays}</p>
              <p style={{ color: '#666', marginBottom: '5px' }}>{t.saturday}</p>
              <p style={{ color: '#666' }}>{t.sunday}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContatoPage;