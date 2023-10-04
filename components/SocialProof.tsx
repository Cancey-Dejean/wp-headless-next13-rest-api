import React from "react"

type Props = {}

const SocialProof = (props: Props) => {
  return (
    <div className="bg-black text-white">
      <div className="px-5 md:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <div className="py-16 md:py-24 lg:py-32">
            <h5 className="text-xl font-bold mb-6 md:mb-10 lg:mb-12">
              The world’s innovative companies use Flowspark
            </h5>
            <div className="grid max-[479px]:justify-items-start grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 sm:gap-12 md:gap-6">
              <div className="flex items-center justify-start">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b402d2b8fe54b7acf18f6_Microsoft%20Logo.svg"
                  alt=""
                  className="inline-block max-w-full"
                />
              </div>
              <div className="flex items-center justify-start">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b402e7d899e6da304fe10_PayPal%20Logo.svg"
                  alt=""
                  className="inline-block max-w-full"
                />
              </div>
              <div className="flex items-center justify-start">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b4026be59b87273c9cca5_Google%20Logo.svg"
                  alt=""
                  className="inline-block max-w-full"
                />
              </div>
              <div className="flex items-center justify-start">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b40284742ac828ba46301_Chase%20Logo.svg"
                  alt=""
                  className="inline-block max-w-full"
                />
              </div>
              <div className="flex items-center justify-start">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b402ba5c3b654645eb944_Walmart%20Logo.svg"
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
