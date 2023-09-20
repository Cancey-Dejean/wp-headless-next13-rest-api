import Link from "next/link"

const BlogPost = ({
  title,
  author,
  slug,
  className,
}: {
  title: string
  author: string
  slug: string
  className?: string
}) => {
  return (
    <div className={className}>
      <Link
        href={`/blog/${slug}`}
        className="text-lg text-teal-800 font-semibold mb-4"
      >
        {title}
      </Link>

      <p>{author}</p>
    </div>
  )
}

export default BlogPost
