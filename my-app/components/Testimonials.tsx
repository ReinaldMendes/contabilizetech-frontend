import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    name: "Maria Silva",
    role: "CEO, TechStart",
    image: "https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHByb2Zlc3Npb25hbCUyMGJ1c2luZXNzd29tYW58ZW58MXx8fHwxNzU3MDE0NTU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5,
    content: "A ContabilizeTech transformou nossa gestão financeira. A automação nos permitiu focar no crescimento do negócio, enquanto eles cuidam de toda parte contábil com excelência."
  },
  {
    name: "João Santos",
    role: "Diretor Financeiro, Commerce Plus",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHByb2Zlc3Npb25hbCUyMGJ1c2luZXNzd29tYW58ZW58MXx8fHwxNzU3MDE0NjI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5,
    content: "Relatórios em tempo real e automação completa. Nossa empresa cresceu 40% no último ano e a ContabilizeTech foi fundamental nessa jornada."
  },
  {
    name: "Ana Costa",
    role: "Sócia, Consultoria Estratégica",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHByb2Zlc3Npb25hbCUyMGJ1c2luZXNzd29tYW58ZW58MXx8fHwxNzU3MDE0NjMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5,
    content: "Migrar para a ContabilizeTech foi a melhor decisão. Suporte 24/7, tecnologia avançada e equipe sempre disponível. Recomendo para todas as empresas."
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-h2 text-brand-dark mb-4">
            O que nossos{" "}
            <span className="text-brand-gradient">clientes</span>{" "}
            dizem
          </h2>
          <p className="text-body text-gray-600 max-w-2xl mx-auto">
            Empresas de todos os tamanhos confiam na ContabilizeTech para 
            automatizar sua gestão contábil e impulsionar seus resultados.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover-lift bg-white group"
            >
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-5 w-5 text-yellow-400 fill-current" 
                    />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-brand-dark">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
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
              <div className="text-3xl font-bold text-brand-teal mb-2">98%</div>
              <div className="text-gray-600">Taxa de satisfação</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-teal mb-2">500+</div>
              <div className="text-gray-600">Empresas atendidas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-teal mb-2">24/7</div>
              <div className="text-gray-600">Suporte disponível</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}