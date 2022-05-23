import React from 'react'
import img1 from '../assets/img/img5.png'
import CoffeeDoddle from '../assets/img/CoffeeDoddle.png'

type Props = {}

export default function Hero({ }: Props) {
    return (
        <>
            <div className=" lg:px-6 xl:px-0  overflow-hidden font-Spectral font-semibold">
                <div className="mx-auto relative z-0 px-4 md:px-12 xl:px-32">
                    <div className="flex flex-col-reverse md:flex-row ">
                        <div className="2xl:pl-36 min-pp md:w-full lg:w-3/5 md:pt-24 pb-10 lg:my-16 xl:my-40">
                            <div className="text-3xl lg:text-6xl xl:text-8xl font-black text-gray-900 text-center md:text-left tracking-tighter f-f-i md:w-7/12 leading-tight text-heading-color whitespace-nowrap">Your Food,</div>
                            <h1 className="text-3xl lg:text-6xl xl:text-8xl font-black text-gray-900 text-center md:text-left tracking-tighter f-f-i md:w-7/12 leading-tight text-heading-color whitespace-nowrap">Your Diet</h1>
                            <h2 className="md:w-8/12 py-4 text-center md:text-left md:py-8 text-gray-700 text-lg lg:text-2xl">Do you want to make your own diet program designed unique to you? Vita is here for you!</h2>
                            <div className="w-full flex justify-center md:block">
                                <button className="hover:opacity-90 bg-green-600 py-3 px-10 lg:py-4 lg:px-20 rounded-2xl text-white text-sm md:text-lg f-f-p">Learn More</button>
                            </div>
                        </div>
                        <div className="flex w-fit md:w-5/6 lg:w-3/6 justify-center items-center">
                            <img className="md:pt-20 2xl:pt-40" src={CoffeeDoddle} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}