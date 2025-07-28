"use client";
import { Footer } from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
// import { useBook } from "@/app/contexts/BookContext";
import ReactLenis from "@studio-freight/react-lenis";
import Link from "next/link";
import { useEffect, useRef } from "react";

const AboutBook = () => {
  // const { openBookPopup } = useBook();
    const observerRef = useRef(null);
  
    useEffect(() => {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-fade-in");
              entry.target.classList.remove("opacity-0", "translate-y-8");
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        }
      );
  
      
      const fadeElements = document.querySelectorAll(".fade-in-on-scroll");
      fadeElements.forEach((el) => {
        el.classList.add(
          "opacity-0",
          "translate-y-8",
          "transition-all",
          "duration-700",
          "ease-out"
        );
        observerRef.current.observe(el);
      });
  
      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ReactLenis root>
        <div>
          {/* Hero Section */}
          <section className="fade-in-on-scroll py-38 bg-gradient-to-br from-slate-50 to-white">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Book Cover */}
                  <div className="text-center lg:text-left">
                    <div className="relative inline-block">
                      <div className="w-80 h-96 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300">
                       <img
                      src="/assets/Joel-Cover.png"
                      alt="Whispers in the Attic Book Cover"
                      className="w-full h-full rounded-lg object-cover"
                    />
                        {/* <div className="p-8 h-full flex flex-col justify-between text-white">
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
                            <p className="text-sm text-slate-300">
                              A Observation
                            </p>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>

                  {/* Book Info */}
                  <div className="space-y-6">
                    <h1 className="text-5xl font-serif font-bold text-slate-800 mb-6">
                      Some Observations and Opinions
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                      Some Observations and Opinions is not your average
                      collection of essays or memoir.{" "}
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
                      // onClick={openBookPopup}
                    >
                      <Link href="https://www.amazon.com/OBSERVATIONS-OPINIONS-Aaron-Smith-PH-D-ebook/dp/B0CYVWJ1GQ/ref=sr_1_2?crid=16BWXOJY7NG4S&dib=eyJ2IjoiMSJ9.0FQ3-SxWlLSERrf0UCMTluDMTievvJbXTpzXAw80Q6rGjHj071QN20LucGBJIEps.unJpQiBAvcXzDnhimjaGeCAHvH5mOraBaJRA4141wug&dib_tag=se&keywords=Joel+Aaron+Smith&qid=1752593896&s=digital-text&sprefix=joel+aaron+smith+%2Cdigital-text%2C213&sr=1-2">
                      Get the Book Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Synopsis */}
          <section className="fade-in-on-scroll py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold text-slate-800 mb-8">
                  Synopsis
                </h2>
                <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
                  <p>
                    Some Observations and Opinions is not your average
                    collection of essays or memoir. It is an exploration of the
                    human condition by an 83-year-old man who has seen decades
                    of change, progress, regression, beauty, absurdity, and
                    occasional grace. With his feet planted firmly on the deck
                    of his self-built home in the rural Florida woods, Joel
                    Aaron Smith reflects on everything from the nature of God to
                    the state of modern America, from abstract painting to the
                    personalities of cats and dogs.
                  </p>
                  <p>
                    His writing flows freely, not bound by chapters or
                    constraints, but by what he sees, feels, and remembers. The
                    result is a deeply human, often humorous, always
                    thought-provoking journey into one man's mind and heart.
                  </p>
                  {/* <p>
                  Set against the backdrop of small-town New England,{" "}
                  <em>Whispers in the Attic</em> explores the weight of family
                  legacy, the courage required to face uncomfortable truths, and
                  the healing power of forgiveness. It's a story about the
                  secrets we keep, the lies we tell ourselves, and the strength
                  we find when we finally let the light in.
                </p> */}
                </div>
              </div>
              <div className="max-w-4xl mx-auto py-12">
                <h2 className="text-3xl font-serif font-bold text-slate-800 mb-8">
                  For Whom This Book Was Written
                </h2>
                <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
                  <p>
                    This book speaks to readers who think deeply, question
                    freely, and appreciate honesty even when it stings. It’s for
                    artists, spiritual seekers, political independents, and
                    anyone who prefers conversation over condemnation. Whether
                    you're 25 or 85, if you’ve ever sat alone with your thoughts
                    and wished someone else understood the swirl of complexity
                    you carry, Joel Smith may just be your companion through the
                    pages.
                  </p>
                </div>
              </div>
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold text-slate-800 mb-8">
                  Excerpt
                </h2>
                <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
                  <p>
                    “So what do we have? An elderly man sitting on the deck of
                    his house in the woods somewhere in northern Florida. He
                    says he is not infrequently under the influence of
                    marijuana... He believes his thought processes are expanded
                    with Gd implicit (and explicit) in what’s before his eyes...
                    He writes that in the quiet, he is inclined to realize that
                    there’s something 'out there'... but still, he is
                    uncertain.”
                  </p>
                </div>
              </div>
              <div className="max-w-4xl mx-auto py-12">
                <h2 className="text-3xl font-serif font-bold text-slate-800 mb-8">
                  Why This Book Deserves Your Time
                </h2>
                <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
                  <p>
                    In a world driven by trends, echo chambers, and superficial
                    content, Some Observations and Opinions offers something
                    rare: sincerity. Joel does not try to impress, persuade, or
                    perform. He simply thinks aloud. And in doing so, he gives
                    permission to the reader to do the same. His reflections
                    might make you laugh, nod, pause, or even disagree, but they
                    will always make you feel. And in an increasingly
                    desensitized world, feeling something true might just be
                    enough reason to read.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Reviews */}
          <section className="fade-in-on-scroll py-16 bg-slate-50">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-serif font-bold text-slate-800 mb-12 text-center">
                  What Readers Are Saying
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <Card className="bg-white shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-amber-400 text-xl">
                            ★
                          </span>
                        ))}
                      </div>
                      <blockquote className="text-slate-700 mb-4">
                        "A masterfully crafted debut that will stay with you
                        long after the final page. Thorne has given us a story
                        that's both intimate and universal."
                      </blockquote>
                      <cite className="text-sm text-slate-500 font-medium">
                        — Publishers Weekly
                      </cite>
                    </CardContent>
                  </Card>

                  <Card className="bg-white shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-amber-400 text-xl">
                            ★
                          </span>
                        ))}
                      </div>
                      <blockquote className="text-slate-700 mb-4">
                        "Whispers in the Attic is a beautiful exploration of
                        family, memory, and the stories that shape us. I
                        couldn't put it down."
                      </blockquote>
                      <cite className="text-sm text-slate-500 font-medium">
                        — BookList Review
                      </cite>
                    </CardContent>
                  </Card>

                  <Card className="bg-white shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex mb-4">
                        {[...Array(4)].map((_, i) => (
                          <span key={i} className="text-amber-400 text-xl">
                            ★
                          </span>
                        ))}
                        <span className="text-gray-300 text-xl">★</span>
                      </div>
                      <blockquote className="text-slate-700 mb-4">
                        "Margaret Thorne writes with such grace and insight.
                        This novel will resonate with anyone who has ever
                        wondered about the secrets in their own family tree."
                      </blockquote>
                      <cite className="text-sm text-slate-500 font-medium">
                        — Library Journal
                      </cite>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Book Details */}
          <section className="fade-in-on-scroll py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold text-slate-800 mb-8">
                  Book Details
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="font-medium text-slate-700">
                        Publication Date
                      </span>
                      <span className="text-slate-600"> March 21, 2024</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="font-medium text-slate-700">Pages</span>
                      <span className="text-slate-600">256</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="font-medium text-slate-700">
                        Publisher
                      </span>
                      <span className="text-slate-600">Millbrook Press</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="font-medium text-slate-700">
                        Language
                      </span>
                      <span className="text-slate-600">English</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="font-medium text-slate-700">
                        ASIN 
                      </span>
                      <span className="text-slate-600">B0CYVWJ1GQ</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="font-medium text-slate-700">Format</span>
                      <span className="text-slate-600">
                        Hardcover, Paperback, eBook
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="font-medium text-slate-700">Genre</span>
                      <span className="text-slate-600">Observations</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="font-medium text-slate-700">Price</span>
                      <span className="text-slate-600">$15.99</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          {/* <section className="fade-in-on-scroll py-16 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
            <div className="container mx-auto px-6 text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-serif font-bold mb-6">
                  Ready to Discover the Secrets?
                </h2>
                <p className="text-xl text-slate-300 mb-8">
                  Join thousands of readers who have been captivated by Emma's
                  journey of discovery.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                      size="lg"
                      className="bg-amber-600 hover:bg-amber-700 text-white px-8"
                      // onClick={openBookPopup}
                    >
                      <Link href="https://www.amazon.com/OBSERVATIONS-OPINIONS-Aaron-Smith-PH-D-ebook/dp/B0CYVWJ1GQ/ref=sr_1_2?crid=16BWXOJY7NG4S&dib=eyJ2IjoiMSJ9.0FQ3-SxWlLSERrf0UCMTluDMTievvJbXTpzXAw80Q6rGjHj071QN20LucGBJIEps.unJpQiBAvcXzDnhimjaGeCAHvH5mOraBaJRA4141wug&dib_tag=se&keywords=Joel+Aaron+Smith&qid=1752593896&s=digital-text&sprefix=joel+aaron+smith+%2Cdigital-text%2C213&sr=1-2">
                      Get Your Copy Now
                      </Link>
                    </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-slate-800 px-8"
                  >
                    Read Sample Chapter
                  </Button>
                </div>
              </div>
            </div>
          </section> */}
          <Footer/>
        </div>
      </ReactLenis>
    </div>
  );
};

export default AboutBook;
