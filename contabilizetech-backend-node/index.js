import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './src/config/db.js';
import authRoutes from './src/routes/auth.js';
import contentRoutes from './src/routes/content.js';
import userRoutes from './src/routes/userRoutes.js';
import partnerRoutes from './src/routes/partnerRoutes.js';

const app = express();

// 🔹 Conexão com o banco
connectDB();

// 🔹 Configuração de CORS
const allowedOrigins = [
  'http://localhost:3000', // Dev local
  'https://contabilizetech-frontend.vercel.app', // Front no Vercel
  'https://contabilizetech.com.br', // Domínio final
  'https://www.contabilizetech.com.br'
];

const corsOptions = {
  origin: function (origin, callback) {
    // Permite requisições sem 'origin' (Postman, curl) ou que estejam na lista
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log('❌ Bloqueado pelo CORS:', origin);
      callback(new Error('Acesso não permitido pela política de CORS'));
    }
  },
  credentials: true // 🔑 necessário para cookies/session no login
};

app.use(cors(corsOptions));

// 🔹 Middlewares
app.use(express.json());

// 🔹 Rotas
app.use('/api/auth', authRoutes);
app.use('/api/content', contentRoutes);
app.use('/api/users', userRoutes);
app.use('/api/partners', partnerRoutes);

// 🔹 Rota de teste
app.get('/api/ping', (req, res) => {
  res.json({ message: '✅ API rodando no Render!' });
});

// 🔹 Inicialização do servidor
const PORT = process.env.PORT || 5001;
app.listen(PORT, () =>
  console.log(`🚀 Servidor rodando na porta ${PORT}`)
);
