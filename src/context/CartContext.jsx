import { createContext, useContext, useState, useMemo, useCallback } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState([]);

    const addToCart = useCallback((product) => {
        setCartItem((prevCart) => {
            const itemInCart = prevCart.find((item) => item.id === product.id);
            if (itemInCart) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    }, []);
 
    const updateQuantity = useCallback((cartState, productId, action) => {
        setCartItem(() =>
            cartState
                .map((item) => {
                    if (item.id === productId) {
                        let newUnit = item.quantity;
                        if (action === "increase") {
                            newUnit += 1;
                        } else if (action === "decrease") {
                            newUnit -= 1;
                        }
                        return newUnit > 0 ? { ...item, quantity: newUnit } : null;
                    }
                    return item;
                })
                .filter((item) => item != null)
        );
    }, []);

    const deleteItem = useCallback((productId) => {
        setCartItem((prevCart) =>
            prevCart.filter((item) => item.id !== productId)
        );
    }, []);

    const value = useMemo(() => ({
        cartItem,
        setCartItem,
        addToCart,
        updateQuantity,
        deleteItem
    }), [cartItem, addToCart, updateQuantity, deleteItem]);

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
