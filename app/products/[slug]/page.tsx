import { reqUrl } from "@/app/config"
import Image from "next/image"

// const reqUrl = "http://stone.local/wp-json/wp/v2"

const Products = async ({
  params,
}: {
  params: {
    slug: string
  }
}) => {
  // console.log("params", params)
  const req = await fetch(
    `${reqUrl}/products?acf_format=standard&_fields=id,slug,title,acf&slug=${params.slug}`
  )
  const products = await req.json()
  const product = products[0]

  // console.log("products[0]", products[0])

  return (
    <div className="container mx-auto p-8 pb-16">
      <section>
        <h1 className="text-4xl text-center font-bold mb-8">
          {product.title.rendered}
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Image
              width={960}
              height={540}
              src={product.acf.large_image}
              className="bg-slate-500"
              alt={product.title.rendered}
            />
          </div>

          <div>
            <div className="text-sm font-semibold mb-1">Category</div>
            <div className="text-lg mb-8">{product.acf.category.name}</div>
            <div className="text-sm font-semibold mb-1">Summary</div>
            <div className="text-lg mb-8">{product.acf.summary}</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
