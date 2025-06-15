
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '@/types';
import { products } from '@/data/products';
import { toast } from "sonner";

// Por enquanto, vamos usar dados mocados para iniciar o carrinho
const initialCartItems: Product[] = products.slice(0, 2);

interface CartContextType {
    cartItems: Product[];
    selectedItemIds: number[];
    addItem: (product: Product) => void;
    removeItem: (productId: number) => void;
    toggleSelectItem: (productId: number) => void;
    cartCount: number;
    selectedItems: Product[];
    selectedItemsTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartItems, setCartItems] = useState<Product[]>(initialCartItems);
    // Inicia com todos os itens do carrinho selecionados
    const [selectedItemIds, setSelectedItemIds] = useState<number[]>(() => 
        initialCartItems.map(item => item.id)
    );

    const addItem = (product: Product) => {
        setCartItems(prevItems => {
            const isItemInCart = prevItems.find(item => item.id === product.id);
            if (isItemInCart) {
                toast.info("Este item já está no carrinho.");
                return prevItems;
            }
            const newItems = [...prevItems, product];
            // Adiciona o novo item à seleção
            setSelectedItemIds(prevIds => [...prevIds, product.id]);
            toast.success(`${product.name} adicionado ao carrinho!`);
            return newItems;
        });
    };

    const removeItem = (productId: number) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
        setSelectedItemIds(prevIds => prevIds.filter(id => id !== productId));
        toast.error("Item removido do carrinho.");
    };

    const toggleSelectItem = (productId: number) => {
        setSelectedItemIds(prevIds =>
            prevIds.includes(productId)
                ? prevIds.filter(id => id !== productId)
                : [...prevIds, productId]
        );
    };
    
    const cartCount = cartItems.length;

    const selectedItems = cartItems.filter(item => selectedItemIds.includes(item.id));

    const selectedItemsTotal = selectedItems.reduce((acc, item) => acc + item.price, 0);


    return (
        <CartContext.Provider value={{ cartItems, selectedItemIds, addItem, removeItem, toggleSelectItem, cartCount, selectedItems, selectedItemsTotal }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart deve ser utilizado dentro de um CartProvider');
    }
    return context;
};
