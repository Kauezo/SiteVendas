
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Trash2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Checkbox } from "@/components/ui/checkbox";

const Cart = () => {
    const { 
        cartItems, 
        removeItem, 
        selectedItemIds, 
        toggleSelectItem, 
        selectedItemsTotal 
    } = useCart();
    
    const isEmpty = cartItems.length === 0;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8 animate-fade-in-up">Meu Carrinho</h1>

            {isEmpty ? (
                <div className="text-center border-2 border-dashed border-muted rounded-lg p-12 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                    <ShoppingCart className="mx-auto h-16 w-16 text-muted-foreground" />
                    <h2 className="mt-6 text-2xl font-semibold">Seu carrinho está vazio</h2>
                    <p className="mt-2 text-muted-foreground">
                        Parece que você ainda não adicionou nada ao seu carrinho.
                    </p>
                    <Button asChild className="mt-6">
                        <Link to="/">Continuar Comprando</Link>
                    </Button>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                    <div className="md:col-span-2">
                        <div className="space-y-4">
                            {cartItems.map(item => (
                                <div key={item.id} className="flex items-start sm:items-center gap-4 p-4 border rounded-lg flex-col sm:flex-row">
                                    <div className="flex items-center h-full">
                                        <Checkbox
                                            id={`select-${item.id}`}
                                            aria-label={`Selecionar ${item.name}`}
                                            checked={selectedItemIds.includes(item.id)}
                                            onCheckedChange={() => toggleSelectItem(item.id)}
                                            className="mr-4"
                                        />
                                    </div>
                                    <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
                                    <div className="flex-grow">
                                        <h2 className="font-semibold text-lg">{item.name}</h2>
                                        <p className="text-muted-foreground text-sm">{item.category}</p>
                                        <p className="font-bold text-primary mt-1">R$ {item.price.toFixed(2)}</p>
                                    </div>
                                    <div className="flex items-center gap-2 self-end sm:self-center">
                                        <Button 
                                            variant="outline" 
                                            size="icon" 
                                            className="text-destructive hover:bg-destructive/10 hover:text-destructive"
                                            onClick={() => removeItem(item.id)}
                                            aria-label={`Remover ${item.name}`}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="md:col-span-1">
                        <div className="bg-muted/30 p-6 rounded-lg sticky top-24">
                            <h2 className="text-2xl font-semibold mb-4">Resumo</h2>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span>R$ {selectedItemsTotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-muted-foreground">
                                    <span>Frete</span>
                                    <span>Grátis</span>
                                </div>
                            </div>
                            <hr className="my-4" />
                            <div className="flex justify-between font-bold text-lg mb-4">
                                <span>Total</span>
                                <span>R$ {selectedItemsTotal.toFixed(2)}</span>
                            </div>
                            <Button asChild size="lg" className="w-full" disabled={selectedItemIds.length === 0}>
                                <Link to="/checkout">Finalizar Compra</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
