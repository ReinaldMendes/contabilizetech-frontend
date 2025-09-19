"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Play, ArrowRight, Star, Users, Award } from "lucide-react";
import { ScheduleModal } from "./ScheduleModal";
import { EditableText } from "./EditableText";
import { EditableImage } from "./EditableImage";

// Recebe 'content' como prop, não usa mais o hook useContent()
export function Hero({ content }: { content: { [key: string]: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-brand-magnetic-blue text-white py-20 lg:py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
          style={{ backgroundImage: `url(${content['hero.backgroundImage'] || '/img/escritorio-background.png'})` }}
        ></div>
        <div className="relative pt-20 pb-16 sm:pt-32 sm:pb-24 z-10">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="space-y-8">
                <div className="flex">
                  <Badge className="bg-white/10 text-white border border-white/20 px-4 py-2 hover:bg-white/20 transition-colors">
                    <Star className="h-4 w-4 mr-2 fill-current" />
                    <EditableText contentKey="hero.badge" fallback="#1 em Automação Contábil" as="span" />
                  </Badge>
                </div>
                <div className="space-y-4">
                  <h1 className="text-hero text-white leading-tight">
                    <EditableText contentKey="hero.title" fallback="Contabilidade Automatizada para o Futuro do seu Negócio" type="textarea" as="span" />
                  </h1>
                  <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                    <EditableText contentKey="hero.subtitle" fallback="Automatize sua contabilidade com tecnologia de ponta..." type="textarea" />
                  </p>
                </div>
                {/* ... (resto do JSX do Hero como botões, stats, etc.) ... */}
              </div>
              {/* Right Column - Image */}
              <div className="relative lg:pl-8">
                <div className="relative">
                  <EditableImage
                    contentKey="hero.image"
                    fallback="/images/hero-image.png"
                    alt="Contabilidade Digital"
                    width={1000}
                    height={800}
                    priority
                    className="rounded-2xl shadow-2xl w-full h-auto"
                  />
                  {/* ... (card flutuante) ... */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScheduleModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
}