"use client";
import { BookOpen, Menu, X, ShoppingCart } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { useBook } from "../contexts/BookContext";
import { navItems } from "../constant";
import { BookPopup } from "./BookPopup";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = usePathname();
  const { state, openBookPopup } = useBook();

  const isActive = (path) => location.pathname === path;

  const cartItemCount = state.cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <BookOpen className="w-8 h-8 text-amber-600" />
            <span className="text-xl font-serif font-bold text-slate-800">
              Joel Smith
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, key) => (
              <Link
                key={key}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-amber-600 ${
                  isActive(item.href) ? "text-amber-600" : "text-slate-600"
                }`}
              >
                {item.prop}
              </Link>
            ))}

            <Link href="/cart" className="relative">
              <Button
                variant="outline"
                size="icon"
                className="relative border-slate-300 hover:bg-amber-50"
              >
                <ShoppingCart className="w-4 h-4" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                    {cartItemCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-slate-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-slate-600" />
            ) : (
              <Menu className="w-6 h-6 text-slate-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="py-4 space-y-4">
            {navItems.map((item, key) => (
              <Link
                key={key}
                href={item.href}
                className={`block text-sm font-medium transition-colors hover:text-amber-600 py-2 ${
                  isActive(item.href) ? "text-amber-600" : "text-slate-600"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.prop}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <BookPopup/>
    </nav>
  );
}

export default Navbar;
