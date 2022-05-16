import React from 'react'

type Props = {}

export default function NoPage({ }: Props) {
  return (
    <div className="lg:px-24 lg:py-24 h-screen md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16 bg-[#61B15A]">
      <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0 ">
        <div className="relative">
          <div className="absolute">
            <div>
              <h1 className="my-2 text-gray-800 font-bold text-2xl">
                Looks like you've found the
                doorway to the great nothing
              </h1>
              <p className="my-2 text-gray-800">Sorry about that! Please visit our hompage to get where you need to go.</p>
              <button className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-[#55968F] text-white hover:bg-[#8ACBBB] focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"><a href='/'>Homepage</a></button>
            </div>
          </div>
          <div>
            <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
          </div>
        </div>
      </div>
      <div>
        <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
      </div>
    </div>
  )
}