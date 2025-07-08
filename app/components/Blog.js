"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { briefblogPosts } from "../constant";



export function BlogSection({
  title = "Latest from the Blog",
  description = "Insights, stories, and thoughts on writing, creativity, and the literary world.",
  showViewAll = true,
  className = "",
}) {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">
            {title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {briefblogPosts.map((post,key) => (
          //  <Link key={post.slug} 
          //  href={`/blog-posts/${post.slug}`}
          //  >
           <Card key={key}
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <CardHeader className="pb-2">
                <div className="flex items-center space-x-4 text-sm text-slate-500 mb-2">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <CardTitle className="text-xl font-serif group-hover:text-amber-600 transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-slate-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Button
                  variant="ghost"
                  className="p-0 h-auto font-medium text-amber-600 hover:text-amber-700 group/btn"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          //  </Link>

          ))}
        </div>

        {showViewAll && (
          <div className="text-center">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
              <Link href="/blogs">View All Blog Posts</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
