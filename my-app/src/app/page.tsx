"use client";

import { useContent } from "@/contexts/ContentContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Features } from "@/components/Features";
import { Partners } from "@/components/Partners";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { EditableSection } from "@/components/EditableSection";

// Mapa que conecta o nome do componente (string) ao componente React real
const componentMap = {
  Hero,
  Services,
  Features,
  Partners,
  Testimonials,
  FAQ,
};

export default function Home() {
  const { sections, isLoading } = useContent();

  if (isLoading) {
    return <div className="h-screen w-full flex items-center justify-center">Carregando Página...</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {sections.map(sectionData => {
          // Pega o componente correto do nosso mapa
          const Component = componentMap[sectionData.componentName];
          if (!Component) {
            console.warn(`Componente "${sectionData.componentName}" não encontrado no mapa.`);
            return null;
          }

          return (
            // Envolvemos cada seção com o EditableSection
            <EditableSection
              key={sectionData._id}
              id={sectionData.content['section.id'] || sectionData.componentName.toLowerCase()}
              title={sectionData.componentName}
            >
              {/* Passamos o conteúdo específico da seção como prop */}
              <Component content={sectionData.content} />
            </EditableSection>
          );
        })}
      </main>
      <Footer />
    </div>
  );
}