
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import { FullblogPosts } from "../../constant";
import PostCard from "@/app/components/ui/postCard";

export function BlogSection({
  title = "Blogs & Articles",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12 px-50">
          {FullblogPosts.map((post, key) => (
            <PostCard data={post} key={key}/>
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
