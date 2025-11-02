import { Target, Eye, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre a Cash7</h2>
          <div className="space-y-4 text-muted-foreground text-lg">
            <p>
              A Cash 7 Serviços Financeiros iniciou suas atividades em 2021 com uma missão clara e um foco de mercado bem definido: prover soluções de seguro de vida para empresas. Naquele momento, o objetivo era garantir segurança e tranquilidade para o setor corporativo, estabelecendo as bases da nossa expertise no mercado financeiro.
            </p>
            <p>
              No entanto, a história da Cash 7 é marcada pela capacidade de adaptação e visão de futuro. Acompanhando a rápida evolução dos tempos e as crescentes necessidades do mercado, percebemos a oportunidade de expandir nosso leque de atuação.
            </p>
            <p>
              Hoje, a Cash 7 se orgulha de ter um alcance nacional, voltando seus produtos e serviços para atender <strong>servidores públicos em todo o Brasil</strong>. Nossa trajetória reflete nosso compromisso em crescer junto aos nossos parceiros e clientes, adaptando-nos constantemente para oferecer as melhores e mais completas soluções financeiras do mercado.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto">
                <Target className="text-primary-foreground" size={32} />
              </div>
              <h3 className="text-xl font-bold">Nossa Missão</h3>
              <p className="text-muted-foreground">
                Prover soluções financeiras e de seguros inovadoras e personalizadas, com foco em fintechs e servidores públicos em todo o Brasil, garantindo segurança, solidez e contribuindo para a tranquilidade e o planejamento financeiro de nossos clientes.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-light rounded-full flex items-center justify-center mx-auto">
                <Eye className="text-secondary-foreground" size={32} />
              </div>
              <h3 className="text-xl font-bold">Nossa Visão</h3>
              <p className="text-muted-foreground">
                Ser a principal referência nacional em serviços financeiros para o segmento público e parceiros fintechs, reconhecida pela excelência no atendimento, agilidade nas soluções e pela capacidade de antecipar as necessidades do mercado.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto">
                <Heart className="text-primary-foreground" size={32} />
              </div>
              <h3 className="text-xl font-bold">Nossos Valores</h3>
              <ul className="text-muted-foreground text-left space-y-2">
                <li>• Ética e Transparência</li>
                <li>• Foco no Cliente</li>
                <li>• Atendimento Personalizado</li>
                <li>• Inovação Contínua</li>
                <li>• Compromisso com Resultados</li>
                <li>• Cultura de Confiança</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
