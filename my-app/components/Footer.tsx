import { Separator } from "./ui/separator";
import { EditableText } from "./EditableText";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Instagram
} from "lucide-react";
import Image from 'next/image';

export function Footer() {
  return (
    <footer id="contact" className="bg-brand-dark text-white">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Image 
                  src="/img/contabilizetech_logo.png" 
                  alt="ContabilizeTech" 
                  width={40}
                  height={40}
                  className="h-10 w-10 filter brightness-0 invert"
                />
                <span className="text-xl font-semibold text-white">
                  Contabilize<span className="text-brand-teal">Tech</span>
                </span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                <EditableText
                  contentKey="footer.description"
                  fallback="Transformamos a gestão contábil das empresas com tecnologia de ponta e expertise especializada. Sua empresa mais eficiente, nossa missão."
                  type="textarea"
                />
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-brand-teal" />
                  <span className="text-gray-300">
                    <EditableText
                      contentKey="footer.contact.email"
                      fallback="comercial@contabilizetech.com.br"
                      as="span"
                    />
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-brand-teal" />
                  <span className="text-gray-300">
                    <EditableText
                      contentKey="footer.contact.phone"
                      fallback="(42) 99820-2183"
                      as="span"
                    />
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-brand-teal" />
                  <span className="text-gray-300">
                    <EditableText
                      contentKey="footer.contact.address"
                      fallback="Rua Riachuelo, 129, sala 1"
                      as="span"
                    />
                  </span>
                </div>
              </div>
            </div>
            
            {/* Services */}
            <div>
              <h3 className="font-semibold mb-6">
                <EditableText
                  contentKey="footer.services.title"
                  fallback="Serviços"
                  as="span"
                />
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-brand-teal transition-colors"><EditableText contentKey="footer.services.item1" fallback="Contabilidade Digital" as="span" /></a></li>
                <li><a href="#" className="hover:text-brand-teal transition-colors"><EditableText contentKey="footer.services.item2" fallback="Obrigações Fiscais" as="span" /></a></li>
                <li><a href="#" className="hover:text-brand-teal transition-colors"><EditableText contentKey="footer.services.item3" fallback="Gestão Financeira" as="span" /></a></li>
                <li><a href="#" className="hover:text-brand-teal transition-colors"><EditableText contentKey="footer.services.item4" fallback="Consultoria Empresarial" as="span" /></a></li>
                <li><a href="#" className="hover:text-brand-teal transition-colors"><EditableText contentKey="footer.services.item5" fallback="Relatórios Gerenciais" as="span" /></a></li>
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h3 className="font-semibold mb-6">
                <EditableText
                  contentKey="footer.company.title"
                  fallback="Empresa"
                  as="span"
                />
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-brand-teal transition-colors"><EditableText contentKey="footer.company.item1" fallback="Sobre nós" as="span" /></a></li>
                <li><a href="#" className="hover:text-brand-teal transition-colors"><EditableText contentKey="footer.company.item2" fallback="Nossa equipe" as="span" /></a></li>
                <li><a href="#" className="hover:text-brand-teal transition-colors"><EditableText contentKey="footer.company.item3" fallback="Carreira" as="span" /></a></li>
                <li><a href="#" className="hover:text-brand-teal transition-colors"><EditableText contentKey="footer.company.item4" fallback="Blog" as="span" /></a></li>
                <li><a href="#" className="hover:text-brand-teal transition-colors"><EditableText contentKey="footer.company.item5" fallback="Imprensa" as="span" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <Separator className="bg-gray-700" />
        
        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-brand-teal transition-colors"><EditableText contentKey="footer.legal.privacy" fallback="Política de Privacidade" as="span" /></a>
              <a href="#" className="hover:text-brand-teal transition-colors"><EditableText contentKey="footer.legal.terms" fallback="Termos de Uso" as="span" /></a>
              <a href="#" className="hover:text-brand-teal transition-colors"><EditableText contentKey="footer.legal.lgpd" fallback="LGPD" as="span" /></a>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400 mr-2">
                <EditableText
                  contentKey="footer.social.handle"
                  fallback="@contabilizetech"
                  as="span"
                />
              </span>
              <a href="#" className="p-2 rounded-lg bg-gray-800 hover:bg-brand-teal transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-gray-800 hover:bg-brand-teal transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
            <p>
              <EditableText
                contentKey="footer.copyright"
                fallback="© 2024 ContabilizeTech. Todos os direitos reservados. CNPJ: 00.000.000/0001-00"
                as="span"
              />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}