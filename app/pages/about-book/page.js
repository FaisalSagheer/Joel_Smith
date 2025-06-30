
'use client'
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { useBook } from "@/app/contexts/BookContext";

const AboutBook = () => {
  const { openBookPopup } = useBook();
  return (
    
    <div className="min-h-screen bg-white">
      <div>
        {/* Hero Section */}
        <section className="py-36 bg-gradient-to-br from-slate-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Book Cover */}
                <div className="text-center lg:text-left">
                  <div className="relative inline-block">
                    <div className="w-80 h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300">
                      <div className="p-8 h-full flex flex-col justify-between text-white">
                        <div>
                          <h3 className="text-2xl font-serif mb-4">Some Observations and Opinions</h3>
                          <div className="w-16 h-px bg-amber-400 mx-auto lg:mx-0 mb-4"></div>
                        </div>
                        <div className="text-center lg:text-left">
                          <p className="text-lg font-serif mb-2">Joel Smith</p>
                          <p className="text-sm text-slate-300">A Novel</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Book Info */}
                <div className="space-y-6">
                  <h1 className="text-5xl font-serif font-bold text-slate-800 mb-6">
                    Some Observations and Opinions
                  </h1>
                  <p className="text-xl text-slate-600 leading-relaxed">
                    A haunting tale of family secrets, inherited mysteries, and the power of truth to heal old wounds.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">Fiction</span>
                    <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">Family Drama</span>
                    <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">Mystery</span>
                  </div>
                  <Button 
                    size="lg" 
                    className="bg-amber-600 hover:bg-amber-700 text-white px-8"
                    onClick={openBookPopup}
                  >
                    Get the Book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Synopsis */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-slate-800 mb-8">Synopsis</h2>
              <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
                <p>
                  When Emma inherits her grandmother's Victorian home in the quiet town of Millbrook, she expects to find nothing more than dusty furniture and faded photographs. Instead, she discovers a collection of letters hidden in the attic that reveal a family secret spanning three generations.
                </p>
                <p>
                  The letters tell the story of her great-grandmother Rose, who made a choice during World War II that would echo through the decades. As Emma delves deeper into her family's past, she uncovers a web of love, betrayal, and sacrifice that challenges everything she thought she knew about the women who came before her.
                </p>
                <p>
                  Set against the backdrop of small-town New England, <em>Whispers in the Attic</em> explores the weight of family legacy, the courage required to face uncomfortable truths, and the healing power of forgiveness. It's a story about the secrets we keep, the lies we tell ourselves, and the strength we find when we finally let the light in.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-slate-800 mb-12 text-center">What Readers Are Saying</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="bg-white shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-amber-400 text-xl">★</span>
                      ))}
                    </div>
                    <blockquote className="text-slate-700 mb-4">
                      "A masterfully crafted debut that will stay with you long after the final page. Thorne has given us a story that's both intimate and universal."
                    </blockquote>
                    <cite className="text-sm text-slate-500 font-medium">— Publishers Weekly</cite>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-amber-400 text-xl">★</span>
                      ))}
                    </div>
                    <blockquote className="text-slate-700 mb-4">
                      "Whispers in the Attic is a beautiful exploration of family, memory, and the stories that shape us. I couldn't put it down."
                    </blockquote>
                    <cite className="text-sm text-slate-500 font-medium">— BookList Review</cite>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(4)].map((_, i) => (
                        <span key={i} className="text-amber-400 text-xl">★</span>
                      ))}
                      <span className="text-gray-300 text-xl">★</span>
                    </div>
                    <blockquote className="text-slate-700 mb-4">
                      "Margaret Thorne writes with such grace and insight. This novel will resonate with anyone who has ever wondered about the secrets in their own family tree."
                    </blockquote>
                    <cite className="text-sm text-slate-500 font-medium">— Library Journal</cite>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Book Details */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-slate-800 mb-8">Book Details</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="font-medium text-slate-700">Publication Date</span>
                    <span className="text-slate-600">March 2024</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="font-medium text-slate-700">Pages</span>
                    <span className="text-slate-600">312</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="font-medium text-slate-700">Publisher</span>
                    <span className="text-slate-600">Millbrook Press</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="font-medium text-slate-700">Language</span>
                    <span className="text-slate-600">English</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="font-medium text-slate-700">ISBN-13</span>
                    <span className="text-slate-600">978-0123456789</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="font-medium text-slate-700">Format</span>
                    <span className="text-slate-600">Hardcover, Paperback, eBook</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="font-medium text-slate-700">Genre</span>
                    <span className="text-slate-600">Literary Fiction</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="font-medium text-slate-700">Price</span>
                    <span className="text-slate-600">$24.99</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-serif font-bold mb-6">Ready to Discover the Secrets?</h2>
              <p className="text-xl text-slate-300 mb-8">
                Join thousands of readers who have been captivated by Emma's journey of discovery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8"
                  onClick={openBookPopup}
                >
                  Get Your Copy Today
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-slate-800 px-8"
                >
                  Read Sample Chapter
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutBook;