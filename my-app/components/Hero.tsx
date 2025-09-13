import { Button } from "./ui/button";
import { Play, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-light to-white py-20 lg:py-32">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <h1 className="text-hero text-brand-dark mb-6">
              Soluções contábeis{" "}
              <span className="text-brand-gradient">automatizadas</span>{" "}
              para sua empresa crescer
            </h1>
            
            <p className="text-body text-gray-600 mb-8 max-w-lg">
              Automatize sua contabilidade com tecnologia de ponta. 
              Mais tempo para focar no que realmente importa: o crescimento do seu negócio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-brand-gradient hover:opacity-90 group"
              >
                Agende uma demo
                <Play className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white group"
              >
                Ver planos
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-gray-200">
              <div>
                <div className="text-2xl font-semibold text-brand-teal">500+</div>
                <div className="text-sm text-gray-600">Empresas atendidas</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-brand-teal">98%</div>
                <div className="text-sm text-gray-600">Satisfação</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-brand-teal">24h</div>
                <div className="text-sm text-gray-600">Suporte</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1692133226337-55e513450a32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFjY291bnRpbmclMjB0ZWNobm9sb2d5JTIwb2ZmaWNlfGVufDF8fHx8MTc1NzAxNDU1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Equipe ContabilizeTech trabalhando com tecnologia"
                className="rounded-2xl shadow-2xl w-full h-auto"
                width={600}
                height={400}
              />
            </div>
            
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-brand-gradient opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-brand-accent opacity-10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}