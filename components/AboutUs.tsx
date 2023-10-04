import React from "react"

type Props = {}

const AboutUs = (props: Props) => {
  return (
    <div className="px-5 md:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="py-12 md:py-16 lg:py-20">
          <div className="flex border border-solid border-[#527e91] bg-[#07133b] bg-[linear-gradient(135deg,_rgb(7,_19,_59)_34%,_rgb(78,_88,_124))] px-20 text-white max-[991px]:p-10 max-[767px]:min-h-[auto] max-[479px]:p-8 py-16 rounded-2xl items-start md:items-stretch">
            <div className="grid gap-12 lg:gap-[90px] grid-cols-1 md:grid-cols-2">
              <div className="flex-col flex items-start justify-center gap-4">
                <div className="flex items-center justify-center rounded-[80px] bg-[#17244e] py-2 text-sm font-semibold uppercase text-[#5fbfc6] px-5">
                  How it works
                </div>
                <div className="w-full max-w-xs">
                  <h2 className="font-bold text-3xl md:text-5xl">
                    Our Mission and Vision
                  </h2>
                </div>
                <p className="text-white">
                  At MarketingPal, we're passionate about revolutionizing how
                  businesses connect with their audiences. Our mission is to
                  provide marketers with the tools they need to succeed in a
                  rapidly changing digital landscape.
                </p>
              </div>
              <div className="relative flex items-center justify-center max-[767px]:min-h-[320px] max-[479px]:min-h-[160px]">
                <div className="absolute w-[59.78%] max-w-[278px] rounded-lg">
                  <img
                    src="https://assets.website-files.com/64e30fb523cefa79f1c3f08f/64e7468cf2f19a01de77a513_correct.svg"
                    alt=""
                    className="absolute z-[1] inline-block max-w-full"
                  />
                  <div className="w-full overflow-hidden backdrop-blur-[5px] backdrop-filter rounded-lg lg:rounded-lg">
                    <img
                      src="https://assets.website-files.com/64e30fb523cefa79f1c3f08f/64e74697710d1c12c4c3e87f_CTA%20Image%20blur.svg"
                      alt=""
                      className="inline-block w-full max-w-full"
                    />
                  </div>
                </div>
                <img
                  src="https://assets.website-files.com/64e30fb523cefa79f1c3f08f/64e741d88681676ffdf7320a_cta%20image%201.svg"
                  alt=""
                  className="absolute inline-block w-[22.8%] max-w-[106px] backdrop-blur-[5px] backdrop-filter"
                />
                <img
                  src="https://assets.website-files.com/64e30fb523cefa79f1c3f08f/64e742100574719a8418e45b_cta%20image%203.png"
                  alt=""
                  className="inline-block w-full max-w-full border border-solid border-[#2e3d6d] bg-[#ffffff1a] rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
