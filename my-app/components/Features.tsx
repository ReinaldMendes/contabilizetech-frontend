"use client";

import { Card, CardContent } from "./ui/card";
import { 
  Zap, 
  Shield, 
  BarChart3, 
  Clock,
  Users,
  FileText
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Automação Inteligente",
    description: "Processamento automático de documentos fiscais com IA avançada, eliminando tarefas manuais e reduzindo erros."
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Dados protegidos com criptografia de ponta e conformidade com LGPD. Seus dados estão sempre seguros."
  },
  {
    icon: BarChart3,
    title: "Relatórios em Tempo Real",
    description: "Dashboards intuitivos com métricas financeiras atualizadas em tempo real para decisões assertivas."
  },
  {
    icon: Clock,
    title: "Entrega Rápida",
    description: "Obrigações fiscais processadas e entregues dentro dos prazos, com alertas automáticos."
  },
  {
    icon: Users,
    title: "Suporte Especializado",
    description: "Equipe de contadores experientes disponível 24/7 para esclarecer dúvidas e orientações."
  },
  {
    icon: FileText,
    title: "Gestão Completa",
    description: "Todas as rotinas contábeis em uma plataforma: fiscal, trabalhista, societária e financeira."
  }
];

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-h2 text-brand-dark mb-4">
            Por que escolher a{" "}
            <span className="text-brand-gradient">ContabilizeTech</span>?
          </h2>
          <p className="text-body text-gray-600 max-w-2xl mx-auto">
            Tecnologia de ponta combinada com expertise contábil para transformar 
            a gestão financeira da sua empresa.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover-lift bg-white group cursor-pointer"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-teal/10 to-brand-dark-blue/10 flex items-center justify-center group-hover:from-brand-teal/20 group-hover:to-brand-dark-blue/20 transition-all duration-300">
                    <feature.icon className="h-7 w-7 text-brand-teal group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-brand-dark mb-3 group-hover:text-brand-teal transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-body text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
