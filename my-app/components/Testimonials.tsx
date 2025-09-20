"use client";

import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";
import { EditableImage } from "./EditableImage";
import { EditableText } from "./EditableText";
import { useContent } from "@/contexts/ContentContext";

export function Testimonials() {
  const { content } = useContent();

  const testimonialsData = [
    {
      nameKey: "testimonials.item1.name",
      roleKey: "testimonials.item1.role",
      imageKey: "testimonials.item1.image",
      contentKey: "testimonials.item1.content",
      fallback: {
        name: "Maria Silva",
        role: "CEO, TechStart",
        image: "/images/testimonial-1.png",
        content: "A ContabilizeTech transformou nossa gestão financeira. A automação nos permitiu focar no crescimento do negócio, enquanto eles cuidam de toda parte contábil com excelência."
      }
    },
    {
      nameKey: "testimonials.item2.name",
      roleKey: "testimonials.item2.role",
      imageKey: "testimonials.item2.image",
      contentKey: "testimonials.item2.content",
      fallback: {
        name: "João Santos",
        role: "Diretor Financeiro, Commerce Plus",
        image: "/images/testimonial-2.png",
        content: "Relatórios em tempo real e automação completa. Nossa empresa cresceu 40% no último ano e a ContabilizeTech foi fundamental nessa jornada."
      }
    },
    {
      nameKey: "testimonials.item3.name",
      roleKey: "testimonials.item3.role",
      imageKey: "testimonials.item3.image",
      contentKey: "testimonials.item3.content",
      fallback: {
        name: "Ana Costa",
        role: "Sócia, Consultoria Estratégica",
        image: "/images/testimonial-3.png",
        content: "Migrar para a ContabilizeTech foi a melhor decisão. Suporte 24/7, tecnologia avançada e equipe sempre disponível. Recomendo para todas as empresas."
      }
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Imagem de fundo sutil */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
        style={{ backgroundImage: 'url(/img/background-pattern.png)' }}
      ></div>

      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-h2 text-white mb-4">
            <EditableText contentKey="testimonials.title" fallback="O que nossos clientes dizem" as="span" />
          </h2>
          <p className="text-body text-gray-300 max-w-2xl mx-auto">
            <EditableText contentKey="testimonials.description" fallback="Empresas de todos os tamanhos confiam na ContabilizeTech para automatizar sua gestão contábil e impulsionar seus resultados." type="textarea" />
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover-lift bg-white group">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed flex-grow">
                  <EditableText contentKey={testimonial.contentKey} fallback={testimonial.fallback.content} type="textarea" />
                </p>
                
                <div className="flex items-center mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                    <EditableImage
                      contentKey={testimonial.imageKey}
                      fallback={testimonial.fallback.image}
                      alt={content[testimonial.nameKey] || testimonial.fallback.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-brand-dark">
                      <EditableText contentKey={testimonial.nameKey} fallback={testimonial.fallback.name} as="span" />
                    </div>
                    <div className="text-sm text-gray-600">
                      <EditableText contentKey={testimonial.roleKey} fallback={testimonial.fallback.role} as="span" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-brand-teal mb-2">
                <EditableText contentKey="testimonials.stat1.value" fallback="98%" as="span" />
              </div>
              <div className="text-gray-300">
                <EditableText contentKey="testimonials.stat1.label" fallback="Taxa de satisfação" as="span" />
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-teal mb-2">
                <EditableText contentKey="testimonials.stat2.value" fallback="500+" as="span" />
              </div>
              <div className="text-gray-300">
                <EditableText contentKey="testimonials.stat2.label" fallback="Empresas atendidas" as="span" />
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-teal mb-2">
                <EditableText contentKey="testimonials.stat3.value" fallback="24/7" as="span" />
              </div>
              <div className="text-gray-300">
                <EditableText contentKey="testimonials.stat3.label" fallback="Suporte disponível" as="span" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}