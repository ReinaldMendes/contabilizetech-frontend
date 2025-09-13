"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Play, ArrowRight, Star, Users, Award } from "lucide-react";
import { ScheduleModal } from "./ScheduleModal";
import { EditableText } from "./EditableText";
import { EditableImage } from "./EditableImage";
import { EditableSection } from "./EditableSection";

export function HeroWithCMS() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [heroImage, setHeroImage] = useState("https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80");

  return (
    <EditableSection 
      id="hero-section" 
      title="Seção Hero"
      className="relative min-h-screen bg-gradient-to-br from-brand-light via-white to-brand-light/50 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(46,175,154,0.1),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(21,52,71,0.05),transparent_50%)] pointer-events-none"></div>
      
      <div className="relative pt-20 pb-16 sm:pt-32 sm:pb-24">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="flex">
                <Badge className="bg-brand-teal/10 text-brand-teal border border-brand-teal/20 px-4 py-2 hover:bg-brand-teal/20 transition-colors">
                  <Star className="h-4 w-4 mr-2 fill-current" />
                  <EditableText 
                    id="hero-badge"
                    className="inline"
                  >
                    #1 em Automação Contábil
                  </EditableText>
                </Badge>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <EditableText 
                  id="hero-title"
                  type="textarea"
                  className="text-hero text-brand-dark leading-tight"
                >
                  <h1 className="text-hero text-brand-dark leading-tight">
                    Contabilidade <span className="text-brand-gradient">Automatizada</span> para o Futuro do seu Negócio
                  </h1>
                </EditableText>
                
                <EditableText 
                  id="hero-subtitle"
                  type="textarea"
                  className="text-xl text-gray-600 leading-relaxed max-w-2xl"
                >
                  <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                    Automatize sua contabilidade com tecnologia de ponta. Mais tempo para focar no que realmente importa: o crescimento do seu negócio.
                  </p>
                </EditableText>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-brand-teal" />
                  <div>
                    <EditableText 
                      id="hero-stat-1-number"
                      className="font-semibold text-brand-dark"
                    >
                      500+
                    </EditableText>
                    <EditableText 
                      id="hero-stat-1-label"
                      className="text-sm text-gray-600"
                    >
                      <span className="text-sm text-gray-600 ml-1">Empresas atendidas</span>
                    </EditableText>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-brand-teal" />
                  <div>
                    <EditableText 
                      id="hero-stat-2-number"
                      className="font-semibold text-brand-dark"
                    >
                      98%
                    </EditableText>
                    <EditableText 
                      id="hero-stat-2-label"
                      className="text-sm text-gray-600"
                    >
                      <span className="text-sm text-gray-600 ml-1">Satisfação</span>
                    </EditableText>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-brand-gradient hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  onClick={() => setIsModalOpen(true)}
                >
                  <EditableText 
                    id="hero-cta-primary"
                    className="inline-flex items-center"
                  >
                    Começar Agora
                  </EditableText>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white transition-all duration-300 group"
                >
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  <EditableText 
                    id="hero-cta-secondary"
                    className="inline"
                  >
                    Ver Demonstração
                  </EditableText>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 border-t border-gray-200">
                <EditableText 
                  id="hero-trust-text"
                  className="text-sm text-gray-600 mb-4"
                >
                  <p className="text-sm text-gray-600 mb-4">
                    Confiado por empresas de todos os portes
                  </p>
                </EditableText>
                
                <div className="flex items-center space-x-6 opacity-60">
                  <span className="font-semibold text-gray-400">Microsoft</span>
                  <span className="font-semibold text-gray-400">Google</span>
                  <span className="font-semibold text-gray-400">Amazon</span>
                  <span className="font-semibold text-gray-400">Apple</span>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative lg:pl-8">
              <div className="relative">
                {/* Main Image */}
                <EditableImage
                  id="hero-image"
                  src={heroImage}
                  alt="Contabilidade Digital"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                  onSave={(newSrc) => setHeroImage(newSrc)}
                />
                
                {/* Floating Card */}
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-brand-gradient rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <EditableText 
                        id="hero-card-title"
                        className="font-semibold text-brand-dark"
                      >
                        Certificação Digital
                      </EditableText>
                      <EditableText 
                        id="hero-card-subtitle"
                        className="text-sm text-gray-600"
                      >
                        <p className="text-sm text-gray-600">
                          Segurança e conformidade garantidas
                        </p>
                      </EditableText>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ScheduleModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </EditableSection>
  );
}