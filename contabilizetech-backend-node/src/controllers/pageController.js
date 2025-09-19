// src/controllers/pageController.js
import Page from '../models/Page.js';

// Busca a estrutura de uma página pelo seu "slug" (ex: "home")
export const getPageBySlug = async (req, res) => {
  try {
    const page = await Page.findOne({ slug: req.params.slug });
    if (!page) {
      return res.status(404).json({ message: 'Página não encontrada.' });
    }
    res.status(200).json(page);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar página.', error: error.message });
  }
};

// Atualiza as seções de uma página (para reordenar, ocultar, etc.)
export const updatePageSections = async (req, res) => {
  try {
    const page = await Page.findOneAndUpdate(
      { slug: req.params.slug },
      { $set: { sections: req.body.sections } },
      { new: true }
    );
    if (!page) {
      return res.status(404).json({ message: 'Página não encontrada.' });
    }
    res.status(200).json({ message: 'Seções da página atualizadas com sucesso!', page });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar seções.', error: error.message });
  }
};