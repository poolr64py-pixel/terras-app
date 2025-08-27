import ZenLanguageSelector from '../components/ZenLanguageSelector';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const BlogSystem = ({ onSendWhatsApp }) => {
  const [currentLang, setCurrentLang] = useState('pt');

  // Sistema de posts automáticos com SEO
  const blogPosts = {
    pt: [
      {
        id: 1,
        slug: 'investir-imoveis-paraguai-2025',
        title: 'Como Investir em Imóveis no Paraguai em 2025: Guia Completo',
        metaDescription: 'Guia completo para investir em imóveis no Paraguai em 2025. Vantagens fiscais, melhores regiões, documentação e passo a passo completo.',
        keywords: 'investir imoveis paraguai 2025, mercado imobiliario paraguai, vantagens fiscais paraguai',
        category: 'Investimentos',
        readTime: '8 min',
        date: '26 Ago 2025',
        excerpt: 'Descubra todas as vantagens de investir no mercado imobiliário paraguaio e como começar seu investimento com segurança.',
        
         content: '<h2>Por que Investir no Paraguai?</h2><p>O Paraguay oferece vantagens únicas para investidores brasileiros...</p><h3>Principais Vantagens</h3><ul><li>Zero imposto sobre ganho de capital</li><li>Facilidade para residência fiscal</li><li>Proximidade com o Brasil</li><li>Moeda estável</li></ul><h3>Melhores Regiões</h3><p>Assunção Centro se destaca como a região mais valorizada...</p>',
        author: 'Equipe Terras Paraguay',
        tags: ['Paraguay', 'Investimentos', 'Imóveis', 'Brasil']
      },
      {
        id: 2,
        slug: 'residencia-fiscal-paraguai-brasileiro',
        title: 'Residência Fiscal no Paraguai para Brasileiros: Passo a Passo 2025',
        metaDescription: 'Como obter residência fiscal no Paraguai sendo brasileiro. Documentos necessários, custos, vantagens fiscais e processo completo.',
        keywords: 'residencia fiscal paraguai brasileiro, como obter residencia paraguai, vantagens fiscais paraguai brasileiro',
        category: 'Fiscal',
        readTime: '6 min',
        date: '25 Ago 2025',
        excerpt: 'Aprenda o processo completo para obter sua residência fiscal no Paraguai e as vantagens tributárias.',
        content: `
          <h2>Vantagens da Residência Fiscal</h2>
          <p>A residência fiscal paraguaia oferece benefícios significativos...</p>
          
          <h3>Documentos Necessários</h3>
          <ul>
            <li>Passaporte brasileiro</li>
            <li>Certidão de antecedentes criminais</li>
            <li>Comprovante de renda</li>
          </ul>
        `,
        author: 'Equipe Terras Paraguay',
        tags: ['Residência Fiscal', 'Paraguay', 'Impostos', 'Brasil']
      }
    ],
    es: [
      {
        id: 1,
        slug: 'invertir-inmuebles-paraguay-2025',
        title: 'Cómo Invertir en Inmuebles en Paraguay en 2025: Guía Completa',
        metaDescription: 'Guía completa para invertir en inmuebles en Paraguay en 2025. Ventajas fiscales, mejores regiones, documentación y proceso paso a paso.',
        keywords: 'invertir inmuebles paraguay 2025, mercado inmobiliario paraguay, ventajas fiscales paraguay',
        category: 'Inversiones',
        readTime: '8 min',
        date: '26 Ago 2025',
        excerpt: 'Descubre todas las ventajas de invertir en el mercado inmobiliario paraguayo y cómo comenzar tu inversión con seguridad.',
        content: `
          <h2>¿Por qué Invertir en Paraguay?</h2>
          <p>Paraguay ofrece ventajas únicas para inversores brasileños...</p>
        `,
        author: 'Equipo Tierras Paraguay',
        tags: ['Paraguay', 'Inversiones', 'Inmuebles', 'Brasil']
      }
    ],
    en: [
      {
        id: 1,
        slug: 'invest-real-estate-paraguay-2025',
        title: 'How to Invest in Real Estate in Paraguay in 2025: Complete Guide',
        metaDescription: 'Complete guide to invest in real estate in Paraguay in 2025. Tax advantages, best regions, documentation and step-by-step process.',
        keywords: 'invest real estate paraguay 2025, paraguay real estate market, paraguay tax advantages',
        category: 'Investments',
        readTime: '8 min',
        date: 'Aug 26, 2025',
        excerpt: 'Discover all the advantages of investing in the Paraguayan real estate market and how to start your investment safely.',
        content: `
          <h2>Why Invest in Paraguay?</h2>
          <p>Paraguay offers unique advantages for Brazilian investors...</p>
        `,
        author: 'Tierras Paraguay Team',
        tags: ['Paraguay', 'Investments', 'Real Estate', 'Brazil']
      }
    ],
    de: [
      {
        id: 1,
        slug: 'immobilien-investieren-paraguay-2025',
        title: 'Wie man 2025 in Immobilien in Paraguay investiert: Vollständiger Leitfaden',
        metaDescription: 'Vollständiger Leitfaden für Immobilieninvestitionen in Paraguay 2025. Steuervorteile, beste Regionen, Dokumentation und Schritt-für-Schritt-Prozess.',
        keywords: 'immobilien investieren paraguay 2025, paraguay immobilienmarkt, paraguay steuervorteile',
        category: 'Investitionen',
        readTime: '8 Min',
        date: '26. Aug 2025',
        excerpt: 'Entdecken Sie alle Vorteile von Investitionen in den paraguayanischen Immobilienmarkt und wie Sie sicher investieren können.',
        content: `
          <h2>Warum in Paraguay investieren?</h2>
          <p>Paraguay bietet einzigartige Vorteile für brasilianische Investoren...</p>
        `,
        author: 'Tierras Paraguay Team',
        tags: ['Paraguay', 'Investitionen', 'Immobilien', 'Brasilien']
      }
    ]
  };

  const [selectedPost, setSelectedPost] = useState(null);
  const currentPosts = blogPosts[currentLang] || blogPosts.pt;

  const translations = {
    pt: {
      title: 'Blog Terras Paraguay',
      subtitle: 'Dicas, guias e novidades sobre investimentos imobiliários no Paraguay',
      readMore: 'Ler mais',
      backToBlog: 'Voltar ao Blog',
      shareArticle: 'Compartilhar Artigo',
      relatedPosts: 'Posts Relacionados',
      categories: 'Categorias',
      tags: 'Tags'
    },
    es: {
      title: 'Blog Tierras Paraguay',
      subtitle: 'Consejos, guías y novedades sobre inversiones inmobiliarias en Paraguay',
      readMore: 'Leer más',
      backToBlog: 'Volver al Blog',
      shareArticle: 'Compartir Artículo',
      relatedPosts: 'Posts Relacionados',
      categories: 'Categorías',
      tags: 'Etiquetas'
    },
    en: {
      title: 'Tierras Paraguay Blog',
      subtitle: 'Tips, guides and news about real estate investments in Paraguay',
      readMore: 'Read more',
      backToBlog: 'Back to Blog',
      shareArticle: 'Share Article',
      relatedPosts: 'Related Posts',
      categories: 'Categories',
      tags: 'Tags'
    },
    de: {
      title: 'Tierras Paraguay Blog',
      subtitle: 'Tipps, Leitfäden und Neuigkeiten über Immobilieninvestitionen in Paraguay',
      readMore: 'Mehr lesen',
      backToBlog: 'Zurück zum Blog',
      shareArticle: 'Artikel teilen',
      relatedPosts: 'Ähnliche Beiträge',
      categories: 'Kategorien',
      tags: 'Schlagwörter'
    }
  };

  const t = translations[currentLang];

  // Função para gerar Schema.org automaticamente
  const generatePostSchema = (post) => ({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.metaDescription,
    "author": {
      "@type": "Organization",
      "name": post.author
    },
    "datePublished": "2025-08-26",
    "dateModified": "2025-08-26",
    "publisher": {
      "@type": "Organization",
      "name": "Terras Paraguay"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://terrasnoparaguay.com/blog/${post.slug}`
    },
    "keywords": post.keywords,
    "articleSection": post.category
  });

  if (selectedPost) {
    const schema = generatePostSchema(selectedPost);
    
    return (
      <div style={{ background: '#f8f9fa', minHeight: 'calc(100vh - 80px)', padding: '40px 20px' }}>
        <Helmet>
          <title>{selectedPost.title} | Terras Paraguay Blog</title>
          <meta name="description" content={selectedPost.metaDescription} />
          <meta name="keywords" content={selectedPost.keywords} />
          <meta property="og:title" content={selectedPost.title} />
          <meta property="og:description" content={selectedPost.metaDescription} />
          <meta property="og:type" content="article" />
          <link rel="canonical" href={`https://terrasnoparaguay.com/blog/${selectedPost.slug}`} />
          <script type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        </Helmet>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <button
            onClick={() => setSelectedPost(null)}
            style={{
              background: '#667eea',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '6px',
              marginBottom: '30px',
              cursor: 'pointer'
            }}
          >
            ← {t.backToBlog}
          </button>

          <article style={{ background: 'white', borderRadius: '15px', padding: '40px', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' }}>
            <header style={{ marginBottom: '30px', paddingBottom: '20px', borderBottom: '1px solid #eee' }}>
              <div style={{ display: 'flex', gap: '15px', marginBottom: '15px', flexWrap: 'wrap' }}>
                <span style={{ background: '#667eea', color: 'white', padding: '4px 12px', borderRadius: '12px', fontSize: '12px' }}>
                  {selectedPost.category}
                </span>
                <span style={{ color: '#666', fontSize: '14px' }}>{selectedPost.readTime}</span>
                <span style={{ color: '#666', fontSize: '14px' }}>{selectedPost.date}</span>
              </div>
              
              <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#333', marginBottom: '15px', lineHeight: '1.3' }}>
                {selectedPost.title}
              </h1>
              
              <p style={{ color: '#666', fontSize: '18px', lineHeight: '1.6' }}>
                {selectedPost.excerpt}
              </p>
              
              <p style={{ color: '#999', fontSize: '14px', marginTop: '15px' }}>
                Por {selectedPost.author}
              </p>
            </header>

            <div 
              style={{ lineHeight: '1.8', color: '#444' }}
              dangerouslySetInnerHTML={{ __html: selectedPost.content }}
            />

            <footer style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #eee' }}>
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ marginBottom: '10px', color: '#333' }}>{t.tags}:</h4>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {selectedPost.tags.map((tag, index) => (
                    <span key={index} style={{
                      background: '#f0f0f0',
                      color: '#666',
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontSize: '12px'
                    }}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onSendWhatsApp(`Olá! Li o artigo "${selectedPost.title}" e gostaria de saber mais sobre investimentos no Paraguay.`)}
                style={{
                  width: '100%',
                  background: '#25D366',
                  color: 'white',
                  border: 'none',
                  padding: '15px',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Falar sobre este assunto no WhatsApp
              </button>
            </footer>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: '#f8f9fa', minHeight: 'calc(100vh - 80px)', padding: '40px 20px' }}>
      <Helmet>
        <title>{t.title} | Guias e Dicas sobre Imóveis Paraguay</title>
        <meta name="description" content={t.subtitle} />
        <meta name="keywords" content="blog imoveis paraguai, guias investimento paraguai, dicas imoveis paraguai" />
      </Helmet>

      {/* Language Selector */}
     <ZenLanguageSelector currentLang={currentLang} setCurrentLang={setCurrentLang} />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{ fontSize: '42px', fontWeight: 'bold', color: '#333', marginBottom: '16px' }}>
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
          {currentPosts.map(post => (
            <article key={post.id} style={{
              background: 'white',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{ padding: '30px' }}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '15px', alignItems: 'center' }}>
                  <span style={{
                    background: '#667eea',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '500'
                  }}>
                    {post.category}
                  </span>
                  <span style={{ color: '#999', fontSize: '12px' }}>{post.readTime}</span>
                  <span style={{ color: '#999', fontSize: '12px' }}>{post.date}</span>
                </div>

                <h2 style={{
                  fontSize: '22px',
                  fontWeight: 'bold',
                  color: '#333',
                  marginBottom: '15px',
                  lineHeight: '1.4'
                }}>
                  {post.title}
                </h2>

                <p style={{
                  color: '#666',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  {post.excerpt}
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#999', fontSize: '14px' }}>
                    {post.author}
                  </span>
                  <button
                    onClick={() => setSelectedPost(post)}
                    style={{
                      background: '#667eea',
                      color: 'white',
                      border: 'none',
                      padding: '10px 20px',
                      borderRadius: '6px',
                      fontSize: '14px',
                      fontWeight: '500',
                      cursor: 'pointer'
                    }}
                  >
                    {t.readMore} →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSystem;