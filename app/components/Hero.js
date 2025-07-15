"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useBook } from "../contexts/BookContext";
import { Button } from "./ui/button";
import { BookOpen, Quote, Sparkles, Star } from "lucide-react";

export default function Hero() {

  const { openBookPopup } = useBook();
   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
       <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Sparkles */}
        <div className="absolute top-20 left-20 animate-bounce delay-100">
          <Sparkles className="w-6 h-6 text-amber-400/30" />
        </div>
        <div className="absolute top-40 right-32 animate-bounce delay-300">
          <Star className="w-4 h-4 text-amber-300/40" />
        </div>
        <div className="absolute bottom-40 left-1/4 animate-bounce delay-500">
          <BookOpen className="w-5 h-5 text-amber-400/25" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-bounce delay-700">
          <Quote className="w-4 h-4 text-amber-300/30" />
        </div>
        
        {/* Dynamic gradient orbs that follow mouse */}
        <div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-amber-400/10 to-orange-500/10 blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        ></div>
        <div 
          className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-gradient-to-l from-purple-500/10 to-blue-500/10 blur-3xl transition-transform duration-1500 ease-out"
          style={{
            transform: `translate(${-mousePosition.x * 0.015}px, ${mousePosition.y * 0.01}px)`
          }}
        ></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-white/10 rounded-full animate-spin slow-spin"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border border-white/15 rounded-full rotate-45"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/10 rounded-full animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Enhanced Text Content */}
            <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {/* Animated badge */}
              <div className="inline-flex items-center gap-2 bg-amber-400/10 backdrop-blur-sm border border-amber-400/20 rounded-full px-6 py-2 mb-8 animate-fade-in">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-amber-300 text-sm font-medium">New York Times Bestselling Author</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
                <span className="inline-block animate-fade-in">Joel</span>{' '}
                <span className="text-amber-400 inline-block animate-fade-in delay-200 hover:scale-105 transition-transform duration-300 cursor-default">
                  Smith
                </span>
              </h1>
              
              <div className="relative mb-8">
                <p className="text-xl md:text-2xl text-slate-300 font-light animate-fade-in delay-400">
                  Author of the acclaimed Observations
                </p>
                <div className="absolute -right-4 -top-2 opacity-20">
                  <Quote className="w-12 h-12 text-amber-400" />
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-serif italic text-amber-400 mb-12 animate-fade-in delay-600 hover:text-amber-300 transition-colors duration-300">
                "Some Observations and Opinions"
              </h2>
              
              <div className="relative">
                <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in delay-800">
                  Some Observations and Opinions is not your average collection of essays or memoir. It is an exploration of the human condition by an 83-year-old man who has seen decades of change, progress, regression, beauty, absurdity, and occasional grace.
                  {/* <span className="text-amber-300 font-medium"> Experience a story that will stay with you long after the final page.</span> */}
                </p>
                <div className="absolute -left-6 top-0 opacity-30">
                  <div className="w-1 h-full bg-gradient-to-b from-amber-400 to-transparent"></div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in delay-1000">
                <Button 
                  size="lg" 
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg font-semibold shadow-xl shadow-amber-600/20 hover:shadow-2xl hover:shadow-amber-600/30 hover:scale-105 transition-all duration-300 group"
                  // onClick={openBookPopup}
                >
                  <Link href="https://www.amazon.com/OBSERVATIONS-OPINIONS-Aaron-Smith-PH-D-ebook/dp/B0CYVWJ1GQ/ref=sr_1_2?crid=16BWXOJY7NG4S&dib=eyJ2IjoiMSJ9.0FQ3-SxWlLSERrf0UCMTluDMTievvJbXTpzXAw80Q6rGjHj071QN20LucGBJIEps.unJpQiBAvcXzDnhimjaGeCAHvH5mOraBaJRA4141wug&dib_tag=se&keywords=Joel+Aaron+Smith&qid=1752593896&s=digital-text&sprefix=joel+aaron+smith+%2Cdigital-text%2C213&sr=1-2">
                  <span>Get the Book</span>
                  </Link>
                  <Sparkles className="w-4 h-4 ml-2 group-hover:animate-spin" />
                </Button>
                <Link href="/about-book">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-amber-400/50 text-amber-300 hover:bg-amber-400/10 hover:border-amber-400 hover:text-amber-200 px-8 py-3 text-lg backdrop-blur-sm hover:scale-105 transition-all duration-300 w-full"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Enhanced Book Image */}
            <div className={`flex justify-center lg:justify-end transition-all duration-1200 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="relative group">
                {/* Main book container with enhanced effects */}
                <div className="relative">
                  <div className="w-72 h-96 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-105 group-hover:shadow-amber-400/20 group-hover:shadow-2xl">
                    <img 
                      src="/assets/Joel-Cover.png" 
                      alt="Whispers in the Attic Book Cover" 
                      className="w-full h-full rounded-lg object-cover"
                    />
                    
                    {/* Overlay with book details on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="text-white">
                        <h3 className="font-serif text-xl mb-2">Some Observations and Opinions</h3>
                        <p className="text-amber-300 text-sm">Available in hardcover, paperback, and digital</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Multiple glow effects */}
                  <div className="absolute inset-0 bg-amber-400/20 rounded-lg blur-xl -z-10 transform scale-110 animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-orange-400/10 rounded-lg blur-2xl -z-20 transform scale-125"></div>
                </div>
                
                {/* Floating awards/badges around the book */}
                <div className="absolute -top-4 -right-4 bg-amber-400 text-slate-900 rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm shadow-lg animate-bounce delay-1000">
                  <div className="text-center">
                    <Star className="w-4 h-4 mx-auto mb-1" />
                    <span className="text-xs">Award</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-slate-800 text-amber-400 rounded-full w-14 h-14 flex items-center justify-center font-bold text-xs shadow-lg border border-amber-400/30 animate-bounce delay-1200">
                  <div className="text-center">
                    <span className="block">#1</span>
                    <span className="text-xs">Best</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div> */}
    </section>
  );
}
