import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { CheckCircle, Users, TrendingUp, Shield, Cpu, Cloud, Lock } from 'lucide-react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Dados do formulário:', formData)
    // Aqui você pode implementar o envio do formulário
    alert('Obrigado pelo contato! Entraremos em contato em breve.')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Header */}
      <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">
              nossagente<span className="text-blue-400">.</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-slate-300 hover:text-white transition-colors">Início</a>
              <a href="#sobre" className="text-slate-300 hover:text-white transition-colors">Sobre</a>
              <a href="#progresso" className="text-slate-300 hover:text-white transition-colors">Progresso</a>
              <a href="#proximos-passos" className="text-slate-300 hover:text-white transition-colors">Próximos Passos</a>
              <a href="#contato" className="text-slate-300 hover:text-white transition-colors">Contato</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Tecnologia na mão,
            <br />
            <span className="text-blue-400">rápido e sem enrolação!</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            A NossaGente oferece soluções tecnológicas inovadoras para servidores públicos e empresas, 
            com foco em segurança, eficiência e resultados práticos.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
            Saiba mais
          </Button>
        </div>
      </section>

      {/* KPIs Suporte Section */}
      <section id="sobre" className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">KPIs Suporte</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Nossos indicadores de performance demonstram nosso compromisso com a excelência no atendimento
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-700/50 border-slate-600">
              <CardHeader className="text-center">
                <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <CardTitle className="text-white">+250k</CardTitle>
                <CardDescription className="text-slate-300">Servidores Atendidos</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-slate-700/50 border-slate-600">
              <CardHeader className="text-center">
                <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <CardTitle className="text-white">+600</CardTitle>
                <CardDescription className="text-slate-300">Postos de Trabalho</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-slate-700/50 border-slate-600">
              <CardHeader className="text-center">
                <CheckCircle className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <CardTitle className="text-white">24h</CardTitle>
                <CardDescription className="text-slate-300">Tempo de Resposta</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Progresso Section */}
      <section id="progresso" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Nosso Progresso</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Acompanhe as conquistas e iniciativas que estamos implementando
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 border-blue-500/30">
              <CardHeader>
                <Users className="w-8 h-8 text-blue-400 mb-2" />
                <CardTitle className="text-white">Contratação de Help Desk e Desenvolvedor NGCard</CardTitle>
                <CardDescription className="text-slate-300">
                  Expansão da nossa equipe técnica para melhor atendimento e desenvolvimento de soluções
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
                </div>
                <p className="text-sm text-slate-400 mt-2">75% Concluído</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-600/20 to-green-800/20 border-green-500/30">
              <CardHeader>
                <Cloud className="w-8 h-8 text-green-400 mb-2" />
                <CardTitle className="text-white">Criação VPN em Cloud Computing</CardTitle>
                <CardDescription className="text-slate-300">
                  Implementação de infraestrutura segura na nuvem para acesso remoto
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full w-full"></div>
                </div>
                <p className="text-sm text-slate-400 mt-2">100% Concluído</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Próximos Passos Section */}
      <section id="proximos-passos" className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Próximos Passos</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Nossas iniciativas futuras para continuar inovando e oferecendo as melhores soluções
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 border-purple-500/30 hover:scale-105 transition-transform">
              <CardHeader className="text-center">
                <Cpu className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <CardTitle className="text-white">Implementação de Inteligência Artificial</CardTitle>
                <CardDescription className="text-slate-300">
                  Integração de IA para otimizar processos e melhorar a experiência do usuário
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 border-blue-500/30 hover:scale-105 transition-transform">
              <CardHeader className="text-center">
                <Cloud className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <CardTitle className="text-white">Migração Sistema NossaGente Card</CardTitle>
                <CardDescription className="text-slate-300">
                  Migração para infraestrutura NGCard com maior performance e segurança
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-gradient-to-br from-red-600/20 to-red-800/20 border-red-500/30 hover:scale-105 transition-transform">
              <CardHeader className="text-center">
                <Shield className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <CardTitle className="text-white">Campanha de Segurança da Informação</CardTitle>
                <CardDescription className="text-slate-300">
                  Fortalecimento das práticas de segurança e conscientização dos usuários
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Fale com a Gente!</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Gostou do que viu? Entre em contato e vamos encontrar a melhor solução para você!
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white text-center">Entre em Contato</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nome" className="text-slate-300">Nome Completo</Label>
                      <Input
                        id="nome"
                        name="nome"
                        type="text"
                        value={formData.nome}
                        onChange={handleInputChange}
                        className="bg-slate-700 border-slate-600 text-white"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="telefone" className="text-slate-300">Telefone</Label>
                      <Input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        className="bg-slate-700 border-slate-600 text-white"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-slate-300">E-mail</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-slate-700 border-slate-600 text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="mensagem" className="text-slate-300">Mensagem</Label>
                    <Textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      className="bg-slate-700 border-slate-600 text-white"
                      rows={4}
                      placeholder="Conte-nos como podemos ajudar..."
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 px-4 border-t border-slate-700">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold text-white mb-4">
            nossagente<span className="text-blue-400">.</span>
          </div>
          <p className="text-slate-400">
            © 2024 NossaGente. Todos os direitos reservados.
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="tel:08005914114" className="text-slate-400 hover:text-white transition-colors">
              0800 591 4114
            </a>
            <span className="text-slate-600">|</span>
            <a href="mailto:sac@nossagentecard.com.br" className="text-slate-400 hover:text-white transition-colors">
              sac@nossagentecard.com.br
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
