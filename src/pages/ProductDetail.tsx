
import { useParams, useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, ShieldCheck } from "lucide-react";
import NotFound from "./NotFound";
import { useCart } from "@/contexts/CartContext";

const ProductDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { addItem } = useCart();
    const product = products.find(p => p.id === Number(id));

    if (!product) {
        return <NotFound />;
    }
    
    const handleBuyNow = () => {
        addItem(product);
        navigate('/checkout');
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 animate-fade-in-up">
                <div>
                    <Card>
                        <CardContent className="p-0">
                            <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg object-cover aspect-square" />
                        </CardContent>
                    </Card>
                </div>
                <div className="flex flex-col gap-6">
                    <div>
                        <h1 className="text-3xl lg:text-4xl font-bold mb-2">{product.name}</h1>
                        <div className="mb-4">
                            {product.originalPrice && (
                                <span className="text-lg text-muted-foreground line-through mr-2">
                                    R$ {product.originalPrice.toFixed(2)}
                                </span>
                            )}
                             <p className="text-4xl font-extrabold text-primary">R$ {product.price.toFixed(2)}</p>
                            {product.installments && (
                                <p className="text-green-400 text-lg mt-1">em até {product.installments}x de R$ {(product.price / product.installments).toFixed(2)} sem juros</p>
                            )}
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                    </div>

                    <Card className="bg-card/50">
                        <CardContent className="p-6">
                            <div className="flex flex-col gap-4">
                                <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700" onClick={handleBuyNow}>Comprar agora</Button>
                                <Button size="lg" variant="outline" className="w-full" onClick={() => addItem(product)}>
                                    <ShoppingCart className="mr-2 h-5 w-5" />
                                    Adicionar ao carrinho
                                </Button>
                            </div>
                            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
                                <ShieldCheck className="h-4 w-4 text-green-500" />
                                <span>Compra segura com garantia</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
