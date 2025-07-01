"use client";

import { BlogSection } from "@/app/components/Blog";
import { Footer } from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import ReactLenis from "@studio-freight/react-lenis";

const BlogsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ReactLenis root>
        <div className="pt-30 pb-16">
          <div className="container mx-auto px-6">
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
          </div>

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
