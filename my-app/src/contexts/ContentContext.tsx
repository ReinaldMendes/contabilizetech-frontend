"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { pageAPI } from '@/utils/api';

// Tipagem para uma seção individual
interface Section {
  _id: string;
  componentName: string;
  order: number;
  content: { [key: string]: string };
}

// Tipagem para o valor do nosso contexto
interface ContentContextType {
  sections: Section[];
  content: { [key: string]: string };
  isLoading: boolean;
  refreshContent: () => Promise<void>;
  setSections: React.Dispatch<React.SetStateAction<Section[]>>;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export function ContentProvider({ children }: { children: ReactNode }) {
  const [sections, setSections] = useState<Section[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPageStructure = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await pageAPI.getBySlug('home');
      if (response.data && response.data.sections) {
        const sortedSections = response.data.sections.sort((a, b) => a.order - b.order);
        setSections(sortedSections);
      }
    } catch (error) {
      console.error("Erro ao carregar a estrutura da página:", error);
      setSections([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPageStructure();
  }, [fetchPageStructure]);

  const content = sections.reduce((acc, section) => {
    return { ...acc, ...section.content };
  }, {});

  return (
    <ContentContext.Provider value={{
      sections,
      content,
      isLoading,
      refreshContent: fetchPageStructure,
      setSections,
    }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
}