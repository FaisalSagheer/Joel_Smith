'use client'

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-serif mb-4">Joel Smith</h3>
          <p className="text-slate-300 mb-6">
            Author of "SOME OBSERVATIONS AND OPINIONS"
          </p>
          <div className="border-t border-slate-700 pt-6">
            <p className="text-sm text-slate-400">
              © 2024 Joel Smith. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}