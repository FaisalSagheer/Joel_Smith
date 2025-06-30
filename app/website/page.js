"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Home from "../pages/home/page";
import AboutBook from "../pages/about-book/page";
import { BookProvider } from "../contexts/BookContext";
// import Contact from "../pages/contact/page";
// import Books from "../pages/books/page";
// import AudioBooks from "../pages/audiobooks/page";
// import TourPage from "../pages/tour/page";
// import Bio from "../pages/bio/page";
function Website() {
  const pathname = usePathname();
  const renderPageContent = () => {
    switch (pathname) {
      case "/contact":
        return <Contact />;
      case "/books":
        return <Books />;
      case "/contact":
        return <AudioBooks />;
      case "/tour":
        return <TourPage />;
      case "/about-book":
        return <AboutBook />;
      case "/":
      default:
        return <Home />;
    }
  };
  return (
    <>
      <main>
        {renderPageContent()}
      </main>
    </>
  );
}

export default Website;
