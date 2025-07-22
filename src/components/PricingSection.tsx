import { Button } from "@/components/ui/button";
import { Check, Crown, Gift } from "lucide-react";

const PricingSection = () => {
  const freeFeatures = [
    "Criar grupos e dividir contas",
    "Enviar lembretes automáticos simples", 
    "Receber via Pix com controle manual",
    "Até 3 grupos simultâneos"
  ];

  const premiumFeatures = [
    "Lembretes com mensagens personalizadas",
    "Vaquinhas com metas e prazos",
    "Grupos ilimitados", 
    "Dashboard com histórico, gráficos e análises",
    "Suporte prioritário",
    "Templates de mensagens prontos",
    "Relatórios detalhados",
    "Backup automático"
  ];

  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <div className="space-y-16 animate-fade-in-up">
          {/* Header */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center bg-primary/10 px-4 py-2 rounded-full">
              <Gift className="h-4 w-4 text-primary mr-2" />
              <span className="text-primary font-medium">🎁 Oferta Especial</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold">
              Comece grátis, evolua quando quiser
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Teste todas as funcionalidades Premium por <strong>7 dias gratuitos</strong>, sem cartão de crédito
            </p>
          </div>

          {/* Pricing cards */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="card-elegant space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🆓</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Plano Gratuito</h3>
                    <p className="text-muted-foreground">Para sempre</p>
                  </div>
                </div>
                
                <div className="text-3xl font-bold">
                  R$ 0<span className="text-lg font-normal text-muted-foreground">/mês</span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="font-medium text-foreground">O que já está incluso:</p>
                <ul className="space-y-3">
                  {freeFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button variant="outline" className="w-full btn-secondary">
                Começar Grátis
              </Button>
            </div>

            {/* Premium Plan */}
            <div className="card-elegant space-y-6 relative border-primary/50 shadow-[var(--shadow-button)]">
              {/* Popular badge */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Mais Popular
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Crown className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Plano Premium</h3>
                    <p className="text-primary font-medium">7 dias grátis!</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-3xl font-bold">
                    R$ 9,90<span className="text-lg font-normal text-muted-foreground">/mês</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Depois do período gratuito
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="font-medium text-foreground">Tudo do plano gratuito, mais:</p>
                <ul className="space-y-3">
                  {premiumFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button className="w-full btn-hero">
                Começar Teste Grátis de 7 Dias
              </Button>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <div className="text-center space-y-2">
                  <p className="text-sm font-medium text-primary">🎉 Bônus Especial</p>
                  <p className="text-sm text-muted-foreground">
                    <strong>7 dias grátis</strong> do plano Premium<br />
                    Sem cartão • Sem compromisso • Só baixar e testar
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Guarantee */}
          <div className="bg-card border border-border rounded-2xl p-8 text-center max-w-2xl mx-auto">
            <div className="space-y-4">
              <div className="text-4xl">🔐</div>
              <h3 className="text-xl font-bold">Garantia de Satisfação</h3>
              <p className="text-muted-foreground">
                Você não precisa pagar nada para experimentar. Baixe o app, organize seu próximo Pix, 
                use os lembretes com carinho. Se não te ajudar a evitar um climão... 
                você simplesmente não usa mais. <strong>Sem custo. Sem dor de cabeça.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;