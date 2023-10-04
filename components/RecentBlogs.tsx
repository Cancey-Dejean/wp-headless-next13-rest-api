import { reqUrl } from "@/app/config"
import Link from "next/link"
import BlogCard from "./BlogCard"

const RecentBlogs = async ({ className = "" }: { className?: string }) => {
  const req = await fetch(`${reqUrl}/posts?_embed`)
  const blogPosts = await req.json()

  console.log(blogPosts)

  return (
    <div className={`${className}`}>
      <div className="container mx-auto flex gap-10">
        {blogPosts.slice(0, 3).map((post: any) => (
          <BlogCard
            title={post.title.rendered}
            author={post._embedded.author[0].name}
            slug={post.slug}
            excerpt={post.excerpt.rendered}
            key={post.id}
            // featuredImage={post._embedded["wp:featuredmedia"][0].source_url}
          />
        ))}
      </div>
    </div>
  )
}

export default RecentBlogs
