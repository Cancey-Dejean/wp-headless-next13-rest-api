import { reqUrl } from "../config"

const SamplePage = async ({
  params,
}: {
  params: {
    slug: string
  }
}) => {
  const req = await fetch(`${reqUrl}/pages?${params.slug}`)
  const data = await req.json()
  const acf = data[1].acf
  console.log(acf)

  return (
    <div className="container mx-auto p-8">
      <section>
        <h1 className="text-4xl text-center mb-8">{acf.heading}</h1>

        <div className="max-w-2xl mx-auto">
          {/* {blogPosts.map((post: any) => (
            <BlogPost
              title={post.title.rendered}
              author={post.author}
              slug={post.slug}
              className="mb-4"
            />
          ))} */}
        </div>
      </section>
    </div>
  )
}

export default SamplePage
