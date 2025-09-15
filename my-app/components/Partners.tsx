import Image from 'next/image';

// 1. O array agora contém os caminhos diretos para as imagens na pasta /public
const partners = [
  { 
    src: '/img/logo-contabilizetech.png', 
    alt: 'ContabilizeTech Logo' 
  },
  { 
    src: '/img/logo-vida-exames.png', 
    alt: 'Laboratório VIDA EXAMES Logo' 
  },
  { 
    src: '/img/logo-agilizza.png', 
    alt: 'AGILIZZA SERVIÇOS Logo' 
  },
  { 
    src: '/img/odonto_excellence_transparente.png', 
    alt: 'ODONTO EXCELLENCE Logo' 
  }
];

// Duplicamos os logos para o efeito de slider infinito
const extendedPartners = [...partners, ...partners];

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
            {extendedPartners.map((partner, index) => (
              <div 
                key={index}
                // 2. Adicionamos 'relative' para o <Image> com 'fill' funcionar
                className="relative flex-shrink-0 mx-8 w-48 h-24 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* 3. Substituímos <img> por <Image> do Next.js */}
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  fill
                  style={{ objectFit: 'contain' }} // Garante que o logo caiba sem distorcer
                  className="px-4 hover:scale-110 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}