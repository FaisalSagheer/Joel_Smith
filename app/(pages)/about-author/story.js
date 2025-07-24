import React from 'react'
import { BookOpen, Heart, PenTool } from 'lucide-react'

function Story() {
  return (
    <div>
                <section className="fade-in-on-scroll py-26 bg-white">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-serif text-center text-slate-800 mb-16">
                  What You’ll Discover
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center group">
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="w-10 h-10 text-amber-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">
                      Aging, Solitude, and Wisdom
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Much of the book is grounded in the physical and emotional
                      space of Joel’s Florida home.
                    </p>
                  </div>

                  <div className="text-center group">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <PenTool className="w-10 h-10 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">
                      Politics and Personal Liberty
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Joel does not shy away from the chaos and polarization of
                      modern American politics.
                    </p>
                  </div>

                  <div className="text-center group">
                    <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Heart className="w-10 h-10 text-slate-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">
                      Art and Act of Creation
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Art, particularly modern and abstract painting, plays a
                      central role in Joel’s life and writing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

    </div>
  )
}

export default Story
