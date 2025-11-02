import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoCash7 from "@/assets/logo-cash7.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <img src={logoCash7} alt="Cash7 Logo" className="h-12 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Sobre Nós
            </button>
            <button
              onClick={() => scrollToSection("produtos")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contato
            </button>
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-gradient-to-r from-primary to-primary-dark hover:opacity-90"
            >
              Seja Parceiro
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button
              onClick={() => scrollToSection("inicio")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-md"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-md"
            >
              Sobre Nós
            </button>
            <button
              onClick={() => scrollToSection("produtos")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-md"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-md"
            >
              Contato
            </button>
            <Button
              onClick={() => scrollToSection("contato")}
              className="w-full bg-gradient-to-r from-primary to-primary-dark hover:opacity-90"
            >
              Seja Parceiro
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
