
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Supermarket = () => {
  const supermarketProducts = products.filter(p => p.category === "Supermercado");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 animate-fade-in-up">Supermercado</h1>
      {supermarketProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {supermarketProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} style={{ animationDelay: `${index * 50}ms`, opacity: 0 }} />
          ))}
        </div>
      ) : (
        <p className="text-xl text-muted-foreground mt-4">Nenhum produto de supermercado encontrado.</p>
      )}
    </div>
  );
};
export default Supermarket;
