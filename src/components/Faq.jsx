"use client";
import React, { useState } from "react";

function Faq() {
    const [activeQuestion, setActiveQuestion] = useState(0);

    const handleQuestionToggle = (index) => {
        setActiveQuestion((prev) => (prev === index ? -1 : index));
    };

    return (
        <div id="faq">
            <div
                className="hero min-h-screen"
            >
                <div className="hero-overlay relative bg-pinkBg max-h-screen">
                    <svg
                        className="h-full w-full"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1728 1520"
                        fill="none"
                    >
                        <g style={{ mixBlendMode: "screen" }} opacity="0.5">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M414.674 890.109C446.584 983.723 397.412 1088.1 304.935 1123.06C212.458 1158.01 163.286 1262.39 195.196 1356.01C225.931 1446.17 182.993 1545.74 97.1552 1584.19C90.6116 1587.12 83.451 1588.33 76.2808 1588.33H-40L-39.9999 -40L854.206 -39.9999C859.282 -25.1078 862.292 -9.98607 863.392 5.05616C864.606 -9.32571 867.573 -23.7677 872.43 -37.9999L1767.57 -38L1767.57 1590.33H1651.16C1643.99 1590.33 1636.83 1589.12 1630.28 1586.19C1544.35 1547.75 1501.36 1448.18 1532.13 1358.01C1564.07 1264.39 1514.85 1160.01 1422.28 1125.06C1329.7 1090.1 1280.48 985.723 1312.42 892.109C1344.37 798.495 1295.14 694.115 1202.57 659.16C1109.99 624.204 1060.77 519.824 1092.71 426.21C1124.66 332.596 1075.43 228.217 982.86 193.261C913.635 167.122 868.328 103.106 863.234 33.3337C857.435 102.327 812.383 165.372 743.891 191.261C651.414 226.217 602.242 330.596 634.152 424.21C666.062 517.824 616.89 622.204 524.413 657.16C431.936 692.115 382.764 796.495 414.674 890.109Z"
                                fill="#EB87AB"
                            />
                        </g>
                    </svg>

                    <svg
                        className="absolute top-10 left-10 w-36 h-36"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 153 153"
                        fill="none"
                    >
                        <g style={{ mixBlendMode: "hard-light" }} opacity="0.6">
                            <path
                                d="M15.3 76.5C49.2407 76.5 76.755 42.2498 76.755 0C76.755 42.2498 104.269 76.5 138.21 76.5C104.269 76.5 76.755 110.75 76.755 153C76.755 110.75 49.2407 76.5 15.3 76.5Z"
                                fill="white"
                            />
                        </g>
                    </svg>

                    <svg
                        className="absolute top-16 right-20 w-64 h-64 rotate-45"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 153 153"
                        fill="none"
                    >
                        <g style={{ mixBlendMode: "hard-light" }} opacity="0.6">
                            <path
                                d="M15.3 76.5C49.2407 76.5 76.755 42.2498 76.755 0C76.755 42.2498 104.269 76.5 138.21 76.5C104.269 76.5 76.755 110.75 76.755 153C76.755 110.75 49.2407 76.5 15.3 76.5Z"
                                fill="white"
                            />
                        </g>
                    </svg>
                    <svg
                        className="absolute bottom-16 right-20 w-48 h-48 rotate-12"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 153 153"
                        fill="none"
                    >
                        <g style={{ mixBlendMode: "hard-light" }} opacity="0.6">
                            <path
                                d="M15.3 76.5C49.2407 76.5 76.755 42.2498 76.755 0C76.755 42.2498 104.269 76.5 138.21 76.5C104.269 76.5 76.755 110.75 76.755 153C76.755 110.75 49.2407 76.5 15.3 76.5Z"
                                fill="white"
                            />
                        </g>
                    </svg>



                </div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-2 font-mauline text-black text-5xl font-bold">
                            Got Questions?
                            <br />
                            We’ve Got <span className="text-[#d81159]"> Answers</span>
                        </h1>
                        <p className="mb-2 text-2xl font-medium font-maiandraGd text-black">
                            Find quick answers to the most common questions
                        </p>

                        <div className="text-black w-full font-maiandraGd text-3xl space-y-3">
                            {[
                                "How secure are financial contributions made through GatherGram?",
                                "Can guests access GatherGram without downloading an app?",
                                "Can I customize the trivia questions and love story on GatherGram?",
                                "What happens to our photos and videos after the wedding?",
                            ].map((question, index) => (
                                <div key={index} className="collapse collapse-arrow">
                                    <input
                                        type="checkbox"
                                        checked={activeQuestion === index}
                                        onChange={() => handleQuestionToggle(index)}
                                    />
                                    <div className="collapse-title text-xl font-medium">
                                        {question}
                                    </div>
                                    <div className="collapse-content text-2xl">
                                        <p>Just Demo Design</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="btn w-full h-10 bg-[#d81159] ring-2 ring-black rounded-[50px] shadow-[-8px_8px_0px_0px_rgba(0,0,0,1.00)] justify-center items-center gap-2.5 inline-flex hover:bg-transparent">
                            <p className="text-center text-black text-xl font-normal font-maiandraGd leading-loose">View More FAQ’s</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;
