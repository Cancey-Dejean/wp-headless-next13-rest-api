import Image from "next/image"
import Link from "next/link"
import React from "react"

type Props = {
  title: string
  author?: string
  slug?: string
  excerpt?: string
  featuredImage?: string
}

const BlogCard = ({
  title,
  author,
  slug,
  excerpt,
  featuredImage = "",
}: Props) => {
  return (
    <div className="flex-1">
      <Link href={`/blog/${slug}`} className="block mb-6">
        <Image
          src={featuredImage}
          width={330}
          height={200}
          alt={title}
          className="w-full h-[200px] object-cover"
        />
      </Link>

      <Link
        href={`/blog/${slug}`}
        className="text-lg text-teal-800 font-semibold block mb-6"
      >
        {title}
      </Link>

      <div
        className="prose prose-slate "
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />

      <p>{author}</p>
    </div>
  )
}

export default BlogCard
