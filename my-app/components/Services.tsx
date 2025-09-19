"use client";

import { BrainCircuit, FileText, Briefcase, BarChart, Users } from "lucide-react";
import { EditableText } from "./EditableText";

const serviceItems = [
  { icon: BrainCircuit, key: "services.item1", fallbackTitle: "Contabilidade Inteligente", fallbackDesc: "Automação e IA para otimizar suas finanças e impostos." },
  { icon: FileText, key: "services.item2", fallbackTitle: "Gestão Fiscal Completa", fallbackDesc: "Mantenha-se em dia com todas as obrigações fiscais sem dor de cabeça." },
  { icon: Briefcase, key: "services.item3", fallbackTitle: "Consultoria Estratégica", fallbackDesc: "Decisões baseadas em dados para impulsionar o crescimento do seu negócio." },
  // Adicione mais serviços se necessário
];

export function Services({ content }: { content: { [key: string]: string } }) {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-h2 text-brand-dark mb-4">
            <EditableText contentKey="services.title" fallback="Soluções Completas para sua Empresa" />
          </h2>
          <p className="text-body text-gray-600 max-w-2xl mx-auto">
            <EditableText contentKey="services.description" fallback="Oferecemos um ecossistema completo de serviços para garantir a saúde financeira e o crescimento sustentável do seu negócio." type="textarea" />
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map(item => {
            const Icon = item.icon;
            return (
              <div key={item.key} className="p-8 bg-gray-50 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <Icon className="h-10 w-10 text-brand-teal mb-4" />
                <h3 className="text-xl font-semibold text-brand-dark mb-2">
                  <EditableText contentKey={`${item.key}.title`} fallback={item.fallbackTitle} />
                </h3>
                <p className="text-gray-600">
                  <EditableText contentKey={`${item.key}.description`} fallback={item.fallbackDesc} type="textarea"/>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}