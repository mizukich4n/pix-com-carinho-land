import { CheckCircle, Heart, Users, Bell, Smartphone, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const SolutionSection = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Dividir contas de forma justa, com Pix direto",
      description: "Sem mais calculadora nem confusão de quem pagou o quê"
    },
    {
      icon: Users,
      title: "Criar vaquinhas (festas, escola, igreja, presente) e ver quem pagou",
      description: "Organize qualquer evento sem dor de cabeça"
    },
    {
      icon: Heart,
      title: "Registrar empréstimos entre amigos ou familiares",
      description: "Mantenha o controle sem parecer interesseiro"
    },
    {
      icon: Bell,
      title: "Mandar lembretes automáticos — com jeitinho e sem cobrança direta",
      description: "O app lembra por você, você só recebe"
    },
    {
      icon: Smartphone,
      title: "Usar mesmo se a outra pessoa não tiver o app",
      description: "Funciona por WhatsApp, ninguém precisa baixar nada"
    }
  ];

  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <div className="space-y-16 animate-fade-in-up">
          {/* Header */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center bg-primary/10 px-4 py-2 rounded-full">
              <span className="text-primary font-medium">💡 A Solução</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold">
              Apresentamos o <span className="text-primary">Cadê Meu Pix</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              O app que ajuda você a receber o que te devem sem perder o que importa: <strong>a relação</strong>.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index}
                  className="flex gap-4 p-6 bg-card rounded-xl border border-border hover:shadow-[var(--shadow-soft)] transition-all duration-300 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <h3 className="font-semibold text-foreground leading-tight">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed pl-7">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quote */}
          <div className="bg-card border-l-4 border-primary rounded-xl p-8 shadow-[var(--shadow-card)]">
            <blockquote className="text-xl md:text-2xl font-medium text-center text-foreground italic">
              💬 "Cobrar alguém nunca foi tão leve. O app lembra por você."
            </blockquote>
          </div>

          {/* Transformation examples */}
          <div className="grid lg:grid-cols-2 gap-12 mt-16">
            {/* Example 1 */}
            <div className="card-elegant space-y-6">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold text-foreground">
                  💖 Imagine isso no próximo churrasco:
                </h3>
                
                <div className="space-y-3 text-left">
                  <div className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                    <p className="text-muted-foreground">Você cria o grupo no app, insere os valores e os nomes</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                    <p className="text-muted-foreground">O app manda os lembretes pelo WhatsApp, com frases suaves</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                    <p className="text-muted-foreground">Todo mundo paga no prazo. Ninguém precisa ficar cobrando. Ninguém fica sem graça.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Example 2 */}
            <div className="card-elegant space-y-6">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold text-foreground">
                  Ou então:
                </h3>
                
                <div className="space-y-3 text-left">
                  <div className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                    <p className="text-muted-foreground">Você empresta R$150 pro seu primo pagar um boleto</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                    <p className="text-muted-foreground">Dias depois… ping! Ele recebe um lembrete carinhoso</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                    <p className="text-muted-foreground">Ele paga. Você agradece. E tá tudo certo — sem tensão, sem climão, sem ressentimentos.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final message */}
          <div className="text-center bg-primary/5 rounded-2xl p-8">
            <p className="text-xl font-medium text-foreground">
              📲 É a tecnologia cuidando da parte chata, pra você cuidar das pessoas.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button className="btn-hero">
              Quero resolver isso agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;