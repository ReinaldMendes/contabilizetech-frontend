// seeders/seedPage.js
import mongoose from 'mongoose';
import 'dotenv/config';
import Page from '../src/models/Page.js';

// Defina aqui a estrutura inicial e o conteúdo padrão da sua página
const initialPageStructure = {
  slug: 'home',
  sections: [
    { 
      componentName: 'Hero', 
      order: 1, 
      content: {
        'hero.badge': '#1 em Automação Contábil',
        'hero.title': 'Contabilidade Automatizada para o Futuro do seu Negócio',
        'hero.subtitle': 'Automatize sua contabilidade com tecnologia de ponta...',
        'hero.image': '/images/hero-image.png',
      }
    },
    { 
      componentName: 'Services', 
      order: 2, 
      content: {
        'services.title': 'Nossos Serviços',
        'services.description': 'Soluções integradas para startups e franquias...',
      }
    },
    // Adicione aqui as outras seções (Features, Partners, FAQ, etc.)
  ]
};

const runSeed = async () => {
  console.log('Conectando ao banco de dados...');
  await mongoose.connect(process.env.MONGO_URI);
  console.log('Conectado com sucesso!');

  try {
    console.log('Limpando dados antigos da página "home"...');
    await Page.deleteOne({ slug: 'home' });

    console.log('Inserindo nova estrutura da página "home"...');
    await Page.create(initialPageStructure);

    console.log('✅ Seeding concluído com sucesso!');
  } catch (error) {
    console.error('❌ Erro durante o seeding:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Desconectado do banco de dados.');
  }
};

runSeed();