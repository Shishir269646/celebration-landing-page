"use client"
import React from 'react';
import Image from 'next/image';
import SparkleSvg from "../../public/images/Highlight Sparkle 7.svg";
import HighlightSvg from "../../public/images/Highlight Effect Line 2.svg";
import SparkleSvg2 from "../../public/images/Highlight Sparkle 6.svg";
import Ellipse from "../../public/images/Ellipse 18.png";
import Ellipse2 from "../../public/images/Ellipse 19.png";
import SparkleSvg3 from "../../public/images/Sparkle.svg";



import Qrcodecard from './Qrcodecard';



function CelebrationSection() {
    return (
        <div id="howitworks">



            <div className="relative min-h-screen py-28 flex flex-col items-center justify-center bg-[#eb87ab] overflow-hidden">
                {/* Background SVG */}
                <Image className="text-[#D81159] top-0 right-0 absolute opacity-60 mix-blend-multiply"
                    src={Ellipse2}
                    alt="Ellipse PNG"
                    loading="lazy"
                />
                <Image
                    className="absolute bottom-0 left-0 h-80 w-80 text-[#D81159] opacity-60 mix-blend-multiply overflow-hidden"
                    src={Ellipse}
                    alt="Ellipse PNG"
                    loading="lazy"
                />

                <div className="w-44 h-44 absolute  overflow-hidden">
                    <div className="w-[166.84px] h-[119.70px] left-[4.49px] top-[28.05px] absolute">
                        <Image src={SparkleSvg2}
                            alt="Sparkle Svg 2" loading="lazy"/>
                    </div>
                </div>
                <div className="w-[122.29px] h-[122.29px] left-0 top-0 font-bold justify-center absolute rotate-[30deg]  overflow-hidden">

                    <div className="w-full h-full">
                        <Image
                            src={SparkleSvg}
                            alt="Sparkle Svg"
                            loading="lazy"
                        />
                    </div>

                </div>

                <div className="w-[158.49px] h-[175.49px] right-56 top-10 absolute scale-x-[-1] overflow-hidden">
                    <div className="w-full h-full absolute">
                        <Image src={HighlightSvg}
                            alt="Highlight Svg" loading="lazy"/>
                    </div>
                </div>
                <div className="w-[158.49px] h-[175.49px] left-56 top-10 absolute overflow-hidden">
                    <div className="w-full h-full absolute">
                        <Image src={HighlightSvg}
                            alt="Highlight Svg" loading="lazy"/>
                    </div>
                </div>
                <div className="absolute rotate-[81.36deg] bottom-4">
                    <div className="w-24 h-24">
                        <Image
                            src={SparkleSvg3}
                            alt="Sparkle Svg 3"
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="text-center mb-12 pb-14 top-8 relative z-10">
                    <h1 className="text-7xl font-mauline font-bold text-white">Celebrate With Ease</h1>
                    <p className="text-xl text-white mt-2 font-maiandraGd">
                        From setup to celebration, here’s how we make your wedding day hassle-free
                    </p>
                </div>

                {/* Content Card */}
                <div className="w-full">
                    <Qrcodecard/>

                </div>



            </div>
        </div>





    )
}

export default CelebrationSection
