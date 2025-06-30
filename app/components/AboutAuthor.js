'use client'

export function AboutAuthor() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Author Photo */}
            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-64 h-64 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full mx-auto shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face" 
                    alt="Margaret Thorne, Author" 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-serif text-slate-800 mb-6">About Joel</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Margaret Thorne spent fifteen years as a librarian in small New England towns before turning to writing full-time. Her love for old houses, family histories, and the stories that bind us together inspired her debut novel.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                When she's not writing, Margaret enjoys restoring antique furniture, tending to her garden, and exploring local historical societies. She currently lives in Vermont with her two cats and an ever-growing collection of vintage books.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                <em>Whispers in the Attic</em> is her first novel, but she's already at work on her second book, another tale of family secrets set in the mountains of Vermont.
              </p>
              
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Awards & Recognition</h3>
                <ul className="text-slate-600 space-y-2">
                  <li>• Finalist, New England Book Award 2024</li>
                  <li>• Winner, Vermont Literary Prize 2023</li>
                  <li>• Featured in "Best Debuts of the Year" - BookRiot</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}