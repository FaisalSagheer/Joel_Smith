"use client";
import { AboutAuthor } from "@/app/(pages)/about-author/AboutAuthor";
import Navbar from "@/app/components/Navbar";
import ReactLenis from "@studio-freight/react-lenis";
import React, { useEffect, useRef } from "react";
import Story from "./story";
import { BlogSection } from "../blogs/Blog";
import Quote from "./quote";
import { Footer } from "@/app/components/Footer";

function AboutAuthorPage() {
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
    <>
      <div>
        <Navbar />
        <ReactLenis root>
          <div className="fade-in-on-scroll">
            <AboutAuthor showLearnMore={false} showGetBook={true} />
          </div>
          <div className="fade-in-on-scroll">
            <Story />
          </div>
          {/* <Awards/> */}
          <div className="fade-in-on-scroll">
            <Quote />
          </div>
          <div className="fade-in-on-scroll">
            <BlogSection />
          </div>
        </ReactLenis>
        <Footer />
      </div>
    </>
  );
}

export default AboutAuthorPage;
