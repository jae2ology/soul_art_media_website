import React from 'react';
import img from './assets/img.png';

export default function Home_Living() {
    return (
        <div className="flex flex-col bg-[#e99a47] p-4 md:p-8 min-h-screen w-full">

            {/* 1. Centered Main Header */}
            <div className="flex justify-center w-full mb-12">
                <h1 className="mt-4 inline-block text-black bg-[#e2e1bf] px-8 py-2 rounded-full font-serif font-bold italic text-4xl shadow-md">
                    Home & Living
                </h1>
            </div>

            {/* 2. Left-Aligned Content Area */}
            <div className="flex flex-col items-start px-4 md:px-12 gap-12">

                {/* --- DECOR SECTION --- */}
                <section className="flex flex-col items-start gap-6">
                    <h3 className="bg-[#e2e1bf] px-8 py-2 rounded-full font-serif font-bold italic text-2xl shadow-md">
                        Decor
                    </h3>

                    {/* Product Card */}
                    <div className="flex flex-col items-center text-center max-w-[250px]">
                        <img
                            src={img}
                            alt="Matter Paper Poster"
                            className="w-full h-auto shadow-xl mb-4"
                        />
                        <div className="font-serif text-gray-800">
                            <p className="font-bold text-lg">Matter Paper Poster</p>
                            <p className="text-sm">5"x7" - 23.3"x33.1"</p>
                            <p className="font-bold">$7 - $25</p>
                        </div>
                    </div>
                </section>

                {/* --- STATIONARY SECTION --- */}
                <section className="flex flex-col items-start gap-6">
                    <h3 className="bg-[#e2e1bf] px-8 py-2 rounded-full font-serif font-bold italic text-2xl shadow-md">
                        Stationary
                    </h3>

                    {/* You can add stationary items here similar to the poster above */}
                </section>

            </div>
        </div>
    );
}