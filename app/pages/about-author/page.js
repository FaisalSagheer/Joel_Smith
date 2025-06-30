"use client";
import React from "react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { useBook } from "@/app/contexts/BookContext";
import Testimonials from "@/app/components/Testimonials";
import { NewsLetter } from "@/app/components/NewsLetter";

function AboutAuthor() {
  const { openBookPopup } = useBook();
  return (
    <div>
      <div className="min-h-screen bg-white">
        <div>
          {/* Hero Section */}
          <section className="py-36 bg-gradient-to-br from-slate-50 to-white">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Book Cover */}
                  <div className="text-center lg:text-left">
                    <div className="relative inline-block">
                      {/* <div className="w-80 h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300">
                        <div className="p-8 h-full flex flex-col justify-between text-white">
                          <div>
                            <h3 className="text-2xl font-serif mb-4">
                              Some Observations and Opinions
                            </h3>
                            <div className="w-16 h-px bg-amber-400 mx-auto lg:mx-0 mb-4"></div>
                          </div>
                          <div className="text-center lg:text-left">
                            <p className="text-lg font-serif mb-2">
                              Joel Smith
                            </p>
                            <p className="text-sm text-slate-300">A Novel</p>
                          </div>
                        </div>
                      </div> */}
                      <img src="/" alt="/" />
                    </div>
                  </div>

                  {/* Book Info */}
                  <div className="space-y-6">
                    <h1 className="text-5xl font-serif font-bold text-slate-800 mb-6">
                      Joel Smith
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                      A haunting tale of family secrets, inherited mysteries,
                      and the power of truth to heal old wounds.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                        Fiction
                      </span>
                      <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                        Family Drama
                      </span>
                      <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                        Mystery
                      </span>
                    </div>
                    <Button
                      size="lg"
                      className="bg-amber-600 hover:bg-amber-700 text-white px-8"
                      onClick={openBookPopup}
                    >
                      Get the Book Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Synopsis */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold text-slate-800 mb-8">
                  About The Author
                </h2>
                <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
                  <p>
                    When Emma inherits her grandmother's Victorian home in the
                    quiet town of Millbrook, she expects to find nothing more
                    than dusty furniture and faded photographs. Instead, she
                    discovers a collection of letters hidden in the attic that
                    reveal a family secret spanning three generations.
                  </p>
                  <p>
                    The letters tell the story of her great-grandmother Rose,
                    who made a choice during World War II that would echo
                    through the decades. As Emma delves deeper into her family's
                    past, she uncovers a web of love, betrayal, and sacrifice
                    that challenges everything she thought she knew about the
                    women who came before her.
                  </p>
                  <p>
                    Set against the backdrop of small-town New England,{" "}
                    <em>Whispers in the Attic</em> explores the weight of family
                    legacy, the courage required to face uncomfortable truths,
                    and the healing power of forgiveness. It's a story about the
                    secrets we keep, the lies we tell ourselves, and the
                    strength we find when we finally let the light in.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Reviews */}
          <Testimonials />
          <NewsLetter />
        </div>
      </div>
    </div>
  );
}

export default AboutAuthor;
