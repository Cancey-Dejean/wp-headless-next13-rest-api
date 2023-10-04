import React from "react"

type Props = {}

const CTA = (props: Props) => {
  return (
    <div className="px-5 md:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="py-16 md:py-24 lg:py-32">
          <div className="grid items-center max-[991px]:justify-items-start grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-20">
            <div className="flex-col flex items-center gap-4 text-center max-[991px]:mx-auto max-[991px]:max-w-[720px]">
              <img
                src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f683b1e3793b739a1c361_Online_math_tutoring.svg"
                alt=""
                className="inline-block max-w-full"
              />
              <div className="flex-col flex items-center">
                <h2 className="mb-4 mt-6 font-extrabold text-3xl md:text-5xl">
                  Convenient. Reliable. Power up your payments.
                </h2>
                <div className="ml-0 mr-0 mt-4 max-w-[528px]">
                  <p className="text-[#636262]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#f7f6f2] p-6 max-[991px]:w-full rounded-2xl">
              <div className="mx-auto w-full bg-white px-8 max-[991px]:ml-0 max-[991px]:mr-0 rounded-2xl pt-[2em] pb-8">
                <div className="text-center">
                  <h3 className="mt-6 font-bold text-2xl md:text-3xl">
                    Get a free quote
                  </h3>
                  <div className="mx-auto mt-4 max-w-[480px] mb-5 md:mb-6 lg:mb-8">
                    <div className="text-sm text-[#636262]">
                      Lorem ipsum dolor sit amet, consectetur
                    </div>
                  </div>
                  <div className="mx-auto w-full max-w-[400px]">
                    <div className="mx-auto max-w-[400px] text-left mb-4">
                      <form name="wf-form-password" method="get">
                        <div className="relative">
                          <label for="name-2" className="mb-1 font-bold">
                            Your Name
                          </label>
                          <input
                            type="text"
                            className="m-0 mb-4 block w-full border-[1.5px] border-solid border-[#eceae2] bg-white align-middle text-[#333333] focus:border-[#3898ec] text-sm px-3 rounded-md h-9 py-6 pl-4"
                            maxlength="256"
                            name="name-2"
                            placeholder=""
                            required=""
                          />
                        </div>
                        <div className="relative mb-2">
                          <label for="name-2" className="mb-1 font-bold">
                            Email Address
                          </label>
                          <input
                            type="email"
                            className="m-0 mb-4 block w-full border-[1.5px] border-solid border-[#eceae2] bg-white align-middle text-[#333333] focus:border-[#3898ec] text-sm px-3 rounded-md h-9 py-6 pl-4"
                            maxlength="256"
                            name="name-2"
                            placeholder=""
                            required=""
                          />
                        </div>
                        <div className="relative mb-5 md:mb-6 lg:mb-8">
                          <label for="field-3" className="mb-1 font-bold">
                            Project Brief
                          </label>
                          <textarea
                            placeholder=""
                            maxlength="5000"
                            name="field"
                            className="m-0 block h-auto min-h-[128px] w-full overflow-auto border-[1.5px] border-solid border-[#eceae2] bg-white align-middle text-[#333333] focus:border-[#3898ec] text-sm mb-2.5 px-3 py-2 rounded-md pl-4"
                          />
                        </div>
                        <input
                          type="submit"
                          value="Get free quote"
                          className="m-0 inline-block w-full max-w-none cursor-pointer border border-solid border-[#c9fd02] bg-[#c9fd02] px-6 py-4 text-center font-bold text-black transition hover:border-black hover:bg-white rounded-full"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTA
