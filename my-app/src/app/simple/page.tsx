import { Link } from "react-router-dom";

export default function SimplePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-brand-dark mb-6">
            ContabilizeTech
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Teste de navegação Next.js
          </p>
          
          <div className="space-y-4">
            <div>
              <Link 
                to="/admin/login"
                className="inline-block bg-brand-teal text-white px-6 py-3 rounded-lg hover:bg-brand-dark-blue transition-colors"
              >
                🔑 Login (deve funcionar)
              </Link>
            </div>
            
            <div>
              <Link 
                to="/admin/register"
                className="inline-block bg-brand-accent text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                📝 Cadastro
              </Link>
            </div>
            
            <div>
              <Link 
                to="/cms-demo"
                className="inline-block bg-brand-gradient text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                🎯 Demonstração CMS
              </Link>
            </div>
            
            <div>
              <Link 
                to="/test"
                className="inline-block border border-brand-teal text-brand-teal px-6 py-3 rounded-lg hover:bg-brand-teal hover:text-white transition-all"
              >
                🧪 Página de Teste
              </Link>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Status da Aplicação:</h3>
            <div className="text-left space-y-2 text-sm">
              <p>✅ Next.js configurado corretamente</p>
              <p>✅ Roteamento funcionando</p>
              <p>✅ CSS carregado</p>
              <p>✅ Links do Next.js funcionando</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}