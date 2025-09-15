import { EditableText } from "./EditableText";

export function Features() {
  return (
    <section 
      id="quem-somos"
      className="relative py-32 bg-brand-dark overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark-blue to-brand-teal opacity-90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(46,175,154,0.1),transparent_50%)]"></div>
      
      <div className="relative container mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-h2 text-white mb-4">
            <EditableText
              contentKey="features.title"
              fallback="Quem Somos"
              as="span"
            />
          </h2>
          <div className="w-24 h-1 bg-brand-gradient mx-auto"></div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-white text-xl">
              <EditableText
                contentKey="features.intro"
                fallback="A Contabilizetech é uma empresa especializada em assessoria contábil, jurídica e estratégica voltada para o ecossistema de startups e franquias."
                type="textarea"
              />
            </p>
            
            <p className="text-gray-300">
              <EditableText
                contentKey="features.description1"
                fallback="Atuamos de forma integrada, oferecendo suporte completo desde a fase de ideação até a expansão, garantindo segurança, eficiência e conformidade em todas as etapas."
                type="textarea"
              />
            </p>
            
            <p className="text-gray-300">
              <EditableText
                contentKey="features.description2"
                fallback="Nosso papel vai além da execução contratual: acompanhamos reuniões estratégicas, damos suporte direto na formulação e renegociação de acordos, e participamos de decisões cruciais para o futuro de cada negócio."
                type="textarea"
              />
            </p>
            
            <p className="text-gray-300">
              <EditableText
                contentKey="features.description3"
                fallback="Também asseguramos orientação contínua em boas práticas regulatórias e de governança, alinhando estratégias aos parâmetros legais e equilibrando os interesses de fundadores, investidores e parceiros."
                type="textarea"
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}