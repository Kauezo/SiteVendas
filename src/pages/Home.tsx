
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Home = () => {
  const bannerImages = [
    "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=1200&h=400&fit=crop",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=400&fit=crop",
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&h=400&fit=crop",
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Carousel className="mb-12" opts={{ loop: true }}>
        <CarouselContent>
          {bannerImages.map((src, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <img src={src} className="w-full h-auto md:h-[400px] object-cover rounded-lg" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <section>
        <h2 className="text-3xl font-bold mb-8">Ofertas do dia</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} style={{ animationDelay: `${index * 50}ms`, opacity: 0 }} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
