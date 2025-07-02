
'use client'
import Navbar from "@/app/components/Navbar";
import { Button } from "@/app/components/ui/button";
import { useBook } from "@/app/contexts/BookContext";
import { Trash2, Plus, Minus } from "lucide-react";
import Link from "next/link";
const Cart = () => {
  const { state, removeFromCart, updateQuantity } = useBook();

  const updateItemQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      updateQuantity(id, quantity);
    }
  };

  const getTotalPrice = () => {
    return state.cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-gray-50">
    <Navbar/>
      <div className="pt-30">
        <div className="container mx-auto px-6">
          <div className="max-w-8xl mx-auto">
            <h1 className="text-4xl font-serif font-bold text-slate-800 mb-8">
              Shopping Cart
            </h1>
            {state.cart.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-slate-600 mb-6">Your cart is empty</p>
                <Link href="/">
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {state.cart.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center space-x-6">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-24 h-32 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-serif font-bold text-slate-800">
                          {item.title}
                        </h3>
                        <p className="text-slate-600">by {item.author}</p>
                        <p className="text-lg font-bold text-amber-600 mt-2">
                          ${item.price}
                        </p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="text-lg font-semibold w-8 text-center">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                      <Button
                        variant="destructive"
                        size="icon"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-semibold">Total:</span>
                    <span className="text-2xl font-bold text-amber-600">
                      ${getTotalPrice()}
                    </span>
                  </div>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3">
                    <Link href="/pages/checkout">
                    Proceed to Checkout
                    </Link>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
