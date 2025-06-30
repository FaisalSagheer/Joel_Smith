
'use client'
import React from 'react'
import { Card, CardContent } from './ui/card'

export default function Testimonials() {
  return (
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
  )
}
