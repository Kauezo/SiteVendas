
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";
import { Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  product: Product;
  style?: React.CSSProperties;
}

const ProductCard = ({ product, style }: ProductCardProps) => {
  const { addItem } = useCart();

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 animate-fade-in-up" style={style}>
      <CardHeader className="p-0 relative">
        <Link to={`/produto/${product.id}`}>
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        </Link>
        <Button size="icon" variant="ghost" className="absolute top-2 right-2 bg-black/30 hover:bg-black/50 text-white rounded-full">
          <Heart className="w-5 h-5" />
        </Button>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        {product.originalPrice && (
          <span className="text-xs text-muted-foreground line-through">
            R$ {product.originalPrice.toFixed(2)}
          </span>
        )}
        <div className="flex items-baseline gap-2">
          <p className="text-2xl font-bold">R$ {product.price.toFixed(2)}</p>
        </div>
        {product.installments && (
           <p className="text-green-400 text-sm">em até {product.installments}x sem juros</p>
        )}
        <Link to={`/produto/${product.id}`} className="hover:text-primary transition-colors">
            <h3 className="mt-2 font-semibold text-base leading-tight line-clamp-2">{product.name}</h3>
        </Link>
        {product.freeShipping && <p className="text-green-400 font-bold text-sm mt-1">Frete grátis</p>}
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => addItem(product)}>
          <ShoppingCart className="mr-2 h-4 w-4" />
          Adicionar ao carrinho
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
