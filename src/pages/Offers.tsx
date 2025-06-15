
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Offers = () => {
  const offerProducts = products.filter(p => p.originalPrice);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 animate-fade-in-up">Ofertas</h1>
      {offerProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {offerProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} style={{ animationDelay: `${index * 50}ms`, opacity: 0 }} />
          ))}
        </div>
      ) : (
        <p className="text-xl text-muted-foreground mt-4">Nenhuma oferta encontrada no momento.</p>
      )}
    </div>
  );
};
export default Offers;
