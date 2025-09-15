"use client"; // Footer usa hooks do ContentContext, então precisa ser cliente

import { Separator } from "./ui/separator";
import { EditableText } from "./EditableText";
import { EditableImage } from "./EditableImage";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Instagram
} from "lucide-react";
import { useContent } from "@/contexts/ContentContext";
import Link from 'next/link';

export function Footer() {
  const { content } = useContent();

  // Estrutura de dados para os links do rodapé para facilitar a renderização
  const serviceLinks = [
    { key: "footer.services.item1", fallback: "Contabilidade Digital", hrefKey: "footer.services.item1.href" },
    { key: "footer.services.item2", fallback: "Obrigações Fiscais", hrefKey: "footer.services.item2.href" },
    { key: "footer.services.item3", fallback: "Gestão Financeira", hrefKey: "footer.services.item3.href" },
  ];

  const companyLinks = [
    { key: "footer.company.item1", fallback: "Sobre nós", hrefKey: "footer.company.item1.href" },
    { key: "footer.company.item2", fallback: "Nossa equipe", hrefKey: "footer.company.item2.href" },
    { key: "footer.company.item3", fallback: "Carreira", hrefKey: "footer.company.item3.href" },
  ];
  
  return (
    <footer id="contact" className="bg-brand-dark text-white">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <EditableImage
                  contentKey="footer.logo"
                  fallback="/img/contabilizetech_logo.png"
                  alt="ContabilizeTech Logo"
                  width={40}
                  height={40}
                  priority
                  className="h-10 w-10 filter brightness-0 invert"
                />
                <span className="text-xl font-semibold text-white">
                  Contabilize<span className="text-brand-teal">Tech</span>
                </span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                <EditableText contentKey="footer.description" fallback="..." type="textarea" />
              </p>
              <div className="space-y-3">
                <a href={`mailto:${content['footer.contact.email']}`} className="flex items-center space-x-3 text-gray-300 hover:text-brand-teal">
                  <Mail className="h-5 w-5 text-brand-teal" />
                  <span><EditableText contentKey="footer.contact.email" fallback="..." as="span" /></span>
                </a>
                <a href={`tel:${(content['footer.contact.phone'] || '').replace(/\D/g, '')}`} className="flex items-center space-x-3 text-gray-300 hover:text-brand-teal">
                  <Phone className="h-5 w-5 text-brand-teal" />
                  <span><EditableText contentKey="footer.contact.phone" fallback="..." as="span" /></span>
                </a>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-brand-teal" />
                  <span className="text-gray-300"><EditableText contentKey="footer.contact.address" fallback="..." as="span" /></span>
                </div>
              </div>
            </div>
            
            {/* Services & Company Links */}
            <div>
              <h3 className="font-semibold mb-6"><EditableText contentKey="footer.services.title" fallback="Serviços" as="span" /></h3>
              <ul className="space-y-3 text-gray-300">
                {serviceLinks.map(link => (
                  <li key={link.key}>
                    <Link href={content[link.hrefKey] || '#'} className="hover:text-brand-teal transition-colors">
                      <EditableText contentKey={link.key} fallback={link.fallback} as="span" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-6"><EditableText contentKey="footer.company.title" fallback="Empresa" as="span" /></h3>
              <ul className="space-y-3 text-gray-300">
                {companyLinks.map(link => (
                  <li key={link.key}>
                    <Link href={content[link.hrefKey] || '#'} className="hover:text-brand-teal transition-colors">
                      <EditableText contentKey={link.key} fallback={link.fallback} as="span" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <Separator className="bg-gray-700" />
        
        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-sm text-gray-400">
               <EditableText contentKey="footer.copyright" fallback="© 2024 ContabilizeTech. Todos os direitos reservados." as="p" />
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400 mr-2"><EditableText contentKey="footer.social.handle" fallback="@contabilizetech" as="span" /></span>
              <Link href={content['footer.social.linkedin.url'] || '#'} target="_blank" className="p-2 rounded-lg bg-gray-800 hover:bg-brand-teal transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href={content['footer.social.instagram.url'] || '#'} target="_blank" className="p-2 rounded-lg bg-gray-800 hover:bg-brand-teal transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}