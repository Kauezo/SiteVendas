
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Promotions = () => {
  const promotionProducts = products.filter(p => p.freeShipping);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 animate-fade-in-up">Promoções com Frete Grátis</h1>
      {promotionProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {promotionProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} style={{ animationDelay: `${index * 50}ms`, opacity: 0 }} />
          ))}
        </div>
      ) : (
        <p className="text-xl text-muted-foreground mt-4">Nenhum produto com frete grátis encontrado.</p>
      )}
    </div>
  );
};
export default Promotions;
