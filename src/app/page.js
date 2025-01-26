"use client"
import React, { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import FreeAccessBanner from "@/components/FreeAccessBanner";
import GuestsMind from "@/components/GuestsMind";
import CelebrationSection from "@/components/CelebrationSection";
import Faq from "@/components/Faq";
import Banner from "@/components/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointUp } from "@fortawesome/free-solid-svg-icons";
import Navbar from "@/components/Navbar";



export default function Home() {

  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const scrollFunction = () => {
      if (
        document.body.scrollTop > 20 || // For Safari
        document.documentElement.scrollTop > 20 // For other browsers
      ) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener("scroll", scrollFunction);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  const topFunction = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };


  return (
    <div>
      {showBtn && (
        <button
          onClick={topFunction}
          className="fixed bottom-5 right-7 z-50 text-2xl text-white bg-[#d81159] hover:bg-black hover:text-[#d81159] cursor-pointer px-4 py-2 rounded-md shadow-lg"
          title="Go to top"
        >
          Top
          <FontAwesomeIcon icon={faHandPointUp} />
        </button>
      )}
      
        <Navbar />
     


      <Hero />
      <FreeAccessBanner />
      <GuestsMind />
      <CelebrationSection />
      <Faq />
      <Banner />

    </div>
  );
}
