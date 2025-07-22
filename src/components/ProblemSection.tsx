import { MessageSquareX, CreditCard, Heart } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: MessageSquareX,
      title: "Teve que cobrar alguém no grupo do WhatsApp e ficou no vácuo?",
      description: "Aquela sensação de ter mandado mensagem e ninguém responder..."
    },
    {
      icon: CreditCard,
      title: "Pagou por todo mundo e ouviu: \"me lembra depois que eu te faço o Pix\"?",
      description: "E depois você que vira o chato lembrando de novo e de novo..."
    },
    {
      icon: Heart,
      title: "Emprestou dinheiro pra alguém da família… e nunca mais viu a cor?",
      description: "Entre familia é sempre \"depois eu te pago\" que nunca chega..."
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Você já passou por isso?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Se você se identificou com pelo menos uma dessas situações, você não está sozinho.
            </p>
          </div>

          {/* Problem cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {problems.map((problem, index) => {
              const IconComponent = problem.icon;
              return (
                <div 
                  key={index}
                  className="card-elegant group hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-center space-y-4">
                    <div className="mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                      <IconComponent className="h-8 w-8 text-destructive" />
                    </div>
                    
                    <h3 className="text-lg font-semibold leading-tight">
                      {problem.title}
                    </h3>
                    
                    <p className="text-muted-foreground">
                      {problem.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Emotional impact */}
          <div className="bg-muted/50 rounded-2xl p-8 mt-16 space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              😓 Cobrar amigos e familiares é uma das coisas mais desconfortáveis que existem.
            </h3>
            
            <p className="text-lg text-muted-foreground">
              Mas a culpa não é sua. O problema é que ninguém ensinou a gente a lidar com dinheiro entre pessoas próximas.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center space-y-2">
                <div className="text-2xl">🛑</div>
                <p className="font-medium">Cobrar parece grosseria</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl">😬</div>
                <p className="font-medium">Lembrar vira "climão"</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl">🥲</div>
                <p className="font-medium">E quem se organiza... se frustra</p>
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mt-8">
              <p className="text-lg font-medium text-primary">
                Mas e se existisse um jeito de resolver isso sem brigar, sem vergonha e com muito carinho?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;