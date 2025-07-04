"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog";

import { useBook } from "@/app/contexts/BookContext";
import { ShoppingCart } from "lucide-react";
import { useToast } from "@/app/hooks/use-toast";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import Navbar from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import ReactLenis from "@studio-freight/react-lenis";

export default function Shop() {
  const { state, addToCart } = useBook();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(state.currentBook);
    toast({
      title: "Added to Cart",
      description: `${state.currentBook.title} has been added to your cart.`,
    });
  };

  return (
    <>
      <Navbar />
      <ReactLenis root>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-4xl tracking-tight text-gray-900 font-serif pb-10">
              Shop
            </h2>
            <div className="flex flex-wrap">
              <Card className="shadow-lg">
                <CardContent className="p-10">
                  <div className="h-80 rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={state.currentBook.image}
                      alt={state.currentBook.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-2 mt-10">
                    <h3 className="text-xl font-serif font-bold text-slate-800">
                      By{state.currentBook.title}
                    </h3>
                    <p className="text-lg text-slate-600">
                      {state.currentBook.author}
                    </p>
                    <p className="text-2xl font-bold text-amber-600">
                      ${state.currentBook.price}
                    </p>
                  </div>

                  <Button
                    onClick={handleAddToCart}
                    className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg w-full"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </ReactLenis>
      <Footer />
    </>
  );
}
