import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './src/config/db.js';
import authRoutes from './src/routes/auth.js';
import contentRoutes from './src/routes/contentRoutes.js'; // Corrigido para o nome de arquivo correto
import userRoutes from './src/routes/userRoutes.js';
import partnerRoutes from './src/routes/partnerRoutes.js';

const app = express();

connectDB();

// --- CONFIGURAÇÃO DO CORS CORRIGIDA ---

// 1. Defina uma "lista de permissões" com os endereços autorizados
const allowedOrigins = [
  'http://localhost:3000', // Para seu desenvolvimento local
  'https://contabilizetech-frontend-9cym85m6d-reinalds-projects-1771a2f1.vercel.app', // A URL da Vercel que deu erro
  'https://contabilizetech.com.br', // Seu domínio final
  'https://www.contabilizetech.com.br' // Seu domínio final com www
];

const corsOptions = {
  origin: function (origin, callback) {
    // Permite requisições sem 'origin' (como o Postman) ou que estejam na lista
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Acesso não permitido pela política de CORS'));
    }
  }
};

// 2. Use as novas opções de CORS
app.use(cors(corsOptions));

// --- FIM DA CONFIGURAÇÃO DO CORS ---


// Middlewares
app.use(express.json());

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/content', contentRoutes);
app.use('/api/users', userRoutes);
app.use('/api/partners', partnerRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));