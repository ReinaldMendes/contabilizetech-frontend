import { ForgotPasswordForm } from "./ForgotPasswordForm";
import logoIcon from "figma:asset/4ea0bd7a9b1f8b2bbb511255bac94715ee52ab3d.png";
import { Link } from "react-router-dom";

export default function ForgotPasswordPage() {
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
            Recuperar Acesso
          </h1>
          <p className="text-gray-600">
            Digite seu e-mail para enviarmos um link de redefinição de senha.
          </p>
        </div>
        
        <ForgotPasswordForm />
        
        <div className="mt-6 text-center">
          <Link 
            to="/admin/login" 
            className="text-sm text-brand-teal hover:text-brand-dark-blue font-medium transition-colors"
          >
            ← Voltar para o login
          </Link>
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>© 2024 ContabilizeTech. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  );
}