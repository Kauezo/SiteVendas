
import { Building, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-5xl font-extrabold mb-4 animate-fade-in-up">Sobre o VirtualMarket</h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '150ms' }}>
                    Revolucionando a forma como você compra, conectando você a um universo de produtos com a melhor experiência online.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
                <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                    <div className="flex justify-center mb-4">
                        <div className="p-4 bg-primary/10 rounded-full">
                            <Building className="h-10 w-10 text-primary" />
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Nossa Missão</h2>
                    <p className="text-muted-foreground">
                        Oferecer a mais ampla variedade de produtos com conveniência, segurança e os melhores preços, tornando a vida dos nossos clientes mais fácil e prática.
                    </p>
                </div>
                <div className="animate-fade-in-up" style={{ animationDelay: '450ms' }}>
                    <div className="flex justify-center mb-4">
                         <div className="p-4 bg-primary/10 rounded-full">
                           <Users className="h-10 w-10 text-primary" />
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Nossa Equipe</h2>
                    <p className="text-muted-foreground">
                        Somos um time de apaixonados por tecnologia e inovação, dedicados a criar a melhor plataforma de e-commerce do mercado.
                    </p>
                </div>
                <div className="animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                    <div className="flex justify-center mb-4">
                         <div className="p-4 bg-primary/10 rounded-full">
                           <Target className="h-10 w-10 text-primary" />
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Nossa Visão</h2>
                    <p className="text-muted-foreground">
                        Ser a plataforma de e-commerce preferida, reconhecida pela excelência no atendimento, inovação constante e impacto positivo na comunidade.
                    </p>
                </div>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-lg text-center animate-fade-in-up" style={{ animationDelay: '750ms' }}>
                <h2 className="text-3xl font-bold mb-4">Junte-se a nós!</h2>
                <p className="text-muted-foreground mb-6">
                    Seja comprando, vendendo ou fazendo parte do nosso time, você é a peça chave do nosso sucesso.
                </p>
                <Button asChild size="lg">
                    <Link to="/">Explorar Produtos</Link>
                </Button>
            </div>
        </div>
    );
};

export default About;
