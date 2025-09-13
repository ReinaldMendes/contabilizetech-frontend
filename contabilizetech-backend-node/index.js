// index.js

import 'dotenv/config';
import express from 'express';
import cors from 'cors'; // MUDOU: de require para import
import connectDB from './src/config/db.js'; // MUDOU: de require para import e adicionado .js
import authRoutes from './src/routes/auth.js'; // MUDOU: Importando a rota para uma variável
import contentRoutes from './src/routes/content.js';
import userRoutes from './src/routes/userRoutes.js';

const app = express();

connectDB();

// Middlewares
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Rotas
app.use('/api/auth', authRoutes); // CORRIGIDO: Usando a variável importada

// A rota de conteúdo, quando você for usar, seguirá o mesmo padrão:

 app.use('/api/content', contentRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));