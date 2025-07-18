"use client";

import { ArticlesContent} from "../constant";
import PostCard from "./ui/postCard";

export function Articles({
  title = "Articles",
  description = "Insights, stories, and thoughts on writing, creativity, and the literary world.",
  className = "",
}) {
  return (
    <section className={`${className}`}>
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
          {ArticlesContent.map((post, key) => (
            <PostCard posts={post} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
}
