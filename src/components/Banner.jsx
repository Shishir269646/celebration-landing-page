"use client"
import React from 'react';
import Image from 'next/image';
import bannerImg from '../../public/images/Banner2Img.jpg'

function Banner() {
    return (
        <div id="contact">

            <div className="hero min-h-screen relative">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src={bannerImg}
                        alt="Background Image"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        loading="lazy"
                    />
                </div>

                {/* Hero Content */}
                <div className="hero-content flex-col lg:flex-row-reverse relative z-10">
                    <div>
                        <h1 class="text-neutral-50 text-[80px] font-normal font-mauline leading-[104px]">
                            Ready for an
                            <br />
                            <span class="text-[#ffd6e4] text-[80px] font-normal font-['Mauline'] leading-[104px]">
                                Unforgettable
                            </span> Wedding?
                        </h1>
                        <p className="text-neutral-50 text-2xl font-normal font-maiandraGd leading-10 tracking-wide">

                            Begin your journey to a stress-free, beautifully organized celebration today with GatherGram
                        </p>
                        <button className="w-64 h-16 p-4 my-5 bg-neutral-50 rounded-[50px] shadow-[-8px_8px_0px_0px_rgba(0,0,0,1.00)] justify-center items-center gap-2.5 inline-flex">
                            <p className="text-center text-[#d81159] text-2xl font-normal font-mauline leading-loose">
                                Let’s get started!
                            </p>
                        </button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Banner
