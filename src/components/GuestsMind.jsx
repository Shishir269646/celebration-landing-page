"use client";
import React from 'react';
import Capture from './Capture';


function GuestsMind() {
    return (
        <div id="features">



            <div className="h-auto px-20 py-40 bg-neutral-50 flex-col justify-end items-start inline-flex overflow-hidden">
                <div className="self-stretch h-[328px] px-[250px] flex-col justify-start items-start flex">
                    <div className="self-stretch text-center"><span className="text-[#0d0d0d] text-[80px] font-normal font-mauline leading-[104px]">
                        Designed with You and Your Guests </span>
                        <span className="text-[#d81159] text-[80px] font-normal font-mauline leading-[104px]">
                            in Mind
                        </span>
                    </div>
                    <div className="self-stretch text-center text-[#0d0d0d] text-[32px] font-normal font-maiandraGd leading-10 tracking-wide">
                        Explore the features that will bring your big day to life, making your wedding celebration unforgettable

                    </div>
                </div>
                <div>
                    <Capture />
                </div>


            </div>





        </div>
    )
}

export default GuestsMind
