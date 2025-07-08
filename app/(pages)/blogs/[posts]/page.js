

const Posts = async ({ params })=>{
  const { posts } = await params
  return <div>My Post: {posts}</div>
}
export default Posts;