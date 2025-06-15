
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const Sell = () => (
    <div className="container mx-auto px-4 py-12 flex justify-center">
        <Card className="w-full max-w-2xl animate-fade-in-up">
            <CardHeader>
                <CardTitle className="text-2xl">Vender seu produto</CardTitle>
                <CardDescription>Preencha as informações abaixo para anunciar seu produto na plataforma.</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="grid gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="product-name">Nome do Produto</Label>
                        <Input id="product-name" placeholder="Ex: Camiseta de Algodão" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="description">Descrição</Label>
                        <textarea
                            id="description"
                            placeholder="Descreva seu produto em detalhes..."
                            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="price">Preço (R$)</Label>
                            <Input id="price" type="number" placeholder="99.90" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="category">Categoria</Label>
                             <Select>
                                <SelectTrigger id="category">
                                    <SelectValue placeholder="Selecione uma categoria" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="eletronicos">Eletrônicos</SelectItem>
                                    <SelectItem value="celulares">Celulares</SelectItem>
                                    <SelectItem value="casa-moveis">Casa e Móveis</SelectItem>
                                    <SelectItem value="moda">Moda</SelectItem>
                                    <SelectItem value="acessorios">Acessórios</SelectItem>
                                    <SelectItem value="outros">Outros</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="picture">Foto do Produto</Label>
                        <Input id="picture" type="file" />
                    </div>
                    <Button type="submit" className="w-full">
                        Anunciar Produto
                    </Button>
                </form>
            </CardContent>
        </Card>
    </div>
);
export default Sell;
