"use client";
import React, { useState } from "react";
import Image from 'next/image';
import aiImg from "../../public/images/ai-technology 1.png";
import aiImg2 from "../../public/images/ai-technology 2.png";
import aiImg3 from "../../public/images/ai-technology 3.png";
import robotQrImg from "../../public/images/c56cf2499d0ef31fbd8663997fdd8d15.gif";
import Celebrationcard from "./Celebrationcard";
import Howitcard from "./Howitcard";






const contentData = {
  leftContainer: {
    bgClass: 'bg-white/60',
    icon: aiImg,
  },

  mainContent: {
    title: 'Share with a Single QR Code',
    description: `
      Once your hub is complete, receive a unique, shareable QR code and guest list link.
      
      Simply send it to your guests, who can quickly register with just their phone number to access everything your celebration offers.
    `,
    icon: aiImg2,
    overlayImage: {
      src: robotQrImg,
      className: 'w-[290.73px] top-5 -right-24 h-[317.15px] absolute origin-top-left rotate-[26deg] mix-blend-multiply rounded-[120px]',
    },
  },

  rightContainer: {
    bgClass: 'bg-white/60',
    icon: aiImg3,
  },

};

function Qrcodecard() {



  const [showComponentLt, setShowComponentLt] = useState(false);
  const [showComponentRt, setShowComponentRt] = useState(false);

  const handleClickLt = () => {
    setShowComponentLt(!showComponentLt);
  };

  const handleClickRt = () => {
    setShowComponentRt(!showComponentRt);
  };


  return (
    <div className="h-auto lg:h-[500px] flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8 px-4">


      {/* Left Rounded Container */}
      <div onClick={handleClickLt}
        className={`w-[130px] h-[500px] relative ${contentData.rightContainer.bgClass} rounded-[100px] overflow-hidden shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)]`}>
        <div className="w-20 h-[76px] px-[17.14px] py-[15.48px] left-[25px] top-[25px] absolute bg-white rounded-[50px] justify-center items-center inline-flex overflow-hidden">
          <Image className="w-[45.71px] h-[45.04px]" alt="Left Icon" src={contentData.leftContainer.icon} loading="lazy"/>
        </div>
      </div>

      {showComponentLt && (
        <div>
          <Howitcard/>
        </div>
      )}





      {/* Center Content Container */}
      <div className="h-[500px] w-[1150px]  bg-neutral-50 relative overflow-hidden rounded-[50px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)]">
        {/* Icon */}

        <div className="w-20 h-[76px] px-[17.14px] py-[15.48px] left-[25px] top-[25px] absolute bg-white rounded-[50px] justify-center items-center inline-flex overflow-hidden">
          <Image className="w-[45.71px] h-[45.04px]" alt="Main Icon" src={contentData.mainContent.icon} />
        </div>

        {/* Text Content */}

        <div className="h-80 left-[42px] top-[132px] absolute flex flex-col justify-start items-start gap-8">
          <div className="w-3/4">




            <h2 className="text-[#d81159] text-4xl md:text-5xl font-normal font-mauline leading-tight">
              {contentData.mainContent.title}
            </h2>


            <p className="self-stretch text-[#0d0d0d] text-2xl font-normal font-maiandraGd leading-loose">
              {contentData.mainContent.description}
            </p>


          </div>
        </div>

        {/* Rotated Image */}
        <Image
          className={contentData.mainContent.overlayImage.className}
          alt="QR Code Robot"
          src={contentData.mainContent.overlayImage.src}
          loading="lazy"
        />
      </div>






      {/* Right Rounded Container */}
      <div
        onClick={handleClickRt}
        className={`w-[130px] h-[500px] relative ${contentData.rightContainer.bgClass} rounded-[100px] overflow-hidden shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)]`}>
        <div className="w-20 h-[76px] px-[17.14px] py-[15.48px] left-[25px] top-[25px] absolute bg-white rounded-[50px] justify-center items-center inline-flex overflow-hidden">
          <Image className="w-[45.71px] h-[45.04px]" alt="Right Icon" src={contentData.rightContainer.icon} />
        </div>
      </div>

      {showComponentRt && (
        <div>
          <Celebrationcard />
        </div>
      )}



    </div>

  )
}

export default Qrcodecard
