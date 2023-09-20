import { reqUrl } from "@/app/config"

const BlogDetails = async ({
  params,
}: {
  params: {
    slug: string
  }
}) => {
  const req = await fetch(
    `${reqUrl}/posts?&_fields=slug,title,content&slug=${params.slug}`
  )

  const pages = await req.json()
  const page = pages[0]

  return (
    <div className="container mx-auto p-8 pb-16">
      <section>
        <h1 className="text-4xl text-center mb-8">{page.title.rendered}</h1>

        <div
          className="prose prose-slate mx-auto max-w-2xl"
          dangerouslySetInnerHTML={{ __html: page.content.rendered }}
        />
      </section>
    </div>
  )
}

export default BlogDetails
