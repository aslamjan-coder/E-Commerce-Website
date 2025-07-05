import React, { createContext, useContext, useReducer } from 'react';

// 1. Create context
const CartContext = createContext();

// 2. Reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }

    case 'REMOVE':
      return state.filter(item => item.id !== action.payload);

    case 'INCREMENT':
      return state.map(item =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case 'DECREMENT':
      return state.map(item =>
        item.id === action.payload
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      );

    case 'CLEAR':
      return [];

    default:
      console.warn(`Unhandled action type: ${action.type}`);
      return state;
  }
};

// 3. Provider component
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  // Optional: helper methods (in case you want cleaner usage)
  const addToCart = (item) => dispatch({ type: 'ADD', payload: item });
  const removeFromCart = (id) => dispatch({ type: 'REMOVE', payload: id });
  const incrementItem = (id) => dispatch({ type: 'INCREMENT', payload: id });
  const decrementItem = (id) => dispatch({ type: 'DECREMENT', payload: id });
  const clearCart = () => dispatch({ type: 'CLEAR' });

  return (
    <CartContext.Provider
      value={{ cart, dispatch, addToCart, removeFromCart, incrementItem, decrementItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// 4. Hook to use cart context
export const useCart = () => useContext(CartContext);
