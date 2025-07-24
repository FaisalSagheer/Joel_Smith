import React from 'react'

function Quote() {
  return (
    <div>
       <section className="fade-in-on-scroll py-20 bg-slate-800 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-amber-600 to-orange-600"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <blockquote className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-8">
                  "In a world driven by trends, echo chambers, and superficial
                  content, Some Observations and Opinions offers something rare:
                  sincerity. Joel does not try to impress, persuade, or
                  perform."
                </blockquote>
                <cite className="text-lg text-amber-300">— Joel Smith</cite>
              </div>
            </div>
          </section>
    </div>
  )
}

export default Quote
