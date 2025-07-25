import React from "react";
import Website from "./website/page";
import { BookProvider } from "./contexts/BookContext";
import { Toaster as Sonner } from "./components/ui/sonner";
import { Toaster } from "./components/ui/toaster";

function Page() {
  return (
    <>
          <Sonner/>
          <Toaster />
          <Website />
    </>
  );
}

export default Page;
