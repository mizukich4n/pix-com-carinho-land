import { Button } from "@/components/ui/button";
import { Play, Download } from "lucide-react";
import appMockup from "@/assets/app-mockup.jpg";

const HeroSection = () => {
  return (
    <section className="section-padding bg-gradient-subtle overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-foreground">Nunca mais perca</span>{" "}
                <span className="text-primary">dinheiro</span>
                <span className="text-foreground">… nem</span>{" "}
                <span className="text-primary">amigos</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Descubra o app que te ajuda a organizar <strong>vaquinhas, cobranças e empréstimos</strong> entre pessoas próximas — com Pix, lembretes gentis e zero climão.
              </p>
              
              <div className="bg-accent/50 p-4 rounded-lg border-l-4 border-primary">
                <p className="text-lg font-medium text-accent-foreground">
                  ✨ Cobrar sem brigar é possível. A gente te mostra como.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero group">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Quero testar o app agora
              </Button>
              
              <Button variant="outline" className="btn-secondary group">
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Ver demonstração
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <span className="text-primary">✓</span>
                <span>Teste grátis 7 dias</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-primary">✓</span>
                <span>Sem cartão de crédito</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-primary">✓</span>
                <span>Cancele quando quiser</span>
              </div>
            </div>
          </div>

          {/* Mockup */}
          <div className="relative lg:justify-self-end animate-scale-in">
            <div className="relative z-10 animate-float">
              <img 
                src={appMockup} 
                alt="Cadê Meu Pix App Interface"
                className="w-full max-w-lg mx-auto rounded-3xl shadow-[var(--shadow-soft)]"
              />
            </div>
            
            {/* Background decorations */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/30 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;