"use client";

import React from "react";
import Link from "next/link";
import { useBook } from "../contexts/BookContext";
import { Button } from "./ui/button";

export default function Hero() {
  const { openBookPopup } = useBook();
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-0 lg:pt-0 md:pt-30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
                Joel <span className="text-amber-400">Smith</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light">
                Author of the acclaimed Observations
              </p>
              <h2 className="text-3xl md:text-4xl font-serif italic text-amber-400 mb-12">
                "Some Observations and Opinions"
              </h2>
              <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Some Observations and Opinions is not your average collection of
                essays or memoir. It is an exploration of the human condition by
                an 83-year-old man who has seen decades of change, progress,
                regression, beauty, absurdity, and occasional grace.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg"
                  onClick={openBookPopup}
                >
                  Get the Book
                </Button>
                <Link href="/about-book">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-slate-800 px-8 py-3 text-lg w-full"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Book Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-96 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=500&fit=crop"
                    alt="Whispers in the Attic Book Cover"
                    className="w-full h-full rounded-lg object-cover shadow-xl"
                  />
                </div>
                {/* Decorative glow effect */}
                <div className="absolute inset-0 bg-amber-400/20 rounded-lg blur-xl -z-10 transform scale-110"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
