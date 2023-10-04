import { fetchPageComponent, reqUrl } from "@/app/config"
import React from "react"

type Props = {}

const SocialProof = async () => {
  const componentPageSlug = "home"
  const page = await fetchPageComponent(reqUrl, componentPageSlug)

  // console.log(page)
  return (
    <div className="bg-black text-white">
      <div className="px-5 md:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <div className="py-16 md:py-24 lg:py-32">
            <h5 className="text-xl font-bold mb-6 md:mb-10 lg:mb-12">
              {page.social_proof_title}
            </h5>
            <div className="grid max-[479px]:justify-items-start grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 sm:gap-12 md:gap-6">
              <div className="flex items-center justify-start">
                <img
                  src={page.social_proof_image_1}
                  alt=""
                  className="inline-block max-w-full"
                />
              </div>
              <div className="flex items-center justify-start">
                <img
                  src={page.social_proof_image_2}
                  alt=""
                  className="inline-block max-w-full"
                />
              </div>
              <div className="flex items-center justify-start">
                <img
                  src={page.social_proof_image_3}
                  alt=""
                  className="inline-block max-w-full"
                />
              </div>
              <div className="flex items-center justify-start">
                <img
                  src={page.social_proof_image_4}
                  alt=""
                  className="inline-block max-w-full"
                />
              </div>
              <div className="flex items-center justify-start">
                <img
                  src={page.social_proof_image_5}
                  alt=""
                  className="inline-block max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialProof
