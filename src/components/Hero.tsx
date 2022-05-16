import React from 'react'
import img1 from '../assets/img/img5.png'

type Props = {}

export default function Hero({ }: Props) {
    return (
        <>
            <div className=" lg:px-6 xl:px-0  overflow-hidden">
                <div className="mx-auto container relative z-0 px-4 xl:px-0">
                    <div className="flex flex-col-reverse md:flex-row ">
                        <div className="2xl:pl-20 min-pp md:w-3/5 md:pt-24 pb-10 lg:py-32 xl:py-48">
                            <h1 className="text-3xl lg:text-6xl xl:text-8xl font-black text-gray-900 text-center md:text-left tracking-tighter f-f-i md:w-7/12 leading-tight text-heading-color">Your Food, Your Diet</h1>
                            <h2 className="md:w-8/12 py-4 text-center md:text-left md:py-8 text-gray-700 text-lg lg:text-2xl">Do you want to make your own diet program designed unique to you? Vita is here for you!</h2>
                            <div className="w-full flex justify-center md:block">
                                <button className="hover:opacity-90 bg-green-600 py-3 px-10 lg:py-4 lg:px-20 rounded-2xl text-white text-sm md:text-lg f-f-p">Learn More</button>
                            </div>
                        </div>
                        <div className="w-1/2 sm:w-2/5 h-64 md:h-auto m-auto flex items-center overflow-hidden">
                            <img className="md:absolute md:w-7/12 md:-ml-28 " src={img1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}