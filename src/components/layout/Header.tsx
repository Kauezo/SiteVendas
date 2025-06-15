import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart, Menu, Package2 } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & { title: string }
>(({ className, title, children, to, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          to={to}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"


const Header = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const navigate = useNavigate();
  const { cartCount } = useCart();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${searchTerm.trim()}`);
      setSearchTerm("");
    }
  };

  const categories: { title: string; href: string; description: string }[] = [
    {
      title: "Moda",
      href: "/moda",
      description: "As últimas tendências e lançamentos do mundo da moda.",
    },
    {
      title: "Supermercado",
      href: "/supermercado",
      description: "Tudo o que você precisa para sua casa, com entrega rápida.",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <Package2 className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">VirtualMarket</span>
          </Link>
          <nav className="flex items-center space-x-4 text-sm font-medium">
             <Link to="/ofertas" className="transition-colors hover:text-foreground/80 text-foreground/60">Ofertas</Link>
             <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Categorias</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {categories.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            to={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <Link to="/promocoes" className="transition-colors hover:text-foreground/80 text-foreground/60">Promoções</Link>
              <Link to="/vender" className="transition-colors hover:text-foreground/80 text-foreground/60">Vender</Link>
              <Link to="/contato" className="transition-colors hover:text-foreground/80 text-foreground/60">Contato</Link>
              <Link to="/sobre-nos" className="transition-colors hover:text-foreground/80 text-foreground/60">Sobre Nós</Link>
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  type="search" 
                  placeholder="Buscar produtos..." 
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </form>
          </div>
          <nav className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" asChild>
              <Link to="/auth/login">Entrar</Link>
            </Button>
            <Button asChild>
              <Link to="/auth/register">Criar conta</Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link to="/cart" className="relative">
                <ShoppingCart className="h-4 w-4" />
                {cartCount > 0 && (
                    <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 text-xs justify-center p-0 rounded-full">
                        {cartCount}
                    </Badge>
                )}
              </Link>
            </Button>
          </nav>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link to="/" className="mr-6 flex items-center space-x-2 mb-6">
                <Package2 className="h-6 w-6" />
                <span className="font-bold">VirtualMarket</span>
            </Link>
            <div className="flex flex-col space-y-4">
              <Link to="/ofertas" className="transition-colors hover:text-foreground/80 text-foreground/60">Ofertas</Link>
              <Link to="/moda" className="transition-colors hover:text-foreground/80 text-foreground/60">Moda</Link>
              <Link to="/supermercado" className="transition-colors hover:text-foreground/80 text-foreground/60">Supermercado</Link>
              <Link to="/promocoes" className="transition-colors hover:text-foreground/80 text-foreground/60">Promoções</Link>
              <Link to="/vender" className="transition-colors hover:text-foreground/80 text-foreground/60">Vender</Link>
              <Link to="/contato" className="transition-colors hover:text-foreground/80 text-foreground/60">Contato</Link>
              <Link to="/sobre-nos" className="transition-colors hover:text-foreground/80 text-foreground/60">Sobre Nós</Link>
              <hr/>
              <Link to="/cart" className="transition-colors hover:text-foreground/80 text-foreground/60 flex items-center justify-between">
                <span>Carrinho</span>
                {cartCount > 0 && (
                    <Badge variant="secondary">{cartCount}</Badge>
                )}
              </Link>
              <Link to="/auth/login" className="transition-colors hover:text-foreground/80 text-foreground/60">Entrar</Link>
              <Link to="/auth/register" className="transition-colors hover:text-foreground/80 text-foreground/60">Criar conta</Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
