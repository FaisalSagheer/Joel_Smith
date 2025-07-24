import { PenTool } from 'lucide-react'
import React from 'react'

function Teaser() {
  return (
    <div>
      <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-serif text-slate-800 mb-6">
                What's Next?
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Margaret is already at work on her second novel, another tale of
                family secrets set in the mountains of Vermont. Follow her
                journey as she uncovers new stories and brings them to life.
              </p>
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 inline-block">
                <PenTool className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <p className="text-slate-700 font-medium">
                  Currently writing her second novel
                </p>
              </div>
            </div>
          </div>
        </section> 
    </div>
  )
}

export default Teaser
