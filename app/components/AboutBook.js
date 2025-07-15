"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { BookOpen, Sparkles, Star } from "lucide-react";

function AboutBook() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);

    const handleMouseMove = (e) => {
      const rect = e.currentTarget?.getBoundingClientRect() || {
        left: 0,
        top: 0,
        width: 1,
        height: 1,
      };
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };

    const section = document.querySelector(".book-showcase-section");
    section?.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearTimeout(timer);
      section?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="book-showcase-section relative py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 animate-bounce delay-100">
          <BookOpen className="w-8 h-8 text-slate-300/40" />
        </div>
        <div className="absolute bottom-32 right-32 animate-bounce delay-300">
          <Star className="w-6 h-6 text-amber-400/30" />
        </div>
        <div className="absolute top-1/2 left-1/4 animate-bounce delay-500">
          <Sparkles className="w-5 h-5 text-slate-400/30" />
        </div>

        {/* Interactive gradient orbs */}
        <div
          className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-amber-400/10 to-orange-500/10 blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
            top: "20%",
            right: "10%",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Enhanced Book Cover */}
            <div
              className={`text-center transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="relative inline-block group">
                {/* Main book with enhanced effects */}
                <div className="relative">
                  <div className="w-80 h-96 rounded-lg shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500 hover:scale-105 group-hover:shadow-amber-400/20 group-hover:shadow-3xl">
                    <img
                      src="/assets/Joel-Cover.png"
                      alt="Whispers in the Attic Book Cover"
                      className="w-full h-full rounded-lg object-cover"
                    />
                  </div>

                  {/* Enhanced glow effects */}
                  <div className="absolute inset-0 bg-amber-400/15 rounded-lg blur-xl -z-10 transform scale-110 animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-800/10 to-slate-900/10 rounded-lg blur-2xl -z-20 transform scale-125"></div>
                </div>

                {/* Floating elements around book */}
                <div className="absolute -top-6 -right-6 bg-amber-400 text-slate-900 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xs shadow-lg animate-bounce delay-700">
                  <Star className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Enhanced Book Details */}
            <div
              className={`space-y-6 transition-all duration-1200 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <div className="relative">
                <h2 className="text-4xl font-serif text-slate-800 mb-6 animate-fade-in delay-400">
                  About the Book
                </h2>
                <div className="absolute -left-4 top-0 w-1 h-16 bg-gradient-to-b from-amber-400 to-transparent opacity-60"></div>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed animate-fade-in delay-600 hover:text-slate-700 transition-colors duration-300">
                Some Observations and Opinions is not your average collection of
                essays or memoir. It is an exploration of the human condition by
                an 83-year-old man who has seen decades of change, progress,
                regression, beauty, absurdity, and occasional grace.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed animate-fade-in delay-800 hover:text-slate-700 transition-colors duration-300">
                With his feet planted firmly on the deck of his self-built home
                in the rural Florida woods,{" "}
                <em className="text-amber-700 font-medium">Joel Aaron Smith</em>{" "}
                reflects on everything from the nature of God to the state of
                modern America, from abstract painting to the personalities of
                cats and dogs.
              </p>

              <Card className="bg-white shadow-lg border-l-4 border-amber-400 animate-fade-in delay-1000 hover:shadow-xl hover:scale-105 transition-all duration-300 transform">
                <CardContent className="p-6 relative">
                  <div className="absolute top-2 right-2 opacity-20">
                    <Sparkles className="w-6 h-6 text-amber-400" />
                  </div>
                  <blockquote className="text-lg italic text-slate-700 relative">
                    "A masterfully crafted debut that will stay with you long
                    after the final page. Thorne has given us a story that's
                    both intimate and universal."
                  </blockquote>
                  <cite className="block mt-3 text-sm text-slate-500 font-medium">
                    — Publishers Weekly
                  </cite>
                </CardContent>
              </Card>

              <div className="flex flex-col justify-end sm:flex-row gap-4 pt-4 animate-fade-in delay-1200">
                <Button className="bg-slate-800 hover:bg-slate-900 text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group">
                  <Link href="https://www.amazon.com/OBSERVATIONS-OPINIONS-Aaron-Smith-PH-D-ebook/dp/B0CYVWJ1GQ/ref=sr_1_2?crid=16BWXOJY7NG4S&dib=eyJ2IjoiMSJ9.0FQ3-SxWlLSERrf0UCMTluDMTievvJbXTpzXAw80Q6rGjHj071QN20LucGBJIEps.unJpQiBAvcXzDnhimjaGeCAHvH5mOraBaJRA4141wug&dib_tag=se&keywords=Joel+Aaron+Smith&qid=1752593896&s=digital-text&sprefix=joel+aaron+smith+%2Cdigital-text%2C213&sr=1-2">Buy on Amazon</Link>
                  <Sparkles className="w-4 h-4 ml-2 group-hover:animate-spin" />
                </Button>
                {/* <Button variant="outline" className="border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white hover:scale-105 transition-all duration-300">
                  Barnes & Noble
                </Button>
                <Button variant="outline" className="border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white hover:scale-105 transition-all duration-300">
                  Local Bookstore
                </Button> */}
                <Button
                  variant="outline"
                  className="border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white hover:scale-105 transition-all duration-300"
                >
                  <Link href="/about-book">Read More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutBook;
