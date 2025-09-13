"use client";

import { AuthProvider } from '../../contexts/AuthContext';
import { EditProvider } from '../../contexts/EditContext';
import { AdminBar } from '../../../components/AdminBar';
import { HeroWithCMS } from '../../../components/HeroWithCMS';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { Features } from '../../../components/Features';
import { EditableSection } from '../../../components/EditableSection';
import { EditableText } from '../../../components/EditableText';
import { useState, useEffect } from 'react';

export default function CMSDemoPage() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate auto-login for demo purposes
  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem('admin_token', 'demo_token');
      localStorage.setItem('admin_user', JSON.stringify({
        id: '1',
        name: 'Demo Admin',
        email: 'demo@contabilizetech.com.br'
      }));
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-brand-light to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-teal mx-auto mb-4"></div>
          <p className="text-brand-dark">Carregando demonstração...</p>
        </div>
      </div>
    );
  }

  return (
    <AuthProvider>
      <EditProvider>
        <div className="min-h-screen bg-white">
          <AdminBar />
          <Header />
          
          <main>
            <HeroWithCMS />
            
            <EditableSection 
              id="demo-section" 
              title="Seção de Demonstração"
              className="py-20 bg-gray-50"
            >
              <div className="container mx-auto max-w-4xl px-6">
                <div className="text-center space-y-6">
                  <EditableText 
                    id="demo-title"
                    className="text-3xl font-bold text-brand-dark"
                  >
                    <h2 className="text-3xl font-bold text-brand-dark">
                      Sistema de Edição Inline em Ação
                    </h2>
                  </EditableText>
                  
                  <EditableText 
                    id="demo-description"
                    type="textarea"
                    className="text-lg text-gray-600 max-w-2xl mx-auto"
                  >
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      Esta é uma demonstração do sistema CMS inline da ContabilizeTech. 
                      Clique no botão "Editar" na barra superior para começar a editar 
                      qualquer texto ou imagem desta página.
                    </p>
                  </EditableText>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <EditableText 
                        id="feature-1-title"
                        className="text-xl font-semibold text-brand-dark mb-3"
                      >
                        <h3 className="text-xl font-semibold text-brand-dark mb-3">
                          Edição de Texto
                        </h3>
                      </EditableText>
                      <EditableText 
                        id="feature-1-desc"
                        type="textarea"
                        className="text-gray-600"
                      >
                        <p className="text-gray-600">
                          Clique no ícone de lápis para editar títulos, parágrafos e outros textos diretamente na página.
                        </p>
                      </EditableText>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <EditableText 
                        id="feature-2-title"
                        className="text-xl font-semibold text-brand-dark mb-3"
                      >
                        <h3 className="text-xl font-semibold text-brand-dark mb-3">
                          Edição de Imagem
                        </h3>
                      </EditableText>
                      <EditableText 
                        id="feature-2-desc"
                        type="textarea"
                        className="text-gray-600"
                      >
                        <p className="text-gray-600">
                          Passe o mouse sobre imagens para ver o botão de edição e fazer upload de novas imagens.
                        </p>
                      </EditableText>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <EditableText 
                        id="feature-3-title"
                        className="text-xl font-semibold text-brand-dark mb-3"
                      >
                        <h3 className="text-xl font-semibold text-brand-dark mb-3">
                          Controle de Seções
                        </h3>
                      </EditableText>
                      <EditableText 
                        id="feature-3-desc"
                        type="textarea"
                        className="text-gray-600"
                      >
                        <p className="text-gray-600">
                          Use o menu de configurações das seções para reordenar, ocultar ou editar seções inteiras.
                        </p>
                      </EditableText>
                    </div>
                  </div>
                </div>
              </div>
            </EditableSection>

            <Features />
          </main>
          
          <Footer />
        </div>
      </EditProvider>
    </AuthProvider>
  );
}