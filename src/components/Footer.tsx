import { Smartphone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const links = {
    product: [
      { name: "Como funciona", href: "#" },
      { name: "Preços", href: "#" },
      { name: "Segurança", href: "#" },
      { name: "Atualizações", href: "#" }
    ],
    support: [
      { name: "Central de Ajuda", href: "#" },
      { name: "Contato", href: "#" },
      { name: "WhatsApp", href: "#" },
      { name: "Tutorial", href: "#" }
    ],
    legal: [
      { name: "Termos de Uso", href: "#" },
      { name: "Política de Privacidade", href: "#" },
      { name: "LGPD", href: "#" },
      { name: "Cookies", href: "#" }
    ]
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container-custom">
        {/* Main footer content */}
        <div className="py-16 grid lg:grid-cols-4 gap-12">
          {/* Brand section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-primary p-2 rounded-lg">
                <Smartphone className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Cadê Meu Pix</span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              O app que ajuda você a organizar empréstimos, vaquinhas e divisões de conta 
              entre amigos e familiares — sem climão, com muito carinho.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contato@cademeupix.com.br</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Smartphone className="h-4 w-4" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>São Paulo, Brasil</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Seg-Sex: 9h às 18h</span>
              </div>
            </div>
          </div>

          {/* Links sections */}
          <div className="lg:col-span-3 grid sm:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Produto</h3>
              <ul className="space-y-3">
                {links.product.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Suporte</h3>
              <ul className="space-y-3">
                {links.support.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Legal</h3>
              <ul className="space-y-3">
                {links.legal.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 Cadê Meu Pix. Todos os direitos reservados.
            </div>
            
            <div className="text-sm text-muted-foreground">
              Feito com ❤️ para facilitar sua vida financeira
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;