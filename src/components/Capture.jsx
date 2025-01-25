"use client";
import React from 'react';
import Image from 'next/image';
import cardImg1 from "../../public/images/captureCard.jpg";
import cardImg2 from "../../public/images/card02.jpg";
import cardImg3 from "../../public/images/card03.jpg";
import cardImg4 from "../../public/images/card04.jpg";
import cardImg5 from "../../public/images/card05.jpg";
import Aicard from './Aicard';
/* import Aicard from './Aicard'; */


function capture() {




    const data = [
        {
            height: "404px",
            bgImg: cardImg1,
            title01: "Capture Every Precious Moment",
            title02: "",
            content: "Your Guests, Your Memories"
        },
        {
            height: "404px",
            bgImg: cardImg2,
            title01: "Event Details & Itinerary",
            title02: "",
            content: "Every Detail in One Place"
        },
        {
            height: "404px",
            bgImg: cardImg3,
            title01: "Gifts from the Heart, ",
            title02: "Sent Securely",
            content: "Easy Contributions, Lasting Gratitude"
        },
        {
            height: "404px",
            bgImg: cardImg4,
            title01: "Fun & Laughter with Couple",
            title02: "Trivia",
            content: "Engage Your Guests Like Never Before"
        },
        {
            height: "404px",
            bgImg: cardImg5,
            title01: "Personalized Photo Album",
            title02: "",
            content: "Where Your Wedding Moments Live On"
        }
    ];







    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {data.map((item, index) => (
                <React.Fragment key={index}>
                    {/* Main Card */}
                    <div className="flex flex-col overflow-hidden">
                        <div
                            className={`card bg-slate-100 image-full w-full h-[${item.height}] shadow-xl`}
                        >
                            <figure>
                                <Image src={item.bgImg} alt="Card Background Photo" loading="lazy"/>
                            </figure>
                            <div className="card-body justify-between">
                                <h2 className="font-mauline text-4xl font-normal leading-[64px]">
                                    {item.title01}
                                    <br />
                                    <span>{item.title02}</span>
                                </h2>
                                <div className="card-actions">
                                    <p className="text-2xl font-maiandraGd font-normal leading-[40px] tracking-[0.64px]">
                                        {item.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Column */}
                    {index === data.length - 2 && (
                        <Aicard />
                    )}
                </React.Fragment>
            ))}
        </div>



    )
}

export default capture
