"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Home from "../pages/home/page";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import AboutBook from "../pages/about-book/page";
import AboutAuthor from "../pages/about-author/page";
import Shop from "../pages/shop/page";
import BlogsPage from "../pages/blogs/page";
import ContactPage from "../pages/contact/page";
import NotFound from "../pages/NotFound/page";
import ReactLenis from "@studio-freight/react-lenis";
function Website() {
  const pathname = usePathname();
  const renderPageContent = () => {
    switch (pathname) {
      case "/NotFound":
        return <NotFound />;
      case "/contact":
        return <ContactPage />;
      case "/blog":
        return <BlogsPage />;
      case "/shop":
        return <Shop />;
      case "/about-author":
        return <AboutAuthor />;
      case "/about-book":
        return <AboutBook />;
      case "/":
      default:
        return <Home />;
    }
  };
  return (
    <>
      <ReactLenis root>
      <main>{renderPageContent()}</main>
      </ReactLenis>
      <Footer />
    </>
  );
}

export default Website;
