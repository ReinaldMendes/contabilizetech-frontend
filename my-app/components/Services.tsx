import { Card, CardContent } from "./ui/card";
import { 
  Calculator,
  Scale,
  Shield,
  TrendingUp,
  Building2,
  Users
} from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Contabilidade Completa",
    description: "Planejamento tributário, obrigações fiscais e gestão financeira."
  },
  {
    icon: Scale,
    title: "Assessoria Jurídica",
    description: "Contratos, compliance, governança e suporte estratégico em negociações."
  },
  {
    icon: Shield,
    title: "Governança Corporativa",
    description: "Estruturação de conselhos, boas práticas e acompanhamento regulatório."
  },
  {
    icon: TrendingUp,
    title: "Smart Money para Startups",
    description: "Orientação estratégica, marketplace, captação de recursos e preparação para IPO."
  },
  {
    icon: Building2,
    title: "Consultoria para Franquias",
    description: "Expansão de unidades, gestão tributária e suporte jurídico especializado."
  },
  {
    icon: Users,
    title: "Acompanhamento Estratégico",
    description: "Presença em reuniões, apoio em ajustes contratuais e equilíbrio de interesses entre stakeholders."
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-h2 text-brand-dark mb-4">
            Nossos Serviços
          </h2>
          <p className="text-body text-gray-600 max-w-2xl mx-auto">
            Soluções integradas para startups e franquias, do planejamento estratégico 
            à execução, garantindo conformidade e crescimento sustentável.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover-lift bg-white group cursor-pointer"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-teal/10 to-brand-dark-blue/10 flex items-center justify-center group-hover:from-brand-teal/20 group-hover:to-brand-dark-blue/20 transition-all duration-300">
                    <service.icon className="h-7 w-7 text-brand-teal group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-brand-dark mb-3 group-hover:text-brand-teal transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-body text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}