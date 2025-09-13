import { LoginForm } from "./LoginForm";
import { Link } from "react-router-dom";
import logoIcon from "figma:asset/4ea0bd7a9b1f8b2bbb511255bac94715ee52ab3d.png";

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-light to-white flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <img 
              src={logoIcon} 
              alt="ContabilizeTech" 
              className="h-10 w-10"
            />
            <span className="text-2xl font-semibold text-brand-dark">
              Contabilize<span className="text-brand-teal">Tech</span>
            </span>
          </div>
          <h1 className="text-2xl font-semibold text-brand-dark mb-2">
            Área de Edição
          </h1>
          <p className="text-gray-600">
            Faça login para editar o site
          </p>
        </div>
        
        <LoginForm />
        
        <div className="mt-6 text-center space-y-2">
          <div>
            <Link 
              to="/cms-demo"
              className="inline-flex items-center text-sm text-brand-teal hover:text-brand-dark-blue font-medium transition-colors"
            >
              🎯 Ver Demonstração do Sistema CMS
            </Link>
          </div>
          <div>
            <Link 
              to="/cms-guide"
              className="inline-flex items-center text-sm text-gray-600 hover:text-brand-teal font-medium transition-colors"
            >
              📖 Guia Completo do CMS
            </Link>
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>© 2024 ContabilizeTech. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  );
}