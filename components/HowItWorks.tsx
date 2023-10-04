import React from "react"

type Props = {}

const HowItWorks = (props: Props) => {
  return (
    <section className="block">
      <div className="py-16 md:py-24 lg:py-32">
        <div className="px-5 md:px-10">
          <div className="mx-auto w-full max-w-7xl">
            <div className="mx-auto w-full max-w-3xl">
              <div className="text-center">
                <p className="uppercase text-[#1353fe]">3 easy steps</p>
                <h2 className="text-3xl font-semibold md:text-5xl">
                  How it{" "}
                  <span
                    className="bg-cover bg-center bg-no-repeat px-4 text-white"
                    style={{
                      backgroundImage:
                        "url(https://assets.website-files.com/63904f663019b0d8edf8d57c/639156ce1c70c97aeb755c8a_Rectangle%2010%20(1).svg)",
                    }}
                  >
                    works
                  </span>
                </h2>
                <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
                  <p className="text-[#636262]">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                    aliquam,purus sit amet luctus magna fringilla urna
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 justify-items-center gap-4 max-[767px]:mx-auto max-[767px]:max-w-[400px] sm:justify-items-stretch md:grid-cols-3 lg:gap-8">
              <div className="relative flex grid-flow-row grid-cols-1 flex-col place-items-center justify-center gap-4 rounded-md px-4 py-10 text-center max-[767px]:p-8">
                <div className="mb-5 flex flex-col items-center justify-center rounded-xl border border-solid border-black bg-white px-8 py-5 [box-shadow:rgb(0,_0,_0)_4px_4px] md:mb-6 lg:mb-8">
                  <p className="text-xl font-bold">1</p>
                </div>
                <div className="mb-2 text-xl font-semibold">Find Component</div>
                <div className="text-sm text-[#636262]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam, purus sit.
                </div>
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639833af1925275b6f0b43e1_Vector%2032.svg"
                  alt=""
                  className="absolute bottom-[-33%] left-[0%] right-[auto] top-[auto] -z-[1] inline-block w-96 max-w-full max-[767px]:hidden max-[767px]:rotate-0 md:bottom-[auto] md:left-[136px] md:right-[-50%] md:top-[18%] lg:left-[auto]"
                />
              </div>
              <div className="relative flex grid-flow-row grid-cols-1 flex-col place-items-center justify-center gap-4 rounded-md px-4 py-10 text-center max-[767px]:p-8">
                <div className="mb-5 flex flex-col items-center justify-center rounded-xl border border-solid border-black bg-white px-8 py-5 [box-shadow:rgb(0,_0,_0)_4px_4px] md:mb-6 lg:mb-8">
                  <p className="text-xl font-bold">2</p>
                </div>
                <div className="mb-2 text-xl font-semibold">Copy and Paste</div>
                <div className="text-sm text-[#636262]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam, purus sit.
                </div>
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639834731925279c5e0b4ee5_Vector%2033.svg"
                  alt=""
                  className="absolute bottom-[-33%] left-[0%] right-[auto] top-[auto] -z-[1] inline-block w-96 max-w-full max-[767px]:hidden max-[767px]:rotate-0 md:bottom-[auto] md:left-[136px] md:right-[-50%] md:top-[10%] lg:left-[auto]"
                />
              </div>
              <div className="relative flex grid-flow-row grid-cols-1 flex-col place-items-center justify-center gap-4 rounded-md px-4 py-10 text-center max-[767px]:p-8">
                <div className="mb-5 flex flex-col items-center justify-center rounded-xl border border-solid border-black bg-white px-8 py-5 [box-shadow:rgb(0,_0,_0)_4px_4px] md:mb-6 lg:mb-8">
                  <p className="text-xl font-bold">3</p>
                </div>
                <div className="mb-2 text-xl font-semibold">Done!</div>
                <div className="text-sm text-[#636262]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam, purus sit.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
