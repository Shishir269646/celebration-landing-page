"use client";
import React from 'react';
import Image from 'next/image';
import aiImg1 from "../../public/images/ai-technology 1.png";
import cardImg1 from "../../public/images/aiCard1.jpg";
import cardImg2 from "../../public/images/aiCard02.jpg";



const data = [
    {
        height: "404px",
        bgImg: cardImg1,
        aiImg: aiImg1,
        title01: "Virtual Guestbook",
        title02: "",
        content: "A Digital Keepsake of Love & Laughter"
    },
    {
        height: "404px",
        bgImg: cardImg2,
        aiImg: aiImg1,
        title01: "Your Personalized Love Story,",
        title02: "Beautifully Told",
        content: "A Journey Worth Sharing"
    }
    
];





function Aicard() {
    return (
        <div className="gap-4">
            {data.map((subItem, index) => (
                <div key={index} className="w-full py-2">
                    <div
                        className={`card bg-slate-50 image-full w-full h-[${subItem.height}] shadow-xl`}
                    >
                        <figure className="justify-center items-center">
                            <Image
                                src={subItem.bgImg}
                                alt="Card Background Photo"
                                loading="lazy"
                            />
                        </figure>
                        <div className="card-body justify-between">
                            <div className="flex w-full flex-col items-start gap-3">
                                <div className="flex items-center gap-2">
                                    <Image
                                        className="w-[59px] h-[59px]"
                                        src={subItem.aiImg}
                                        alt="AI PNG"
                                        loading="lazy"
                                    />
                                    <p className="text-2xl font-maiandraGd font-normal leading-[40px] tracking-[0.64px]">
                                        AI Assisted
                                    </p>
                                </div>
                                <h2 className="font-mauline text-4xl font-normal leading-[64px]">
                                    {subItem.title01}
                                    <br />
                                    <span>{subItem.title02}</span>
                                </h2>
                            </div>
                            <div className="card-actions">
                                <p className="text-2xl font-normal font-maiandraGd leading-[40px] tracking-[0.64px]">
                                    {subItem.content}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Aicard
