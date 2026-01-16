import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        item =>
          item.id === product.id &&
          item.size === product.size
      );

      // ✅ If product already exists → increase quantity
      if (existingIndex !== -1) {
        const updatedCart = [...prevCart];

        updatedCart[existingIndex] = {
          ...updatedCart[existingIndex],
          quantity: updatedCart[existingIndex].quantity + 1,
          totalPrice:
            (updatedCart[existingIndex].quantity + 1) *
            updatedCart[existingIndex].price,
        };

        return updatedCart;
      }

      // ✅ If new product → add to cart
      return [
        ...prevCart,
        {
          ...product,
          quantity: 1,
          totalPrice: product.price,
        },
      ];
    });
  };

const removeFromCart = (id, size) => {
  setCart(prevCart =>
    prevCart
      .map(item => {
        if (item.id === id && item.size === size) {
          // ⬇ Decrease quantity
          if (item.quantity > 1) {
            return {
              ...item,
              quantity: item.quantity - 1,
              totalPrice: (item.quantity - 1) * item.price,
            };
          }
          // ⬇ Quantity is 1 → remove item
          return null;
        }
        return item;
      })
      .filter(Boolean)
  );
};


  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
