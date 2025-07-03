"use client";

import { BlogSection } from "@/app/components/Blog";
import { Footer } from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import ReactLenis from "@studio-freight/react-lenis";
import { useEffect, useRef } from "react";

const BlogsPage = () => {
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
  
      // Observe all fade-in elements
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
        <div className="pt-30 pb-16 fade-in-on-scroll">
          {/* <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-4">
                Our Blog
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Welcome to Margaret Thorne's blog, where writing meets
                inspiration. Discover insights about the creative process,
                literary discussions, and behind-the-scenes glimpses into the
                world of storytelling.
              </p>
            </div>
          </div> */}

          <BlogSection
            title="All Blog Posts"
            showViewAll={false}
            className="bg-white"
          />
        </div>
      </ReactLenis>
      <Footer />
    </div>
  );
};

export default BlogsPage;
