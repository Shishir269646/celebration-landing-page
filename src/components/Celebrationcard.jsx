"use client"
import Image from 'next/image';
import React from 'react';
import aiImg from "../../public/images/ai-technology 1.png";
import aiImg2 from "../../public/images/ai-technology 2.png";
import aiImg3 from "../../public/images/ai-technology 3.png";
import celebrationImg from "../../public/images/622a87bb3fe69dfa5ff4e044ca9226fc.gif";



const cardData = [
    {
        id: 1,
        width: 'w-[130px]',
        bgClass: 'bg-white/60',
        borderRadius: 'rounded-[100px]',
        icon: aiImg,
    },
    {
        id: 2,
        width: 'w-[130px]',
        bgClass: 'bg-white/60',
        borderRadius: 'rounded-[100px]',
        icon: aiImg2,
    },
    {
        id: 3,
        width: 'w-[1150px]',
        bgClass: 'bg-neutral-50',
        borderRadius: 'rounded-[50px]',
        shadow: 'shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)]',
        icon: aiImg3,
        title: 'Let the Celebration Begin!',
        description: `
        Guests can now fully interact with your wedding day! They can message, contribute gifts, play trivia games, share photos and videos, and view all event details.
        
        After the event, everything remains accessible, including a personalized photo album and high-quality downloads for all to relive the day’s magic.
      `,
        overlayImage: {
            src: celebrationImg,
            className: 'w-[290.73px] top-5 -right-24 h-[317.15px] absolute origin-top-left rotate-[26deg] mix-blend-multiply rounded-[120px]',

        },
    },
];

function Celebrationcard() {
    return (



        <div className="h-auto lg:h-[500px] flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8 px-4">


            {cardData.map((card) => (
                <div
                    key={card.id}
                    className={`${card.width} h-[500px] relative ${card.bgClass} ${card.borderRadius} overflow-hidden ${card.shadow || ''}`}
                >
                    <div className="w-20 h-[76px] px-[17.14px] py-[15.48px] left-[25px] top-[25px] absolute bg-white rounded-[50px] justify-center items-center inline-flex overflow-hidden">
                        <Image className="w-[45.71px] h-[45.04px]" alt={`icon-${card.id}`} src={card.icon} loading="lazy"/>
                    </div>



                    {card.title && (
                        <div className="h-80 left-[42px] top-[132px] absolute flex flex-col justify-start items-start gap-8">
                            <div className="w-3/4">
                                <h1 className="text-[#d81159] text-3xl sm:text-5xl font-normal font-mauline leading-[48px] sm:leading-[64px]">
                                    {card.title}
                                </h1>
                                <p className="self-stretch text-[#0d0d0d] text-2xl font-normal font-maiandraGd leading-loose">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    )}


                    {card.overlayImage && (
                        <Image
                            className={card.overlayImage.className}
                            src={card.overlayImage.src}
                            alt={`overlay-${card.id}`}
                        />
                    )}
                </div>
            ))}
        </div>



    )
}

export default Celebrationcard
