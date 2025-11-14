import { Button } from "@/components/ui/button";
import { APP_LOGO, APP_TITLE } from "@/const";
import { Mail, Briefcase, Users, Target, Heart, Zap, Shield, TrendingUp } from "lucide-react";
import ProductCarousel from "@/components/ProductCarousel";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header/Navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={APP_LOGO} alt="Cash7 Logo" className="h-12 w-auto" />
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            <a href="#sobre" className="text-gray-700 hover:text-blue-600 font-medium transition">Sobre Nós</a>
            <a href="#missao" className="text-gray-700 hover:text-blue-600 font-medium transition">Missão & Visão</a>
            <a href="#produtos" className="text-gray-700 hover:text-blue-600 font-medium transition">Produtos</a>
            <a href="#contato" className="text-gray-700 hover:text-blue-600 font-medium transition">Contato</a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  Cash7
                </h1>
                <p className="text-2xl text-blue-700 font-semibold mb-6">
                  Soluções Financeiras para Servidores Públicos
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Inovação, segurança e confiança em serviços financeiros personalizados para você.
                </p>
                <div className="flex gap-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                    Seja Nosso Parceiro
                  </Button>
                  <Button variant="outline" className="px-8 py-3 text-lg">
                    Saiba Mais
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <img src="/Cash7.png" alt="Cash7 Serviços" className="w-full max-w-md h-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Nós Section */}
        <section id="sobre" className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Sobre Nós</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  A Cash 7 Serviços Financeiros iniciou suas atividades em 2021 com uma missão clara e um foco de mercado bem definido: prover soluções de seguro de vida para empresas.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Naquele momento, o objetivo era garantir segurança e tranquilidade para o setor corporativo, estabelecendo as bases da nossa expertise no mercado financeiro.
                </p>
              </div>
              <div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  No entanto, a história da Cash 7 é marcada pela capacidade de adaptação e visão de futuro. Acompanhando a rápida evolução dos tempos e as crescentes necessidades do mercado, percebemos a oportunidade de expandir nosso leque de atuação.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Essa evolução nos levou a ampliar significativamente nossa gama de produtos e a diversificar nossa base de clientes, direcionando nosso portfólio para atender ao dinâmico setor de fintechs.
                </p>
              </div>
            </div>
            <div className="mt-12 p-8 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-gray-800 text-lg leading-relaxed">
                Hoje, a Cash 7 se orgulha de ter um alcance nacional, voltando seus produtos e serviços para atender servidores públicos em todo o Brasil. Nossa trajetória reflete nosso compromisso em crescer junto aos nossos parceiros e clientes, adaptando-nos constantemente para oferecer as melhores e mais completas soluções financeiras do mercado.
              </p>
            </div>
          </div>
        </section>

        {/* Missão, Visão e Valores */}
        <section id="missao" className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Missão, Visão e Valores</h2>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              {/* Missão */}
              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-600">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Nossa Missão</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Prover soluções financeiras e de seguros inovadoras e personalizadas, com foco em fintechs e servidores públicos em todo o Brasil, garantindo segurança, solidez e contribuindo para a tranquilidade e o planejamento financeiro de nossos clientes.
                </p>
              </div>

              {/* Visão */}
              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-green-600">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Nossa Visão</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Ser a principal referência nacional em serviços financeiros para o segmento público e parceiros fintechs, reconhecida pela excelência no atendimento, agilidade nas soluções e pela capacidade de antecipar as necessidades do mercado.
                </p>
              </div>
            </div>

            {/* Valores */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Nossos Valores</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Ética e Transparência</h4>
                    <p className="text-gray-700">Atuamos com a máxima integridade, garantindo relações de confiança e total clareza em todas as operações.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Users className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Foco no Cliente</h4>
                    <p className="text-gray-700">Nossas soluções são desenvolvidas pensando nas necessidades reais do servidor público e na agilidade exigida pelas fintechs.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Heart className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Atendimento Personalizado</h4>
                    <p className="text-gray-700">Valorizamos a personalização do atendimento para cada indivíduo, adaptando soluções conforme necessário.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Zap className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Inovação Contínua</h4>
                    <p className="text-gray-700">Buscamos constantemente novas tecnologias e produtos para oferecer as melhores opções do mercado.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Produtos Section */}
        <section id="produtos" className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Nossos Produtos</h2>
            <ProductCarousel />
          </div>
        </section>

        {/* Contato Section */}
        <section id="contato" className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Entre em Contato</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Seja Nosso Parceiro */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <Briefcase className="w-8 h-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Seja Nosso Parceiro</h3>
                </div>
                <p className="text-gray-700 text-lg mb-6">
                  Interessado em parcerias? Entre em contato conosco e conheça as oportunidades de negócio.
                </p>
                <a
                  href="mailto:faleconosco@cash7.com.br"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                  <Mail className="w-5 h-5" />
                  faleconosco@cash7.com.br
                </a>
              </div>

              {/* Trabalhe Conosco */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-8 h-8 text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Trabalhe Conosco</h3>
                </div>
                <p className="text-gray-700 text-lg mb-6">
                  Faça parte do nosso time! Envie seu currículo e seja parte da revolução financeira.
                </p>
                <a
                  href="mailto:rh@cash7.com.br"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                  <Mail className="w-5 h-5" />
                  rh@cash7.com.br
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img src={APP_LOGO} alt="Cash7 Logo" className="h-10 w-auto mb-4" />
              <p className="text-gray-400">
                Soluções financeiras inovadoras para servidores públicos em todo o Brasil.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#sobre" className="hover:text-white transition">Sobre Nós</a></li>
                <li><a href="#missao" className="hover:text-white transition">Missão & Visão</a></li>
                <li><a href="#produtos" className="hover:text-white transition">Produtos</a></li>
                <li><a href="#contato" className="hover:text-white transition">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Parcerias: <a href="mailto:faleconosco@cash7.com.br" className="hover:text-white transition">faleconosco@cash7.com.br</a></li>
                <li>RH: <a href="mailto:rh@cash7.com.br" className="hover:text-white transition">rh@cash7.com.br</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Cash7 Soluções Financeiras. Todos os direitos reservados.</p>
            <p className="mt-2 text-sm">CNPJ: 44.304.493/0001-29</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
