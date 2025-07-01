"use client";
import React, { useEffect, useRef } from "react";
import Hero from "@/app/components/Hero";
import LogoCloud from "@/app/components/LogoCloud";
import AboutBook from "@/app/components/AboutBook";
import { NewsLetter } from "@/app/components/NewsLetter";
import { AboutAuthor } from "@/app/components/AboutAuthor";
import Testimonials from "@/app/components/Testimonials";
import { BookPopup } from "@/app/components/BookPopup";
import { BlogSection } from "@/app/components/Blog";

function Home() {
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
    <>
      <Hero />
      <div className="fade-in-on-scroll">
        <AboutBook />
      </div>
      <div className="fade-in-on-scroll">
        <LogoCloud />
      </div>
      <div className="fade-in-on-scroll">
        <AboutAuthor />
      </div>
      <div className="fade-in-on-scroll">
        <Testimonials />
      </div>
      <div className="fade-in-on-scroll">
        <BlogSection />
      </div>
      <div className="fade-in-on-scroll">
        <NewsLetter />
      </div>
      <BookPopup />
    </>
  );
}

export default Home;
