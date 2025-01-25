"use client";
import React from 'react';
import Image from 'next/image';
import Ellipse01 from "../../public/images/Ellipse 39.jpg";
import Ellipse02 from "../../public/images/Ellipse 35.jpg";
import Ellipse03 from "../../public/images/Ellipse 43.jpg";
import Ellipse04 from "../../public/images/Ellipse 44.jpg";
import Svg1 from "../../public/images/Group.svg";
import Svg2 from "../../public/images/Group 76.svg";
import Svg3 from "../../public/images/Group1.svg";
import Svg4 from "../../public/images/Group2.svg";
import Svg5 from "../../public/images/Group 77.svg";



function FreeAccessBanner() {
    return (
        <div>


            <div className="h-[1003px] relative  overflow-hidden">
                <div className="h-[532px] left-[20px] top-44 absolute flex-col justify-start items-center gap-[20px] inline-flex">
                    <div className="self-stretch h-[328px] px-[250px] flex-col justify-start items-center gap-10 flex">
                        <div className="self-stretch text-center"><span className="text-[#0d0d0d] text-[80px] font-normal font-mauline leading-[104px]">
                            Be Part of the Experience With<br />
                        </span>
                            <span className="text-[#d81159] text-[80px] font-extralight font-mauline leading-[104px]">
                                Our Exclusive Free Access!
                            </span>
                        </div>
                        <div className={`self-stretch text-center text-[#0d0d0d] text-[32px] font-normal font-maiandraGd leading-10 tracking-wide`}>
                            Join GatherGram’s exclusive Free Access and explore everything our platform has to offer
                            </div>
                    </div>
                    <div className="w-[480px] h-[84px] px-6 py-4 bg-[#d81159] rounded-[50px] shadow-[-8px_8px_0px_0px_rgba(0,0,0,1.00)] justify-center items-center gap-2.5 inline-flex">
                        <button className="text-center btn bg-transparent border-none text-neutral-50 text-2xl font-normal font-maiandraGd leading-loose hover:bg-transparent">
                            Register for Free Access

                        </button>
                    </div>
                </div>
                <div className="w-[159px] right-28 top-[230px] -rotate-[50deg] absolute text-center text-[#eb87ab] text-2xl font-normal font-pacifico leading-10 tracking-wide">
                    
                    <Image src={Svg2} alt="svg" loading="lazy"/>
                    <p className="">effortless</p>

                </div>
                <div className="w-[159px] right-1/2 bottom-28 absolute text-center text-[#eb87ab] text-2xl font-normal font-pacifico leading-10 tracking-wide">
                    
                    <Image src={Svg5} alt="svg" loading="lazy"/>
                    <p className="pl-10">hassle free</p>

                </div>
                <div className="left-[125px] top-[128px] -rotate-[25deg] absolute text-center text-[#eb87ab] text-2xl font-normal font-pacifico leading-7 tracking-wide">
                <p className="pb-3">joyful</p>
                    <Image src={Svg1} alt="svg" loading="lazy"/>
                    

                </div>
                <div className="right-28 bottom-80 absolute text-center text-[#eb87ab] text-2xl font-normal font-pacifico leading-10 tracking-wide">
                    
                    <Image src={Svg4} alt="svg" loading="lazy"/>
                    <p className="pl-20 pt-3">Memorable</p>

                </div>
                <div className="left-[285px] top-[505px] absolute text-center text-[#eb87ab] text-2xl font-normal font-pacifico leading-10 tracking-wide">
                    
                    <Image src={Svg3} alt="svg" loading="lazy"/>
                    Tailored just for you

                </div>
                
                <Image className="w-[200px] h-[200px] right-6 top-[40px] absolute rounded-full shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)]"
                alt='Ellipse Photo'
                    src={Ellipse01}
                    loading="lazy"
                />
                <Image className="w-[200px] h-[200px] left-[27px] top-[254px] absolute rounded-full shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)]"
                alt='Ellipse Photo'
                    src={Ellipse02}
                    loading="lazy"
                />
                <Image className="w-[200px] h-[200px] right-64 bottom-40 absolute rounded-full shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)]"
                alt='Ellipse Photo'
                    src={Ellipse03}
                    loading="lazy"
                />
                <Image className="w-[200px] h-[200px] left-[213px] top-[735px] absolute rounded-full shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)]"
                alt='Ellipse Photo'
                    src={Ellipse04}
                    loading="lazy"
                />
            </div>






        </div>
    )
}

export default FreeAccessBanner
