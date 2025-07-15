"use client";
import { BlogSection } from "@/app/components/Blog";
import { Footer } from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { Button } from "@/app/components/ui/button";
import ReactLenis from "@studio-freight/react-lenis";
import { Award, BookOpen, Coffee, Heart, PenTool, MapPin } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

const AboutAuthor = () => {
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
    <div className="min-h-screen">
      <Navbar />
      <ReactLenis root>
        <div>
          <section className="fade-in-on-scroll relative py-36 bg-gradient-to-br from-amber-50 via-orange-50 to-slate-100 overflow-hidden">
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
                      regards titles with skepticism. Born in Chicago and shaped
                      by liberal arts, military service, abstract art, teaching,
                      and relentless introspection, Joel now lives in the woods
                      of Florida.There, he continues to write, paint, reflect,
                      and share his unique voice with the world, not for fame,
                      but for the simple act of honest communication.{" "}
                    </p>

                    <div className="flex flex-wrap gap-4">
                      {/* <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                        <Coffee className="w-5 h-5 text-amber-600" />
                        <span className="text-slate-700">
                          Coffee Enthusiast
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                        <Heart className="w-5 h-5 text-red-500" />
                        <span className="text-slate-700">Dog Dad</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                        <BookOpen className="w-5 h-5 text-blue-600" />
                        <span className="text-slate-700">Book Collector</span>
                      </div> */}
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
            </div>
          </section>

          {/* Story Section */}
          <section className="fade-in-on-scroll py-26 bg-white">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-serif text-center text-slate-800 mb-16">
                  What You’ll Discover
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center group">
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="w-10 h-10 text-amber-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">
                      Aging, Solitude, and Wisdom
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Much of the book is grounded in the physical and emotional
                      space of Joel’s Florida home.
                    </p>
                  </div>

                  <div className="text-center group">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <PenTool className="w-10 h-10 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">
                      Politics and Personal Liberty
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Joel does not shy away from the chaos and polarization of
                      modern American politics.
                    </p>
                  </div>

                  <div className="text-center group">
                    <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Heart className="w-10 h-10 text-slate-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">
                      Art and Act of Creation
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Art, particularly modern and abstract painting, plays a
                      central role in Joel’s life and writing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Awards Section with Creative Design */}
          {/* <section className="fade-in-on-scroll py-20 bg-gradient-to-r from-slate-50 to-amber-50">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-serif text-slate-800 mb-4">
                  Recognition & Awards
                </h2>
                <p className="text-lg text-slate-600 mb-12">
                  Celebrating literary excellence and storytelling mastery
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      New England Book Award
                    </h3>
                    <p className="text-amber-600 font-medium mb-2">
                      Finalist 2024
                    </p>
                    <p className="text-slate-600 text-sm">
                      Recognized for outstanding literary contribution
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      Vermont Literary Prize
                    </h3>
                    <p className="text-emerald-600 font-medium mb-2">
                      Winner 2023
                    </p>
                    <p className="text-slate-600 text-sm">
                      Celebrating regional literary excellence
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      BookRiot Feature
                    </h3>
                    <p className="text-indigo-600 font-medium mb-2">
                      Best Debuts 2024
                    </p>
                    <p className="text-slate-600 text-sm">
                      Featured among year's top debuts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          {/* Quote Section */}
          <section className="fade-in-on-scroll py-20 bg-slate-800 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-amber-600 to-orange-600"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <blockquote className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-8">
                  "In a world driven by trends, echo chambers, and superficial content, Some Observations and Opinions offers something rare: sincerity. Joel does not try to impress, persuade, or perform."
                </blockquote>
                <cite className="text-lg text-amber-300">— Joel Smith</cite>
              </div>
            </div>
          </section>

          {/* Next Book Teaser */}
          {/* <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-serif text-slate-800 mb-6">
                What's Next?
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Margaret is already at work on her second novel, another tale of
                family secrets set in the mountains of Vermont. Follow her
                journey as she uncovers new stories and brings them to life.
              </p>
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 inline-block">
                <PenTool className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <p className="text-slate-700 font-medium">
                  Currently writing her second novel
                </p>
              </div>
            </div>
          </div>
        </section> */}
        <div className="fade-in-on-scroll">
          <BlogSection />
        </div>
        </div>
      </ReactLenis>
      <Footer />
    </div>
  );
};

export default AboutAuthor;
