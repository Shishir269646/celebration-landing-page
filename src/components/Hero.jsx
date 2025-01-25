"use client";

import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Hero = () => {
    return (
        <div className="hero min-h-screen heroBg">
            <div className="hero-overlay bg-opacity-15"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-[70%]">
                    <div className="px-20 flex flex-col justify-start items-center gap-14">
                        <h1 className="self-stretch text-center text-neutral-50 text-6xl font-normal font-mauline leading-[104px]">
                            Celebrate, Share, Remember
                            <br />
                            All in One Place
                        </h1>
                        <p className="self-stretch text-center pb-28 text-neutral-50 text-3xl font-normal font-maiandraGd leading-10 tracking-wide">
                            From photo sharing to guest messages and interactive games,
                            transform your wedding day into an unforgettable experience for
                            friends and family
                        </p>
                    </div>
                    <button className="btn bg-transparent hover:bg-white transition-colors">
                        <div className="text-center text-neutral-50 text-[32px] font-normal font-maiandraGd leading-10 tracking-wide hover:text-black">
                            Register for free
                            <br />
                            <FontAwesomeIcon icon={faArrowDown} />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
