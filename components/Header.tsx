import { menuUrl } from "@/app/config"
import Link from "next/link"

export async function Header() {
  const req = await fetch(`${menuUrl}/primary-menu?fields=id,items?`)
  const menu = await req.json()
  console.log("menu", menu)

  return (
    <header className="py-4">
      <div className="container mx-auto flex items-center justify-between gap-10">
        <Link href="/">Logo</Link>

        <nav>
          <ul className="flex gap-3">
            {menu.items.map((item) => (
              <li key={item.ID}>
                <a href={`/${item.slug}`}>{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <button
            type="button"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            CTA
          </button>
        </div>
      </div>
    </header>
  )
}
