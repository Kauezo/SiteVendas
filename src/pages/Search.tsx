
import { useSearchParams } from "react-router-dom";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q") || "";

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="animate-fade-in-up">
                <h1 className="text-3xl font-bold mb-2">Resultados da busca</h1>
                <p className="text-muted-foreground mb-8">
                    {filteredProducts.length} resultados para <span className="font-semibold text-foreground">"{query}"</span>
                </p>
            </div>

            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {filteredProducts.map((product, index) => (
                        <ProductCard key={product.id} product={product} style={{ animationDelay: `${index * 50 + 100}ms`, opacity: 0 }} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16 text-muted-foreground animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                    <p className="text-xl">Nenhum produto encontrado.</p>
                    <p>Tente buscar por outros termos.</p>
                </div>
            )}
        </div>
    );
};

export default SearchPage;
