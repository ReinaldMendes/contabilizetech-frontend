import express from 'express';
import { getPageBySlug, updatePageSections } from '../controllers/pageController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { adminMiddleware } from '../middleware/adminMiddleware.js';

const router = express.Router();

// Rota pública para o frontend buscar a estrutura da página
router.get('/:slug', getPageBySlug);

// Rota protegida para o admin salvar a nova ordem/estrutura das seções
router.put('/:slug/sections', authMiddleware, adminMiddleware, updatePageSections);

export default router;