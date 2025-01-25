import React from 'react';


export default function NotFound() {
    return (
        <section className="ezy__httpcodes12 light py-[180px] md:py-[300px] bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative z-[1]">
            <div
                className="bg-cover bg-center bg-no-repeat h-full w-[40vw] absolute top-0 left-0 hidden -z-[1] sm:block"
                style={{
                    backgroundImage:
                        "url(https://cdn.easyfrontend.com/pictures/httpcodes/https10.jpg)",
                }}
            ></div>
            <div className="container px-4">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 md:col-span-8 md:col-start-5 lg:col-span-6 lg:col-start-7 flex flex-col items-center lg:items-start">
                        <h1 className="font-bold text-3xl leading-none md:text-[40px] mb-4">
                            Oh no! Error 404
                        </h1>
                        <p className="text-lg opacity-80 mb-6">
                            Something went wrong, this page is broken.
                        </p>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}