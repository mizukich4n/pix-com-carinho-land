import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Renata",
      age: "42 anos",
      role: "Mãe e organizadora de eventos escolares",
      content: "Sempre organizava a vaquinha da escola. Era um sufoco cobrar. Agora é automático.",
      rating: 5,
      highlight: "Nunca foi tão fácil organizar evento"
    },
    {
      name: "João",
      age: "35 anos", 
      role: "Empresário",
      content: "Emprestei pro meu irmão e nem precisei lembrar. O app mandou o lembrete. Ele pagou.",
      rating: 5,
      highlight: "Zero climão na família"
    },
    {
      name: "Michele",
      age: "38 anos",
      role: "Líder da igreja",
      content: "Usei no grupo da igreja. Todo mundo pagou certinho. Nunca foi tão fácil.",
      rating: 5,
      highlight: "Organização sem estresse"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="space-y-16 animate-fade-in-up">
          {/* Header */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center bg-primary/10 px-4 py-2 rounded-full">
              <span className="text-primary font-medium">💬 Quem já usa, aprova</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold">
              Depoimentos reais de quem já resolveu esse problema
            </h2>
            
            <p className="text-xl text-muted-foreground">
              Pessoas como você que já deixaram o climão pra trás
            </p>
          </div>

          {/* Testimonials grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="card-testimonial space-y-6 group hover:scale-105 transition-transform duration-300"
              >
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                  <blockquote className="text-lg font-medium text-foreground italic pl-6">
                    "{testimonial.content}"
                  </blockquote>
                </div>

                {/* Highlight */}
                <div className="bg-primary/10 px-3 py-2 rounded-lg">
                  <p className="text-sm font-medium text-primary text-center">
                    ✨ {testimonial.highlight}
                  </p>
                </div>

                {/* Author */}
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">
                        {testimonial.name[0]}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.name}, {testimonial.age}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social proof stats */}
          <div className="bg-muted/30 rounded-2xl p-8">
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">98%</div>
                <p className="text-muted-foreground">Recebem o dinheiro sem brigar</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">87%</div>
                <p className="text-muted-foreground">Melhoraram relações familiares</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">95%</div>
                <p className="text-muted-foreground">Recomendariam para amigos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;