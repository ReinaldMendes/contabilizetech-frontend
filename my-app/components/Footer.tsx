import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Instagram,
  Youtube
} from "lucide-react";
import logoIcon from "figma:asset/4ea0bd7a9b1f8b2bbb511255bac94715ee52ab3d.png";

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
                <img 
                  src={logoIcon} 
                  alt="ContabilizeTech" 
                  className="h-10 w-10 filter brightness-0 invert"
                />
                <span className="text-xl font-semibold text-white">
                  Contabilize<span className="text-brand-teal">Tech</span>
                </span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Transformamos a gestão contábil das empresas com tecnologia de ponta 
                e expertise especializada. Sua empresa mais eficiente, nossa missão.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-brand-teal" />
                  <span className="text-gray-300">comercial@contabilizetech.com.br</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-brand-teal" />
                  <span className="text-gray-300">(42) 99820-2183</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-brand-teal" />
                  <span className="text-gray-300">Rua Riachuelo, 129, sala 1</span>
                </div>
              </div>
            </div>
            
            {/* Services */}
            <div>
              <h3 className="font-semibold mb-6">Serviços</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a href="#" className="hover:text-brand-teal transition-colors">
                    Contabilidade Digital
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-teal transition-colors">
                    Obrigações Fiscais
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-teal transition-colors">
                    Gestão Financeira
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-teal transition-colors">
                    Consultoria Empresarial
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-teal transition-colors">
                    Relatórios Gerenciais
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h3 className="font-semibold mb-6">Empresa</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a href="#" className="hover:text-brand-teal transition-colors">
                    Sobre nós
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-teal transition-colors">
                    Nossa equipe
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-teal transition-colors">
                    Carreira
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-teal transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-teal transition-colors">
                    Imprensa
                  </a>
                </li>
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
              <a href="#" className="hover:text-brand-teal transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-brand-teal transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-brand-teal transition-colors">
                LGPD
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400 mr-2">@contabilizetech</span>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-gray-800 hover:bg-brand-teal transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-gray-800 hover:bg-brand-teal transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
            <p>
              © 2024 ContabilizeTech. Todos os direitos reservados. CNPJ: 00.000.000/0001-00
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}