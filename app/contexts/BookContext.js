'use client'
import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  showBookPopup: false,
  cart: [],
  currentBook: {
    id: '1',
    title: 'Some Observations and Opinions',
    author: 'Joel Smith',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=500&fit=crop',
    price: 24.99
  }
};

function bookReducer(state, action) {
  switch (action.type) {
    case 'OPEN_BOOK_POPUP':
      return { ...state, showBookPopup: true };
    case 'CLOSE_BOOK_POPUP':
      return { ...state, showBookPopup: false };
    case 'ADD_TO_CART':
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 } 
              : item
          )
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }]
        };
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };
    default:
      return state;
  }
}

const BookContext = createContext(undefined);

export function BookProvider({ children }) {
  const [state, dispatch] = useReducer(bookReducer, initialState);

  const openBookPopup = () => dispatch({ type: 'OPEN_BOOK_POPUP' });
  const closeBookPopup = () => dispatch({ type: 'CLOSE_BOOK_POPUP' });
  const addToCart = (book) => dispatch({ type: 'ADD_TO_CART', payload: book });
  const removeFromCart = (id) => dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  const updateQuantity = (id, quantity) => 
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });

  return (
    <BookContext.Provider value={{
      state,
      openBookPopup,
      closeBookPopup,
      addToCart,
      removeFromCart,
      updateQuantity
    }}>
      {children}
    </BookContext.Provider>
  );
}

export function useBook() {
  const context = useContext(BookContext);
  if (context === undefined) {
    throw new Error('useBook must be used within a BookProvider');
  }
  return context;
}