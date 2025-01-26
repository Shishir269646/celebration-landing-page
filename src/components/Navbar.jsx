"use client";
import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import logoImg from "../../public/images/GG Logo.png";

function Navbar() {


    const navName = [
        { href: "#features", secName: "Features" },
        { href: "#howitworks", secName: "How it works" },
        { href: "#faq", secName: "FAQ’s" },
        { href: "#contact", secName: "Contact" },
    ];

    // Smooth scrolling
    const handleSmoothScroll = (event, href) => {
        event.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };



    return (
        <div>
           
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            {navName.map((linkName, index) => (
                                <li key={index} className="font-maiandraGd">
                                    <a
                                        href={linkName.href}
                                        onClick={(e) => handleSmoothScroll(e, linkName.href)}
                                    >
                                        {linkName.secName}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <a className="flex text-2xl font-semibold font-mauline justify-center items-center">
                        <Image src={logoImg} alt="Logo Image" loading="lazy" />
                        Gather Gram
                    </a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navName.map((linkName, index) => (
                            <li key={index} className="font-maiandraGd text-center text-2xl">
                                <a
                                    href={linkName.href}
                                    onClick={(e) => handleSmoothScroll(e, linkName.href)}
                                >
                                    {linkName.secName}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="navbar-end justify-center items-center">
                    <a className="btn text-center text-neutral-50 bg-[#d81159] rounded-3xl text-2xl font-normal font-maiandraGd hover:text-black">
                        Get Started
                    </a>
                </div>
            </div>

            
        </div>
    );
}

export default Navbar;
