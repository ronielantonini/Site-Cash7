import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Wallet, FileText, ArrowRight } from "lucide-react";
import emprestimoImage from "@/assets/emprestimo-consignado.jpg";
import cartaoImage from "@/assets/cartao-beneficio.jpg";

const Products = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="produtos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Produtos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções financeiras completas e personalizadas para servidores públicos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="group hover:shadow-xl transition-all duration-300 border-primary/20 hover:border-primary/40">
            <CardHeader>
              <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                <img
                  src={emprestimoImage}
                  alt="Empréstimo Consignado"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center mb-3">
                <CreditCard className="text-primary-foreground" size={24} />
              </div>
              <CardTitle className="text-xl">Empréstimo Consignado</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Crédito com desconto direto na folha de pagamento. Taxas competitivas e aprovação rápida para servidores públicos.
              </p>
              <Button
                variant="link"
                className="p-0 h-auto text-primary group-hover:text-primary-dark"
                onClick={scrollToContact}
              >
                Saiba mais <ArrowRight size={16} className="ml-1" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-primary/20 hover:border-primary/40">
            <CardHeader>
              <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                <img
                  src={cartaoImage}
                  alt="Cartão Benefício"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary-light rounded-lg flex items-center justify-center mb-3">
                <Wallet className="text-secondary-foreground" size={24} />
              </div>
              <CardTitle className="text-xl">Cartão Benefício</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Cartão de crédito consignado com limite pré-aprovado e condições especiais para servidores.
              </p>
              <Button
                variant="link"
                className="p-0 h-auto text-primary group-hover:text-primary-dark"
                onClick={scrollToContact}
              >
                Saiba mais <ArrowRight size={16} className="ml-1" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-primary/20 hover:border-primary/40">
            <CardHeader>
              <div className="w-full h-48 rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <FileText size={80} className="text-primary" />
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-3">
                <FileText className="text-primary-foreground" size={24} />
              </div>
              <CardTitle className="text-xl">FGTS e Outros</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Antecipação de FGTS e outras soluções financeiras personalizadas para suas necessidades.
              </p>
              <Button
                variant="link"
                className="p-0 h-auto text-primary group-hover:text-primary-dark"
                onClick={scrollToContact}
              >
                Saiba mais <ArrowRight size={16} className="ml-1" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Products;
