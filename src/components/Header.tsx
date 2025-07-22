import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="bg-primary p-2 rounded-lg">
              <Smartphone className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Cadê Meu Pix</span>
          </div>
          
          <Button className="btn-hero">
            Baixar Agora
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;