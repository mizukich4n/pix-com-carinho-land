import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "A outra pessoa precisa ter o app instalado?",
      answer: "Não! O Cadê Meu Pix funciona mesmo se a outra pessoa não tiver o app. Os lembretes são enviados por WhatsApp de forma automática, e o pagamento é feito via Pix normal pelo banco dela."
    },
    {
      question: "Como funcionam os lembretes automáticos?",
      answer: "O app envia mensagens carinhosas e educadas pelo WhatsApp, sem parecer cobrança. Por exemplo: 'Oi João! 😊 Só lembrando do Pix do churrasco (R$ 35). Quando puder, tá? Valeu!' - sempre com jeitinho brasileiro."
    },
    {
      question: "O app tem acesso ao meu WhatsApp?",
      answer: "Não! O app não acessa seu WhatsApp. Ele apenas gera mensagens prontas que você pode copiar e enviar, ou usa a API oficial do WhatsApp Business para envios automáticos (com sua permissão)."
    },
    {
      question: "E se eu não quiser mais usar o app Premium?",
      answer: "Você pode cancelar a qualquer momento direto no app, sem burocracia. Não há fidelidade nem multa. Seus dados ficam salvos na conta gratuita e você pode voltar quando quiser."
    },
    {
      question: "Meus dados financeiros ficam seguros?",
      answer: "Sim! O Cadê Meu Pix não armazena informações do seu banco nem dados sensíveis. Apenas registra valores e nomes para organizar os grupos. Usamos criptografia e seguimos todas as normas de segurança brasileiras."
    },
    {
      question: "Posso usar para qualquer tipo de vaquinha?",
      answer: "Claro! Funciona para churrasco, presente de casamento, vaquinha da escola, conta do restaurante, empréstimo entre amigos, mensalidade da academia, qualquer situação onde você precisa organizar dinheiro entre pessoas próximas."
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="space-y-12 animate-fade-in-up">
          {/* Header */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tiramos as principais dúvidas para você começar sem receio
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="card-elegant border-0"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Still have questions */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center max-w-2xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Ainda tem dúvidas?</h3>
              <p className="text-muted-foreground">
                Nossa equipe está aqui para te ajudar! Entre em contato pelo WhatsApp ou email
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/5511999999999" 
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                >
                  📱 WhatsApp: (11) 99999-9999
                </a>
                <a 
                  href="mailto:ajuda@cademeupix.com.br" 
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                >
                  ✉️ ajuda@cademeupix.com.br
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;