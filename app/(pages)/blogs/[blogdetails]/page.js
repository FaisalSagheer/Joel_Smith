import { FullblogPosts } from "@/app/constant";

const BlogDetailsPage = async({params})=>{
    const {blogdetails} = await params
    const post = await FullblogPosts(params.blogdetails)
    return <h1>{post}</h1>
}

export default BlogDetailsPage;