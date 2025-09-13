import express from 'express';
import {
  createContent,
  getAllContent,
  getContentByKey,
  updateContent,
  deleteContent
} from '../controllers/contentController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { adminMiddleware } from '../middleware/adminMiddleware.js';

const router = express.Router();

// --- Rotas Públicas ---
// Qualquer visitante pode carregar o conteúdo do site
router.get('/', getAllContent);
router.get('/:key', getContentByKey);


// --- Rotas de Admin ---
// Aplica middlewares de segurança para as rotas de modificação abaixo
router.post('/', authMiddleware, adminMiddleware, createContent);
router.put('/:key', authMiddleware, adminMiddleware, updateContent);
router.delete('/:key', authMiddleware, adminMiddleware, deleteContent);

export default router;