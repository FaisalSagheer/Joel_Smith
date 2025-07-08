'use client';

import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import ReactLenis from "@studio-freight/react-lenis";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <div>
        <ReactLenis root>
        <Contact />
        </ReactLenis>
      </div>
      <Footer/>
    </div>
  );
};

export default ContactPage;