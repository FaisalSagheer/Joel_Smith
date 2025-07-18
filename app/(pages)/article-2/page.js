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
import Post from "@/app/components/ui/post";
import { ArticlesContent, ArticlesContentBrief, ArticlesContentDesc } from "@/app/constant";
import ReactLenis from "@studio-freight/react-lenis";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";
import React from "react";

function post() {
  const relatedPosts = ArticlesContent
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
              {ArticlesContent.filter(
                (slugs) => slugs.slug === "abstract-art-and-the-act-of-letting-go"
              ).map((post, key) =>
               <Post posts={post} key={key}/>
              )}
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
