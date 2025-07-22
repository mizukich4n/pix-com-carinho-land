import { Button } from "@/components/ui/button";
import { Download, Smartphone } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="section-padding bg-gradient-hero text-primary-foreground">
      <div className="container-custom">
        <div className="text-center space-y-12 animate-fade-in-up">
          {/* Main CTA */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              👇 Baixe agora o app <br />
              <span className="text-primary-light">Cadê Meu Pix</span>
            </h2>
            
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
              E nunca mais pergunte: <strong>"cadê o meu Pix?"</strong>
            </p>
          </div>

          {/* App store buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button 
              variant="secondary" 
              className="flex-1 bg-primary-foreground text-primary hover:bg-primary-foreground/90 py-6 px-8 text-lg font-semibold"
            >
              <Smartphone className="mr-3 h-6 w-6" />
              <div className="text-left">
                <div className="text-xs opacity-75">Baixar na</div>
                <div>Google Play</div>
              </div>
            </Button>

            <Button 
              variant="secondary" 
              className="flex-1 bg-primary-foreground text-primary hover:bg-primary-foreground/90 py-6 px-8 text-lg font-semibold"
            >
              <Download className="mr-3 h-6 w-6" />
              <div className="text-left">
                <div className="text-xs opacity-75">Baixar na</div>
                <div>App Store</div>
              </div>
            </Button>
          </div>

          {/* Message */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="text-xl font-medium">
              Cobrar com jeitinho é possível.<br />
              A gente te ajuda com isso. 😉
            </p>
          </div>

          {/* P.S. */}
          <div className="max-w-3xl mx-auto space-y-4">
            <h3 className="text-lg font-bold">P.S. – Um lembrete importante:</h3>
            <p className="text-lg opacity-90 leading-relaxed">
              A maioria das brigas por dinheiro começa com uma cobrança mal feita.
              O <strong>Cadê Meu Pix</strong> nasceu pra resolver isso — com empatia, tecnologia e bom humor.
            </p>
            <p className="text-xl font-semibold">
              Você só precisa experimentar.<br />
              Depois disso… cobrar no grupo do WhatsApp nunca mais. 👊🏽
            </p>
          </div>

          {/* Trust indicators */}
          <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20">
            <div className="flex items-center justify-center space-x-2 opacity-90">
              <span>✓</span>
              <span>7 dias grátis</span>
            </div>
            <div className="flex items-center justify-center space-x-2 opacity-90">
              <span>✓</span>
              <span>Sem cartão</span>
            </div>
            <div className="flex items-center justify-center space-x-2 opacity-90">
              <span>✓</span>
              <span>Cancele quando quiser</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;