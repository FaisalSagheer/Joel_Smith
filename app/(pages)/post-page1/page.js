"use client";
import { Footer } from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { briefblogPosts, FullblogPosts } from "@/app/constant";
import ReactLenis from "@studio-freight/react-lenis";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";
import React from "react";

function post() {
  const relatedPosts = briefblogPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 2);
  return (
    <>
      <Navbar />
      <ReactLenis root>
        <div className="pt-20 pb-16">
          <div className="container mx-auto px-16">
            <div className="mb-8">
              <Link href="/blogs">
                <Button
                  variant="ghost"
                  className="text-amber-600 hover:text-amber-700 p-0"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Button>
              </Link>
            </div>
            <article className="max-w-4xl mx-auto">
              {FullblogPosts.filter(
                (slugs) => slugs.slug === "art-of-character"
              ).map((post, key) => (
                <div
                  className="relative mb-8 rounded-lg overflow-hidden"
                  key={key}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 md:h-96 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  <header className="my-8">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-800 mb-4">
                      {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span className="font-medium">{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <p className="text-xl text-slate-600 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </header>
                  <div
                    className="prose prose-lg max-w-none mb-12"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                    style={{
                      color: "#475569",
                      lineHeight: "1.7",
                    }}
                  />
                </div>
              ))}
              <Card className="mb-12 bg-slate-50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-white font-serif text-2xl font-bold">
                      J
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-slate-800 mb-2">
                        Joel Smith
                      </h3>
                      <p className="text-slate-600">
                        Joel is a debut novelist with a passion for storytelling
                        and character development. His work explores themes of
                        human connection, resilience, and the power of stories
                        to transform lives.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
          {relatedPosts.length > 0 && (
            <section>
              <h2 className="text-2xl font-serif font-bold text-slate-800 mb-6">
                Related Posts
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={relatedPost.href}>
                    <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                      <div className="relative overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                            {relatedPost.category}
                          </span>
                        </div>
                      </div>

                      <CardHeader className="pb-2">
                        <div className="flex items-center space-x-4 text-sm text-slate-500 mb-2">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{relatedPost.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{relatedPost.readTime}</span>
                          </div>
                        </div>
                        <CardTitle className="text-lg font-serif group-hover:text-amber-600 transition-colors">
                          {relatedPost.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent>
                        <p className="text-slate-600 text-sm line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}
            </article>
          </div>
        </div>
      </ReactLenis>

      <Footer />
    </>
  );
}

export default post;
