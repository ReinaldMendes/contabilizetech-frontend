import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { 
  Edit3, 
  Camera, 
  Settings, 
  Save, 
  Eye, 
  EyeOff,
  Move,
  Check,
  X,
  Upload
} from "lucide-react";
import { Link } from "react-router-dom";
import logoIcon from "figma:asset/4ea0bd7a9b1f8b2bbb511255bac94715ee52ab3d.png";

export default function CMSGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-light to-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src={logoIcon} 
                alt="ContabilizeTech" 
                className="h-8 w-8"
              />
              <span className="text-xl font-semibold text-brand-dark">
                Contabilize<span className="text-brand-teal">Tech</span>
              </span>
            </div>
            <div className="flex space-x-3">
              <Link to="/cms-demo">
                <Button className="bg-brand-gradient">
                  Ver Demonstração
                </Button>
              </Link>
              <Link to="/admin/login">
                <Button variant="outline">
                  Fazer Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-brand-dark mb-4">
            Guia do Sistema CMS Inline
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aprenda como usar o sistema de edição inline da ContabilizeTech para 
            gerenciar o conteúdo do seu site de forma intuitiva e eficiente.
          </p>
        </div>

        {/* Authentication Flow */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-brand-dark mb-8 text-center">
            1. Fluxo de Autenticação
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-brand-teal rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                    1
                  </div>
                  Login
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Acesse a página de login administrativo com suas credenciais.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm font-medium mb-2">Credenciais Demo:</p>
                    <p className="text-xs text-gray-600">admin@contabilizetech.com.br</p>
                    <p className="text-xs text-gray-600">admin123</p>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Campo de email</li>
                    <li>• Campo de senha</li>
                    <li>• Link "Esqueceu a senha?"</li>
                    <li>• Link para cadastro</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-brand-teal rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                    2
                  </div>
                  Cadastro
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Registre uma nova conta de administrador.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Nome completo</li>
                    <li>• E-mail válido</li>
                    <li>• Senha (mín. 6 caracteres)</li>
                    <li>• Confirmação de senha</li>
                    <li>• Validação em tempo real</li>
                    <li>• Feedback de sucesso</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-8 h-8 bg-brand-teal rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                    3
                  </div>
                  Recuperação
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Recupere o acesso através do seu e-mail.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Digite seu e-mail</li>
                    <li>• Receba link por e-mail</li>
                    <li>• Link válido por 24h</li>
                    <li>• Instruções claras</li>
                    <li>• Opção de reenvio</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CMS Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-brand-dark mb-8 text-center">
            2. Sistema de Edição Inline
          </h2>

          {/* Admin Bar */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="h-6 w-6 text-brand-teal mr-3" />
                Barra de Administração
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Funcionalidades:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-brand-teal rounded-full mr-2"></div>
                      Status "Modo Administrador" ativo
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-brand-teal rounded-full mr-2"></div>
                      Toggle entre "Editando" e "Visualizando"
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-brand-teal rounded-full mr-2"></div>
                      Indicador de alterações não salvas
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-brand-teal rounded-full mr-2"></div>
                      Botão "Salvar Alterações"
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-brand-teal rounded-full mr-2"></div>
                      Acesso ao Dashboard
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-brand-teal rounded-full mr-2"></div>
                      Logout seguro
                    </li>
                  </ul>
                </div>
                <div className="bg-brand-dark rounded-lg p-4">
                  <div className="flex items-center justify-between text-white text-sm">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-brand-teal rounded-full animate-pulse"></div>
                        <span>Modo Administrador</span>
                      </div>
                      <Badge className="bg-brand-teal text-white">Editando</Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs">Olá, Administrador</span>
                      <Button size="sm" variant="ghost" className="text-white h-6">
                        <Eye className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-white h-6">
                        <Save className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-white h-6">
                        <Settings className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Text Editing */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Edit3 className="h-6 w-6 text-brand-teal mr-3" />
                Edição de Texto
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Como funciona:</h4>
                  <ol className="space-y-2 text-sm text-gray-600">
                    <li className="flex">
                      <span className="w-6 h-6 bg-brand-teal text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
                      Ative o "Modo Edição" na barra superior
                    </li>
                    <li className="flex">
                      <span className="w-6 h-6 bg-brand-teal text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
                      Passe o mouse sobre qualquer texto
                    </li>
                    <li className="flex">
                      <span className="w-6 h-6 bg-brand-teal text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
                      Clique no ícone de lápis que aparece
                    </li>
                    <li className="flex">
                      <span className="w-6 h-6 bg-brand-teal text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">4</span>
                      Edite o texto diretamente no campo
                    </li>
                    <li className="flex">
                      <span className="w-6 h-6 bg-brand-teal text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">5</span>
                      Salve com ✓ ou cancele com ✗
                    </li>
                  </ol>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="bg-white p-3 rounded border-2 border-brand-teal border-dashed relative">
                    <p className="text-gray-700">Este é um texto editável</p>
                    <Button size="sm" className="absolute -right-2 -top-2 h-6 w-6 p-0 bg-brand-teal">
                      <Edit3 className="h-3 w-3 text-white" />
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Exemplo visual do ícone de edição</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Image Editing */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Camera className="h-6 w-6 text-brand-teal mr-3" />
                Edição de Imagem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Funcionalidades:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <Upload className="h-4 w-4 text-brand-teal mr-2" />
                      Upload de novas imagens
                    </li>
                    <li className="flex items-center">
                      <Eye className="h-4 w-4 text-brand-teal mr-2" />
                      Preview antes de salvar
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-brand-teal mr-2" />
                      Validação de formato (JPG, PNG, GIF)
                    </li>
                    <li className="flex items-center">
                      <X className="h-4 w-4 text-brand-teal mr-2" />
                      Limite de tamanho (5MB)
                    </li>
                  </ul>
                  
                  <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
                    <p className="text-sm text-yellow-800">
                      <strong>Dica:</strong> Mantenha as imagens otimizadas para web para melhor performance.
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="relative bg-white rounded border-2 border-dashed border-gray-300 p-8 text-center">
                    <Camera className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600 text-sm">Área de upload de imagem</p>
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity rounded flex items-center justify-center">
                      <Button size="sm" className="bg-brand-teal">
                        <Camera className="h-4 w-4 mr-2" />
                        Editar Imagem
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section Control */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Move className="h-6 w-6 text-brand-teal mr-3" />
                Controle de Seções
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Opções disponíveis:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <Edit3 className="h-4 w-4 text-brand-teal mr-2" />
                      Editar conteúdo da seção
                    </li>
                    <li className="flex items-center">
                      <Move className="h-4 w-4 text-brand-teal mr-2" />
                      Reordenar seções (subir/descer)
                    </li>
                    <li className="flex items-center">
                      <Eye className="h-4 w-4 text-brand-teal mr-2" />
                      Mostrar/ocultar seção
                    </li>
                    <li className="flex items-center">
                      <Settings className="h-4 w-4 text-brand-teal mr-2" />
                      Configurações avançadas
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <div className="bg-white p-3 border-2 border-dashed border-brand-teal rounded relative">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Seção Hero</p>
                      <div className="flex space-x-1">
                        <Badge variant="secondary">Hero</Badge>
                        <Button size="sm" className="h-6 w-6 p-0 bg-brand-teal">
                          <Settings className="h-3 w-3 text-white" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Controles aparecem ao passar o mouse</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-brand-dark mb-4">
            Pronto para Experimentar?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore o sistema completo na nossa demonstração interativa ou faça login para começar a usar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cms-demo">
              <Button size="lg" className="bg-brand-gradient">
                🎯 Ver Demonstração Completa
              </Button>
            </Link>
            <Link to="/admin/login">
              <Button size="lg" variant="outline" className="border-brand-teal text-brand-teal">
                Fazer Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}