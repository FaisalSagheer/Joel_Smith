"use client";

import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

function AboutBook() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Book Cover */}
            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-80 h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="p-8 h-full flex flex-col justify-between text-white">
                    <div>
                      <h3 className="text-2xl font-serif mb-4">
                        Some Observations and Opinions
                      </h3>
                      <div className="w-16 h-px bg-amber-400 mx-auto mb-4"></div>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-serif mb-2">
                        Joel Aaron Smith, M.F.A., Ph.D.
                      </p>
                      <p className="text-sm text-slate-300">A Novel</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Book Details */}
            <div className="space-y-6">
              <h2 className="text-4xl font-serif text-slate-800 mb-6">
                About the Book
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Some Observations and Opinions is not your average collection of
                essays or memoir. It is an exploration of the human condition by
                an 83-year-old man who has seen decades of change, progress,
                regression, beauty, absurdity, and occasional grace.{" "}
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                With his feet planted firmly on the deck of his self-built home
                in the rural Florida woods, Joel Aaron Smith reflects on
                everything from the nature of God to the state of modern
                America, from abstract painting to the personalities of cats and
                dogs.
              </p>

              <Card className="bg-white shadow-lg border-l-4 border-amber-400">
                <CardContent className="p-6">
                  <blockquote className="text-lg italic text-slate-700">
                    "A masterfully crafted debut that will stay with you long
                    after the final page. Thorne has given us a story that's
                    both intimate and universal."
                  </blockquote>
                  <cite className="block mt-3 text-sm text-slate-500">
                    — Publishers Weekly
                  </cite>
                </CardContent>
              </Card>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-end">
                {/* <Button className="bg-slate-800 hover:bg-slate-900 text-white">
                  Buy on Amazon
                </Button>
                <Button
                  variant="outline"
                  className="border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white"
                >
                  Barnes & Noble
                </Button>
                <Button
                  variant="outline"
                  className="border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white"
                >
                  Local Bookstore
                </Button> */}
                <Button
                  variant="outline"
                  className="border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white"
                >
                  <Link href="/pages/about-book">
                  Learn More
                  </Link>
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
