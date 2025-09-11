import '../../styles/globals.css';
import type { Metadata, Viewport } from 'next'; // Passo 1 já aplicado
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ContabilizeTech - Soluções Contábeis Automatizadas',
  description: 'Automatize sua contabilidade com tecnologia de ponta. Mais tempo para focar no que realmente importa: o crescimento do seu negócio.',
  keywords: 'contabilidade, automação, gestão financeira, empresa, tecnologia',
  authors: [{ name: 'ContabilizeTech' }],
  openGraph: {
    title: 'ContabilizeTech - Soluções Contábeis Automatizadas',
    description: 'Automatize sua contabilidade com tecnologia de ponta. Mais tempo para focar no que realmente importa: o crescimento do seu negócio.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ContabilizeTech - Soluções Contábeis Automatizadas',
    description: 'Automatize sua contabilidade com tecnologia de ponta.',
  },
  robots: {
    index: true,
    follow: true,
  },
  // Passo 2: Bloco 'viewport' foi REMOVIDO daqui.
};

// Passo 3: Nova constante 'viewport' ADICIONADA aqui.
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}