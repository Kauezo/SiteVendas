
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Fashion = () => {
  const fashionProducts = products.filter(p => p.category === "Moda");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 animate-fade-in-up">Moda</h1>
      {fashionProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {fashionProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} style={{ animationDelay: `${index * 50}ms`, opacity: 0 }} />
          ))}
        </div>
      ) : (
        <p className="text-xl text-muted-foreground mt-4">Nenhum produto de moda encontrado.</p>
      )}
    </div>
  );
};
export default Fashion;
