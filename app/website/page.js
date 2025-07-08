"use client";

import React from "react";
import { usePathname } from "next/navigation";
import AboutBook from "../(pages)/about-book/page";
import AboutAuthor from "../(pages)/about-author/page";
import BlogsPage from "../(pages)/blogs/page";
import NotFound from "../not-found";
import ReactLenis from "@studio-freight/react-lenis";
import Shop from "../(pages)/shop/page";
import Home from "../(pages)/home/page";
import ContactPage from "../(pages)/contact/page";
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
    </>
  );
}

export default Website;
