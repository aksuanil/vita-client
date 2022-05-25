import React from 'react'
import img1 from '../assets/img/img5.png'
import CoffeeDoddle from '../assets/img/CoffeeDoddle.png'

type Props = {}

export default function Hero({ }: Props) {
    return (
        <>
            <div className='flex justify-center font-Spectral font-semibold overflow-hidden'>
                <div className='flex flex-col md:flex-row container 2xl:max-w-7xl gap-4 md:gap-16 items-center'>
                    <div className='flex flex-col justify-center  order-2 md:mt-24 md:order-1 md:w-1/2'>
                        <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl whitespace-nowrap">Your Food,</div>
                        <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl whitespace-nowrap">Your Diet</div>
                        <div className="text-xl">Do you want to make your own diet program designed unique to you? Vita is here for you!</div>
                        <button className="my-2 border-themeGreenDark border-2 p-2 px-8 w-fit bg-[#21754B] rounded-3xl hover:bg-themeGold text-themeGold hover:text-themeGreenDark transition-all duration-500">
                            <button className="font-bold">Learn More</button>
                        </button>
                    </div>
                    <div className='flex mt-24 sm:mt-24 lg:mt-28 xl:mt-32 order-1 justify-center 2xl:justify-end w-1/2'>
                        <img className="w-full lg:w-5/6" src={CoffeeDoddle} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}