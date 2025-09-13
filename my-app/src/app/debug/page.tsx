import { SimpleHeader } from "../../components/SimpleHeader";
import { Link } from "react-router-dom";

export default function DebugPage() {
  return (
    <div className="min-h-screen bg-white">
      <SimpleHeader />
      
      <main className="container mx-auto px-6 py-12">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-brand-dark mb-6">
            🔧 Página de Debug
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Esta página usa componentes simples para testar se o problema é de dependências
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h3 className="text-lg font-semibold mb-4">🔑 Autenticação</h3>
              <div className="space-y-3">
                <Link 
                  to="/admin/login"
                  className="block w-full bg-brand-teal text-white py-2 px-4 rounded hover:bg-brand-dark-blue transition-colors"
                >
                  Login
                </Link>
                <Link 
                  to="/admin/register"
                  className="block w-full border border-brand-teal text-brand-teal py-2 px-4 rounded hover:bg-brand-teal hover:text-white transition-all"
                >
                  Cadastro
                </Link>
                <Link 
                  to="/admin/forgot-password"
                  className="block w-full text-brand-teal hover:underline"
                >
                  Esqueci a senha
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h3 className="text-lg font-semibold mb-4">🎯 CMS</h3>
              <div className="space-y-3">
                <Link 
                  to="/cms-demo"
                  className="block w-full bg-brand-gradient text-white py-2 px-4 rounded hover:opacity-90 transition-opacity"
                >
                  Demonstração
                </Link>
                <Link 
                  to="/cms-guide"
                  className="block w-full border border-brand-accent text-brand-accent py-2 px-4 rounded hover:bg-brand-accent hover:text-white transition-all"
                >
                  Guia Completo
                </Link>
                <Link 
                  to="/admin/dashboard"
                  className="block w-full text-brand-dark hover:underline"
                >
                  Dashboard
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h3 className="text-lg font-semibold mb-4">🧪 Testes</h3>
              <div className="space-y-3">
                <Link 
                  to="/test"
                  className="block w-full bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors"
                >
                  Página de Teste
                </Link>
                <Link 
                  to="/simple"
                  className="block w-full border border-gray-600 text-gray-600 py-2 px-4 rounded hover:bg-gray-600 hover:text-white transition-all"
                >
                  Página Simples
                </Link>
                <Link 
                  to="/"
                  className="block w-full text-gray-600 hover:underline"
                >
                  Home Original
                </Link>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">
              📋 Como testar:
            </h3>
            <ol className="text-left text-blue-700 space-y-2">
              <li>1. Clique em qualquer link acima</li>
              <li>2. Se abrir corretamente = Next.js está funcionando</li>
              <li>3. Se der "not found" = há problema de configuração</li>
              <li>4. Teste especialmente o botão "Login" no header</li>
            </ol>
          </div>
        </div>
      </main>
    </div>
  );
}