"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { useBook } from "@/app/contexts/BookContext";
import { ShoppingCart } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import { Button } from "./ui/button";

export function BookPopup() {
  const { state, closeBookPopup, addToCart } = useBook();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(state.currentBook);
    closeBookPopup();
    toast({
      title: "Added to Cart",
      description: `${state.currentBook.title} has been added to your cart.`,
    });
  };

  return (
    <Dialog open={state.showBookPopup} onOpenChange={closeBookPopup}>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-slate-800">
            Get the Book
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-6 p-4">
          <div className="w-48 h-64 rounded-lg overflow-hidden shadow-lg">
            <img
              src={state.currentBook.image}
              alt={state.currentBook.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-xl font-serif font-bold text-slate-800">
              {state.currentBook.title}
            </h3>
            <p className="text-lg text-slate-600">
              by {state.currentBook.author}
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
        </div>
      </DialogContent>
    </Dialog>
  );
}
