import { LoginForm } from "./LoginForm";

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-light to-white flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="h-10 w-10 rounded bg-brand-gradient"></div>
            <span className="text-2xl font-semibold text-brand-dark">ContabilizeTech</span>
          </div>
          <h1 className="text-2xl font-semibold text-brand-dark mb-2">
            Painel Administrativo
          </h1>
          <p className="text-gray-600">
            Faça login para acessar o sistema
          </p>
        </div>
        
        <LoginForm />
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>© 2024 ContabilizeTech. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  );
}