import { Award, BookOpen } from 'lucide-react'
import React from 'react'

function Awards() {
  return (
    <div>
      <section className="fade-in-on-scroll py-20 bg-gradient-to-r from-slate-50 to-amber-50">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-serif text-slate-800 mb-4">
                  Recognition & Awards
                </h2>
                <p className="text-lg text-slate-600 mb-12">
                  Celebrating literary excellence and storytelling mastery
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      New England Book Award
                    </h3>
                    <p className="text-amber-600 font-medium mb-2">
                      Finalist 2024
                    </p>
                    <p className="text-slate-600 text-sm">
                      Recognized for outstanding literary contribution
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      Vermont Literary Prize
                    </h3>
                    <p className="text-emerald-600 font-medium mb-2">
                      Winner 2023
                    </p>
                    <p className="text-slate-600 text-sm">
                      Celebrating regional literary excellence
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      BookRiot Feature
                    </h3>
                    <p className="text-indigo-600 font-medium mb-2">
                      Best Debuts 2024
                    </p>
                    <p className="text-slate-600 text-sm">
                      Featured among year's top debuts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </div>
  )
}

export default Awards;
