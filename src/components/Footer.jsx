"use client"
import React, { useState} from "react";
import Image from 'next/image';
import logoImg from '../../public/images/GG Logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";







const Footer = ({ currentYear }) => {

  const socialLinks = [
    {
      href: '#!',
      smIcon: faFacebookF,
    },
    {
      href: '#!',
      smIcon: faInstagram,
    },
    {
      href: '#!',
      smIcon: faTwitter,
    },
    {
      href: '#!',
      smIcon: faLinkedin,
    },
  ];
  
  const sections = [
    {
      title: 'Adventures',
      links: [
        { text: 'Lost Worlds', href: '#!' },
        { text: 'Unknown Journeys', href: '#!' },
        { text: 'Hidden Treasures', href: '#!' },
        { text: 'Enchanted Realms', href: '#!' },
      ],
    },
    {
      title: 'Challenges',
      links: [
        { text: 'Conquer Mountains', href: '#!' },
        { text: 'Oceanic Odyssey', href: '#!' },
        { text: 'Space Quest', href: '#!' },
        { text: 'Desert Expeditions', href: '#!' },
      ],
    },
    {
      title: 'Get Started',
      links: [
        { text: 'Join Us', href: '#!' },
        { text: 'Calendar', href: '#!' },
        { text: 'Contact', href: '#!' },
        { text: 'Blog', href: '#!' },
      ],
    },
  ];

  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  


  return (
    <footer className="bg-[#0d0d0d] text-center text-neutral-50 dark:bg-neutral-600 dark:text-neutral-200">
      {/* Social Media */}
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="flex justify-center items-center">
          {socialLinks.map(({ href, smIcon }, index) => (
            
              <FontAwesomeIcon 
              key={index}
              className="mr-6 h-6 w-6 text-neutral-50 dark:text-neutral-200"
              icon={smIcon}
              href="#!"
              />
              
            
          ))}
        </div>
      </div>

      {/* Main Container */}
      <div className="mx-6 pt-8 pb-4 text-center">
        {/* Text */}
        <div className="text-neutral-50 mb-6">
          <h5 className="mb-2 font-bold text-3xl font-mauline uppercase">Gather Gram</h5>
          <p className="mb-4 font-maiandraGd text-xl font-normal">
            We bring all your wedding essentials into one hassle-free, secure, and budget-friendly platform designed to make your day as seamless as it is unforgettable.

          </p>
        </div>

        {/* Sections */}
        <div className="grid grid-cols-1 font-maiandraGd md:grid-cols-3 mb-4">
          {sections.map(({ title, links }, index) => (
            <div key={index} className="mb-6">
              <h5 className="mb-2.5 font-bold text-neutral-50 hover:text-pinkBg dark:text-neutral-200">
                {title}
              </h5>
              <ul className="mb-0 list-none">
                {links.map(({ text, href }, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={href}
                      className="text-neutral-50 hover:text-pinkBg dark:text-neutral-200"
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="relative mb-7">
          <form onSubmit={handleShowAlert}>

            {/*Alart*/}
            {showAlert && (
              <div role="alert" className="alert w-auto alert-success fixed flex">
                <FontAwesomeIcon className="h-6 w-6 shrink-0 stroke-current" icon={faCircleCheck}/>
                <span className="font-maiandraGd">Sign up successfully!</span>
              </div>



            )}





            <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-5 mb-6">
              {/* Sign-up text */}
              <div className="md:ml-auto">
                <p className="font-bold text-neutral-50 text-3xl font-mauline leading-10">Sign up for our newsletter</p>
              </div>
              {/* Input */}
              <div>
                <input
                  type="email"
                  placeholder="Your address"
                  className="w-full block font-maiandraGd text-black rounded-lg border dark:border-none dark:bg-neutral-700 py-[9px] px-3 pr-4 text-sm focus:border-pinkBg focus:ring-1 focus:ring-pinkBg focus:outline-none"
                  required
                />
              </div>
              {/* Button */}
              <div className="md:mr-auto">
                <button
                  type="submit"
                  className="inline-block font-maiandraGd rounded bg-[#d81159] text-black shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-pinkBg hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-pinkBg:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#0d0d0d] font-maiandraGd p-6 text-center dark:bg-neutral-700 flex justify-center items-center">
        <span>© {currentYear} Copyright: </span>
        <a className="mx-3" href="#">
          <Image
            src={logoImg}
            alt="GG Logo"
            width={56}
            height={56}
            layout="fixed"
            loading="lazy"
          />
        </a>
        <a
          className="font-bold text-3xl font-mauline text-neutral-50 dark:text-neutral-400"
          href="#"
        >
          Gather Gram
        </a>
      </div>
    </footer>
  );
};

export default Footer;

