const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
const hpp = require('hpp');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// ============ MIDDLEWARES DE SEGURANÇA ============

// 1. Helmet - Protege headers HTTP
app.use(helmet({
  contentSecurityPolicy: false // Simplificar por enquanto
}));

// 2. CORS - Controlar origens
app.use(cors({
  origin: true, // Permitir todas as origens por enquanto
  credentials: true
}));

// 3. Parsing ANTES dos outros middlewares
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// 4. Rate Limiting
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    error: 'Muitas tentativas. Tente novamente em 15 minutos.'
  }
});

app.use(generalLimiter);

// 5. HPP - Prevenir parameter pollution
app.use(hpp());

// ============ FUNÇÕES DE SEGURANÇA ============

const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    .replace(/[<>]/g, '')
    .trim();
};

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidPhone = (phone) => {
  const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,15}$/;
  return phoneRegex.test(phone);
};

// ============ ROTAS ============

// Rota de teste
app.get('/api/health', (req, res) => {
  console.log('✅ Health endpoint acessado');
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    security: 'Active'
  });
});

// Rate limiter específico para contato
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: {
    error: 'Limite de envios atingido. Tente novamente em 1 hora.'
  }
});

// Rota de contato
app.post('/api/contact', 
  contactLimiter,
  [
    body('name')
      .isLength({ min: 2, max: 50 })
      .withMessage('Nome deve ter entre 2 e 50 caracteres'),
    
    body('email')
      .isEmail()
      .normalizeEmail()
      .withMessage('Email inválido'),
    
    body('message')
      .isLength({ min: 10, max: 1000 })
      .withMessage('Mensagem deve ter entre 10 e 1000 caracteres')
  ],
  async (req, res) => {
    try {
      console.log('📧 Requisição de contato recebida');
      
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          error: 'Dados inválidos',
          details: errors.array()
        });
      }

      const sanitizedData = {
        name: sanitizeInput(req.body.name),
        email: sanitizeInput(req.body.email.toLowerCase()),
        phone: sanitizeInput(req.body.phone || ''),
        interest: sanitizeInput(req.body.interest || ''),
        message: sanitizeInput(req.body.message),
        ip: req.ip,
        timestamp: new Date().toISOString()
      };

      console.log('✅ Dados sanitizados:', sanitizedData.name, sanitizedData.email);

      const whatsappUrl = generateWhatsAppUrl(sanitizedData);

      res.json({
        success: true,
        message: 'Mensagem processada com sucesso!',
        whatsappUrl
      });

    } catch (error) {
      console.error('❌ Erro no contato:', error);
      res.status(500).json({
        success: false,
        error: 'Erro interno do servidor'
      });
    }
  }
);

const generateWhatsAppUrl = (data) => {
  const whatsappNumber = '+5599947184000';
  const message = `Olá! Meu nome é ${data.name}.
Email: ${data.email}
Telefone: ${data.phone}
Interesse: ${data.interest}

Mensagem: ${data.message}`;

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};

app.use((err, req, res, next) => {
  console.error('❌ Erro middleware:', err);
  res.status(500).json({
    success: false,
    error: 'Erro interno do servidor'
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🛡️ Servidor seguro rodando na porta ${PORT}`);
  console.log(`🔒 Middlewares de segurança ativos`);
  console.log(`📊 Rate limiting configurado`);
});

module.exports = app;
