"use client";

import { Users, Scale, ShieldCheck } from "lucide-react";
import { EditableText } from "./EditableText";
import { useContent } from "@/contexts/ContentContext";

// Estrutura de dados para os itens, com ícones
const featureItems = [
  {
    icon: Users,
    titleKey: "features.item1.title",
    descKey: "features.item1.description",
    fallbackTitle: "Parceria Estratégica",
    fallbackDesc: "Atuamos de forma integrada, oferecendo suporte completo desde a ideação até a expansão, garantindo segurança e conformidade."
  },
  {
    icon: Scale,
    titleKey: "features.item2.title",
    descKey: "features.item2.description",
    fallbackTitle: "Suporte Jurídico e Contábil",
    fallbackDesc: "Acompanhamos reuniões, damos suporte em acordos e participamos de decisões cruciais para o futuro do seu negócio."
  },
  {
    icon: ShieldCheck,
    titleKey: "features.item3.title",
    descKey: "features.item3.description",
    fallbackTitle: "Governança e Boas Práticas",
    fallbackDesc: "Asseguramos orientação contínua em práticas regulatórias, alinhando estratégias aos parâmetros legais e equilibrando interesses."
  }
];

export function Features() {
  const { content } = useContent();

  return (
    <section 
      id="quem-somos"
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      {/* IMAGEM DE FUNDO ADICIONADA AQUI */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
        style={{ backgroundImage: 'url(/img/background-pattern.png)' }}
      ></div>

      <div className="relative container mx-auto max-w-6xl px-6 z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-h2 text-white mb-4">
            <EditableText
              contentKey="features.title"
              fallback="Quem Somos"
              as="span"
            />
          </h2>
          <p className="text-body text-gray-300">
            <EditableText
              contentKey="features.intro"
              fallback="A Contabilizetech é uma empresa especializada em assessoria contábil, jurídica e estratégica, nascida para o ecossistema de startups e franquias."
              type="textarea"
            />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureItems.map(item => {
            const Icon = item.icon;
            if (!Icon) return null; 
            return (
              <div key={item.titleKey} className="text-center p-6">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <Icon className="h-8 w-8 text-brand-teal" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  <EditableText
                    contentKey={item.titleKey}
                    fallback={item.fallbackTitle}
                  />
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  <EditableText
                    contentKey={item.descKey}
                    fallback={item.fallbackDesc}
                    type="textarea"
                  />
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}