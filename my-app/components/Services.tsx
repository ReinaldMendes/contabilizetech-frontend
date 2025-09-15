import { Card, CardContent } from "./ui/card";
import { EditableText } from "./EditableText";
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
    titleKey: "services.item1.title",
    descriptionKey: "services.item1.description",
    titleFallback: "Contabilidade Completa",
    descriptionFallback: "Planejamento tributário, obrigações fiscais e gestão financeira."
  },
  {
    icon: Scale,
    titleKey: "services.item2.title",
    descriptionKey: "services.item2.description",
    titleFallback: "Assessoria Jurídica",
    descriptionFallback: "Contratos, compliance, governança e suporte estratégico em negociações."
  },
  {
    icon: Shield,
    titleKey: "services.item3.title",
    descriptionKey: "services.item3.description",
    titleFallback: "Governança Corporativa",
    descriptionFallback: "Estruturação de conselhos, boas práticas e acompanhamento regulatório."
  },
  {
    icon: TrendingUp,
    titleKey: "services.item4.title",
    descriptionKey: "services.item4.description",
    titleFallback: "Smart Money para Startups",
    descriptionFallback: "Orientação estratégica, marketplace, captação de recursos e preparação para IPO."
  },
  {
    icon: Building2,
    titleKey: "services.item5.title",
    descriptionKey: "services.item5.description",
    titleFallback: "Consultoria para Franquias",
    descriptionFallback: "Expansão de unidades, gestão tributária e suporte jurídico especializado."
  },
  {
    icon: Users,
    titleKey: "services.item6.title",
    descriptionKey: "services.item6.description",
    titleFallback: "Acompanhamento Estratégico",
    descriptionFallback: "Presença em reuniões, apoio em ajustes contratuais e equilíbrio de interesses entre stakeholders."
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-h2 text-brand-dark mb-4">
            <EditableText
              contentKey="services.title"
              fallback="Nossos Serviços"
              as="span"
            />
          </h2>
          <p className="text-body text-gray-600 max-w-2xl mx-auto">
            <EditableText
              contentKey="services.description"
              fallback="Soluções integradas para startups e franquias, do planejamento estratégico à execução, garantindo conformidade e crescimento sustentável."
              type="textarea"
            />
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
                  <EditableText
                    contentKey={service.titleKey}
                    fallback={service.titleFallback}
                    as="span"
                  />
                </h3>
                
                <p className="text-body text-gray-600 leading-relaxed">
                  <EditableText
                    contentKey={service.descriptionKey}
                    fallback={service.descriptionFallback}
                    type="textarea"
                  />
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}