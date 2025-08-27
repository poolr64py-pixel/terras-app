// Sistema de otimização automática de imagens
class ImageOptimizer {
  constructor() {
    this.supportedFormats = ['image/jpeg', 'image/png', 'image/webp'];
    this.maxWidth = 1200;
    this.maxHeight = 800;
    this.quality = 0.85;
  }

  // Converte imagem para WebP automaticamente
  async convertToWebP(file) {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      img.onload = () => {
        // Redimensiona mantendo proporção
        const { width, height } = this.calculateDimensions(img.width, img.height);
        
        canvas.width = width;
        canvas.height = height;
        
        // Desenha e otimiza
        ctx.drawImage(img, 0, 0, width, height);
        
        // Converte para WebP com qualidade otimizada
        canvas.toBlob(resolve, 'image/webp', this.quality);
      };
      
      img.src = URL.createObjectURL(file);
    });
  }

  // Calcula dimensões mantendo proporção
  calculateDimensions(originalWidth, originalHeight) {
    let { width, height } = { width: originalWidth, height: originalHeight };
    
    // Redimensiona se exceder limites
    if (width > this.maxWidth) {
      height = (height * this.maxWidth) / width;
      width = this.maxWidth;
    }
    
    if (height > this.maxHeight) {
      width = (width * this.maxHeight) / height;
      height = this.maxHeight;
    }
    
    return { width: Math.round(width), height: Math.round(height) };
  }

  // Gera alt text automático baseado no contexto
  generateAltText(filename, context = 'imovel') {
    const contextMap = {
      'imovel': 'Imóvel no Paraguay -',
      'casa': 'Casa no Paraguay -',
      'apartamento': 'Apartamento no Paraguay -',
      'terreno': 'Terreno no Paraguay -',
      'comercial': 'Propriedade comercial no Paraguay -'
    };
    
    const cleanName = filename
      .replace(/\.[^/.]+$/, '') // Remove extensão
      .replace(/[_-]/g, ' ')     // Substitui _ e - por espaço
      .replace(/\b\w/g, l => l.toUpperCase()); // Primeira letra maiúscula
    
    return `${contextMap[context] || contextMap['imovel']} ${cleanName}`;
  }

  // Processa múltiplas imagens
  async processImages(files, context = 'imovel') {
    const processedImages = [];
    
    for (const file of files) {
      if (this.supportedFormats.includes(file.type)) {
        const webpBlob = await this.convertToWebP(file);
        const altText = this.generateAltText(file.name, context);
        
        processedImages.push({
          original: file,
          webp: webpBlob,
          altText,
          size: webpBlob.size,
          reduction: ((file.size - webpBlob.size) / file.size * 100).toFixed(1)
        });
      }
    }
    
    return processedImages;
  }
}

export default ImageOptimizer;