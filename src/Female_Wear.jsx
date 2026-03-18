import React from 'react';
import img from "./assets/img_2.png";

export default function Female_Wear(){
    return (
        <div className="flex flex-col bg-[#e99a47] p-4 md:p-8 min-h-screen w-full">

            {/* 1. Centered Main Header */}
            <div className="flex justify-center w-full mb-12">
                <h1 className="mt-4 inline-block text-black bg-[#e2e1bf] px-8 py-2 rounded-full font-serif font-bold italic text-4xl shadow-md">
                    Female Wear
                </h1>
            </div>

            {/* 2. Left-Aligned Content Area */}
            <div className="flex flex-col items-start px-4 md:px-12 gap-12">

                {/* --- TOPS SECTION --- */}
                <section className="flex flex-col items-start gap-6">
                    <h3 className="bg-[#e2e1bf] px-8 py-2 rounded-full font-serif font-bold italic text-2xl shadow-md">
                        Tops
                    </h3>

                    {/* Product Card */}
                    <div className="flex flex-col items-center text-center max-w-[250px]">
                        <img
                            src={img}
                        />
                    </div>
                </section>

                {/* --- BBOTTOMS SECTION --- */}
                <section className="flex flex-col items-start gap-6">
                    <h3 className="bg-[#e2e1bf] px-8 py-2 rounded-full font-serif font-bold italic text-2xl shadow-md">
                        Bottoms
                    </h3>

                    {/* You can add stationary items here similar to the poster above */}
                </section>

            </div>
        </div>
    )
}