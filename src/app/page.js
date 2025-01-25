"use client"
import React, { useState } from "react";
import Hero from "@/components/Hero";
import FreeAccessBanner from "@/components/FreeAccessBanner";
import GuestsMind from "@/components/GuestsMind";
import CelebrationSection from "@/components/CelebrationSection";
import Faq from "@/components/Faq";
import Banner from "@/components/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointUp } from "@fortawesome/free-solid-svg-icons";



export default function Home() {

  const [showBtn, setShowBtn] = useState(false);


  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  }


  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }



  return (
    <div>
      {showBtn && (
        <button
          onClick={topFunction}
          className="fixed bottom-5 right-7 z-50 text-2xl text-white bg-[#d81159] hover:bg-black hover:text-[#d81159] cursor-pointer px-4 py-2 rounded-md shadow-lg"
          title="Go to top"
        >
          Top
          <FontAwesomeIcon icon={faHandPointUp}/>
        </button>
      )}


      <Hero />
      <FreeAccessBanner />
      <GuestsMind />
      <CelebrationSection />
      <Faq />
      <Banner />
      
    </div>
  );
}
