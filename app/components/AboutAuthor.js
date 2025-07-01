"use client";
import {
  Award,
  BookOpen,
  Coffee,
  Heart,
  PenTool,
  MapPin,
  PersonStanding,
  Square,
  SquareUserRound,
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export function AboutAuthor() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-amber-50 via-orange-50 to-slate-100 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-slate-300 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Author Photo with Creative Frame */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block group">
                {/* Decorative rings */}
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-slate-200 to-slate-300 rounded-full opacity-40"></div>

                <div className="relative w-80 h-80 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full mx-auto shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face"
                    alt="Joel Smith, Author"
                    className="w-full h-full object-cover"
                  />

                  {/* Floating icons */}
                  <div className="absolute -top-2 -right-2 bg-amber-500 text-white p-3 rounded-full shadow-lg animate-bounce">
                    <PenTool className="w-6 h-6" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 bg-orange-500 text-white p-3 rounded-full shadow-lg animate-pulse">
                    <BookOpen className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>

            {/* About Content with Creative Typography */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl font-serif text-slate-800 leading-tight">
                  Meet
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                    Joel Smith
                  </span>
                </h1>
                <div className="flex items-center space-x-2 text-slate-600">
                  <MapPin className="w-5 h-5" />
                  <span className="text-lg">Vermont, USA</span>
                </div>
              </div>

              <p className="text-xl text-slate-700 leading-relaxed font-light">
                Joel Aaron Smith holds both an M.F.A. and a Ph.D., but he
                regards titles with skepticism. Born in Chicago and shaped by
                liberal arts, military service, abstract art, teaching, and
                relentless introspection, Joel now lives in the woods of
                Florida.{" "}
              </p>

              <div className="flex flex-wrap gap-4 justify-end">
                {/* <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                      <Coffee className="w-5 h-5 text-amber-600" />
                      <span className="text-slate-700">Coffee Enthusiast</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                      <Heart className="w-5 h-5 text-red-500" />
                      <span className="text-slate-700">Cat Mom</span>
                    </div> */}
                <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
                  <Link href="/pages/about-author">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
