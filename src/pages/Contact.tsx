
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Contact = () => (
    <div className="container mx-auto px-4 py-12 flex justify-center">
        <Card className="w-full max-w-lg animate-fade-in-up">
            <CardHeader>
                <CardTitle className="text-2xl">Fale Conosco</CardTitle>
                <CardDescription>
                    Tem alguma dúvida ou sugestão? Preencha o formulário abaixo.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form className="grid gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Nome</Label>
                        <Input id="name" placeholder="Seu nome completo" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="seu@email.com" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="message">Mensagem</Label>
                        <textarea
                            id="message"
                            placeholder="Escreva sua mensagem aqui..."
                            className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                    </div>
                    <Button type="submit" className="w-full">
                        Enviar Mensagem
                    </Button>
                </form>
            </CardContent>
        </Card>
    </div>
);
export default Contact;
