"use client";
import React, { useState } from "react";
import Image from 'next/image';
import aiImg from "../../public/images/ai-technology 1.png";
import aiImg2 from "../../public/images/ai-technology 2.png";
import aiImg3 from "../../public/images/ai-technology 3.png";
import robotImg from "../../public/images/af6a13f39e977ff5db56b57b2a9c2306.gif";
import Qrcodecard from "./Qrcodecard";
import Celebrationcard from "./Celebrationcard";



const cardData = [
    {
        id: 1,
        bgClass: 'bg-neutral-50',
        borderRadius: 'rounded-[50px]',
        shadow: 'shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)]',
        icon: aiImg,
        title: 'Create Your Celebration Hub',
        description: `Start by signing up and setting up your wedding day details.
    
    Easily fill in everything—from your event itinerary and trivia questions to your gift list and love story, with AI assistance making it even easier to share your journey!`,
        isMain: true,
        overlayImage: {
            src: robotImg,
            className: 'w-[290.73px] h-[317.15px] absolute origin-top-left rotate-[-145.55deg] mix-blend-multiply rounded-[120px]',
            position: { left: '987.74px', top: '461.93px' },
        },
    },
    {
        id: 2,
        bgClass: 'bg-white/60',
        borderRadius: 'rounded-[100px]',
        icon: aiImg2,
        isMain: false,
    },
    {
        id: 3,
        bgClass: 'bg-white/60',
        borderRadius: 'rounded-[100px]',
        icon: aiImg3,
        isMain: false,
    },
];

function Howitcard() {






    return (
        <div>


            <div className="h-[500px] justify-start items-center gap-8 inline-flex">


                {cardData.map((card) => (
                    <div

                        key={card.id}
                        className={`w-[${card.isMain ? '1150px' : '130px'}] h-[500px] relative ${card.bgClass} ${card.borderRadius} overflow-hidden ${card.shadow || ''
                            }`}>
                        <button 
                            className="w-20 h-[76px] px-[17.14px] py-[15.48px] left-[25px] top-[25px] absolute bg-white rounded-[50px] justify-center items-center inline-flex overflow-hidden">
                            <Image className="w-[45.71px] h-[45.04px]" alt={`icon-${card.id}`} src={card.icon} loading="lazy"/>
                        </button>


                        {card.isMain && (
                            <>
                                <div className="h-64 w-[70%] left-[42px] top-[132px] absolute flex-col justify-start items-start gap-8 inline-flex">
                                    <div className="self-stretch text-[#d81159] text-5xl font-normal font-mauline leading-[64px]">
                                        {card.title}
                                    </div>
                                    <div className="self-stretch text-[#0d0d0d] text-2xl font-normal font-maiandraGd leading-loose">
                                        {card.description}
                                    </div>
                                </div>
                                <Image
                                    className={card.overlayImage.className}
                                    alt={`overlay-${card.id}`}
                                    src={card.overlayImage.src}
                                    style={{ left: card.overlayImage.position.left, top: card.overlayImage.position.top }}
                                    loading="lazy"
                                />
                            </>
                        )}


                        
                    </div>






                ))}



            </div>




        




        </div>
    )
}

export default Howitcard
