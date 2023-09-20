import Card from "@/components/Card"
import { reqUrl } from "../config"
import exp from "constants"

// const reqUrl =
//   "http://stone.local/wp-json/wp/v2/products?acf_format=standard&_fields=id,slug,title,acf"

const Products = async ({
  params,
}: {
  params: {
    slug: string
  }
}) => {
  const req = await fetch(
    `${reqUrl}/products?acf_format=standard&_fields=id,slug,title,acf&slug=${params.slug}`
  )
  const products = await req.json()
  const product = products[0]
  // console.log("products", products)

  return (
    <div className="container mx-auto p-8 pb-16">
      <section>
        <h1 className="text-4xl text-center mb-8">Products</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product: any) => (
            <Card
              key={product.id}
              title={product.title.rendered}
              thumbnail={product.acf.thumbnail}
              subtitle={product.acf.category.name}
              btnLabel="Button 1"
              href={`/products/${product.slug}`}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export async function generateStaticParams() {
  const req = await fetch(`${reqUrl}/products?_fields=slug`)
  const products = await req.json()

  return products.map((product: any) => ({
    slug: product.slug,
  }))
}

export default Products
