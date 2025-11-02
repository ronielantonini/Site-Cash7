import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Briefcase } from "lucide-react";
import parceriaImage from "@/assets/parceria.jpg";

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atendê-lo e construir uma parceria de sucesso
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-primary/20 hover:shadow-xl transition-all">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mb-6">
                <Briefcase className="text-primary-foreground" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Seja Nosso Parceiro</h3>
              <p className="text-muted-foreground mb-6">
                Junte-se à rede Cash7 e ofereça as melhores soluções financeiras para servidores públicos em todo o Brasil.
              </p>
              <Button
                className="bg-gradient-to-r from-primary to-primary-dark hover:opacity-90"
                size="lg"
                onClick={() => window.location.href = "mailto:faleconosco@cash7.com.br"}
              >
                <Mail className="mr-2" size={20} />
                faleconosco@cash7.com.br
              </Button>
            </CardContent>
          </Card>

          <Card className="border-secondary/20 hover:shadow-xl transition-all">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-light rounded-full flex items-center justify-center mb-6">
                <Mail className="text-secondary-foreground" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Trabalhe Conosco</h3>
              <p className="text-muted-foreground mb-6">
                Faça parte de uma equipe dinâmica e comprometida em oferecer as melhores soluções financeiras do mercado.
              </p>
              <Button
                className="bg-gradient-to-r from-secondary to-secondary-light hover:opacity-90"
                size="lg"
                onClick={() => window.location.href = "mailto:rh@cash7.com.br"}
              >
                <Mail className="mr-2" size={20} />
                rh@cash7.com.br
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
            <img
              src={parceriaImage}
              alt="Parceria e Crescimento"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white p-8 bg-primary/80 backdrop-blur-sm rounded-xl">
                <h3 className="text-3xl font-bold mb-2">Crescimento em Parceria</h3>
                <p className="text-lg">Juntos, construímos soluções que transformam vidas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
