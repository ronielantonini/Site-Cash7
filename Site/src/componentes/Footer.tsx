import logoExtended from "@/assets/logo-extended.jpg";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={logoExtended} alt="Cash7 Logo" className="h-16 w-auto mb-4" />
            <p className="text-muted-foreground">
              Soluções financeiras para servidores públicos em todo o Brasil.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Navegação</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#inicio" className="hover:text-primary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-primary transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a
                  href="mailto:faleconosco@cash7.com.br"
                  className="hover:text-primary transition-colors"
                >
                  faleconosco@cash7.com.br
                </a>
              </li>
              <li>
                <a
                  href="mailto:rh@cash7.com.br"
                  className="hover:text-primary transition-colors"
                >
                  rh@cash7.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Cash7 Serviços Financeiros. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
