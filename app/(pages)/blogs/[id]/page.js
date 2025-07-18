'use client'
// import { Footer } from "@/app/components/Footer";
// import Navbar from "@/app/components/Navbar";
// import Post from "@/app/components/ui/post";
// import { getPost } from "@/app/constant";

import Post from "@/app/components/ui/post";
import { FullblogPosts, getPost } from "@/app/constant";
import { useParams } from "next/navigation";

// export default async function BlogDetailsPage({ params }) {
//   const { blogdetails } = params;
//   const [post] = await Promise.all([
//     getPost(blogdetails)
//   ])
//   if (!post) {
//     return "Posts Not Found";
//   }
//   return (
//     <>
//       <Navbar />
//       <Post post={post} />
//       <Footer />
//     </>
//   );
// }

const BlogDetailsPage = () => {
 const Params = useParams();
 const id = Params.id;
//  const posts = getPost(id)
 return(
  <>
  {/* <h1>post={id}</h1> */}
  {/* {
    posts.map((post)=>
  )
} */}
      <Post post={id} />
</>
)
}
export default BlogDetailsPage;