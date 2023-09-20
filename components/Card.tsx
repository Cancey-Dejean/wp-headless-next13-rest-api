import Image from "next/image"
import Link from "next/link"

const Card = ({
  title,
  subtitle,
  btnLabel,
  href,
  thumbnail,
}: {
  title: string
  subtitle: string
  btnLabel: string
  href: string
  thumbnail: string
}) => {
  return (
    <div className="text-center">
      <Link href={href}>
        <Image
          src={thumbnail}
          className="block mx-auto mb-4 rounded-lg"
          width={600}
          height={400}
          alt="Card Thumbnail"
        />
      </Link>
      <div className="font-semibold text-center text-xl mb-1">{title}</div>
      <div className="text-md text-center mb-4">{subtitle}</div>
      <Link
        href={href}
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {btnLabel}
      </Link>
    </div>
  )
}

export default Card
