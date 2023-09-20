import BlogPost from "@/components/BlogPost"
import { reqUrl } from "../config"

const BlogIndex = async () => {
  const req = await fetch(`${reqUrl}/posts?&_fields=id,title,slug`)
  const blogPosts = await req.json()
  const post = blogPosts[0]

  return (
    <div className="container mx-auto p-8">
      <section>
        <h1 className="text-4xl text-center mb-8">Blog</h1>

        <div className="max-w-2xl mx-auto">
          {blogPosts.map((post: any) => (
            <BlogPost
              title={post.title.rendered}
              author={post.author}
              slug={post.slug}
              className="mb-4"
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default BlogIndex
