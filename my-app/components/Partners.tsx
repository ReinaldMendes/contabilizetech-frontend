import contabilizeTechLogo from "figma:asset/f263e5b4d8ee0de24ded0d8420e566b956eea681.png";
import vidaExamesLogo from "figma:asset/49de0d722a4efa635d05ee472a8b6374f71dabe3.png";
import agilizzaLogo from "figma:asset/2f3f7d4350e467bdf4431652dd46666752517a37.png";

const partners = [
  {
    name: "ContabilizeTech",
    logo: contabilizeTechLogo,
    alt: "ContabilizeTech Logo"
  },
  {
    name: "Laboratório VIDA EXAMES",
    logo: vidaExamesLogo,
    alt: "Laboratório VIDA EXAMES Logo"
  },
  {
    name: "AGILIZZA SERVIÇOS",
    logo: agilizzaLogo,
    alt: "AGILIZZA SERVIÇOS Logo"
  },
  // Duplicamos os logos para o efeito infinito
  {
    name: "ContabilizeTech",
    logo: contabilizeTechLogo,
    alt: "ContabilizeTech Logo"
  },
  {
    name: "Laboratório VIDA EXAMES",
    logo: vidaExamesLogo,
    alt: "Laboratório VIDA EXAMES Logo"
  },
  {
    name: "AGILIZZA SERVIÇOS",
    logo: agilizzaLogo,
    alt: "AGILIZZA SERVIÇOS Logo"
  }
];

export function Partners() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-h2 text-brand-dark mb-4">
            Empresas que Confiam na Gente
          </h2>
          <p className="text-body text-gray-600 max-w-2xl mx-auto">
            Parceiros que escolheram a ContabilizeTech para impulsionar seus negócios 
            com soluções contábeis e estratégicas de excelência.
          </p>
        </div>

        {/* Partners Slider */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="flex-shrink-0 mx-8 w-48 h-24 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  className="max-h-16 max-w-40 object-contain hover:scale-110 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}