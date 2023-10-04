import { fetchPageComponent, reqUrl } from "@/app/config"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const Hero = async () => {
  const componentPageSlug = "home"

  // const req = await fetch(
  //   `${reqUrl}/pages?&_fields=acf&slug=${componentPageSlug}&fields&acf_format=standard`
  // )

  // const pages = await req.json()
  // const page = pages[0].acf
  const page = await fetchPageComponent(reqUrl, componentPageSlug)

  // console.log(page)
  return (
    <div className="px-5 md:px-10">
      <div className="pt-16 md:pt-24 lg:pt-32">
        <div className="mx-auto w-full max-w-3xl mb-8 md:mb-12 lg:mb-16">
          <div className="text-center">
            <h1 className="font-bold mb-4 text-4xl md:text-6xl">
              {page.section_title}
            </h1>
            <div className="mx-auto max-w-[528px] mb-5 md:mb-6 lg:mb-8">
              <p className="text-xl text-[#636262]">{page.sub_heading}</p>
            </div>
            <div className="flex items-center justify-center">
              <Link
                href={page.button_featured.url}
                className="flex-row flex max-w-full grid-cols-2 items-center justify-center bg-[#276ef1] py-4 text-center font-semibold text-white [box-shadow:rgb(171,_196,_245)_-8px_8px] transition hover:[box-shadow:rgb(171,_196,_245)_0px_0px] px-8 mr-5 md:mr-6 lg:mr-8"
              >
                <div className="mr-6 font-bold">
                  {page.button_featured.title}
                </div>
                <div className="h-4 w-4 flex-none">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 21"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Arrow Right</title>
                    <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                  </svg>
                </div>
              </Link>
              <Link
                href={page.button_secondary.url}
                className="flex-row flex max-w-full font-bold"
              >
                <p className="text-black">{page.button_secondary.title}</p>
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357752f71727ed3edf9213b_Vector%20(5).svg"
                  alt=""
                  className="ml-2 inline-block max-w-full"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="mx-auto w-full max-w-7xl">
          <Image
            src={page.hero_image.url}
            height={512}
            width={1280}
            alt={page.hero_image.alt || page.hero_image.filename}
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
