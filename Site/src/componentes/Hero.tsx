import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Soluções Financeiras para{" "}
              <span className="text-primary">Servidores Públicos</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Especialistas em crédito consignado, cartão benefício e FGTS para servidores de todo o Brasil. Confiança, agilidade e atendimento personalizado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("produtos")}
                className="bg-gradient-to-r from-primary to-primary-dark hover:opacity-90 text-lg px-8"
              >
                Conheça Nossos Produtos
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("sobre")}
                className="text-lg px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Saiba Mais
              </Button>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right duration-700">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl" />
            <img
              src={heroImage}
              alt="Profissionais da saúde e servidores públicos"
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
