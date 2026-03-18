import React from 'react';

export default function Prints() {
    return (
        <div className="flex flex-col items-center bg-[#e99a47] p-4 md:p-8 min-h-screen w-full">

            <h1 className="mt-4 inline-block text-black bg-[#e2e1bf] px-8 py-2 rounded-full font-serif font-bold italic text-4xl font-medium shadow-md mb-12">
                Prints & Custom Items
            </h1>

            <div className={"flex flex-wrap justify-center gap-6 md:gap-12 text-gray-600"}>
                <a href={"/prints/home"} className="hover:scale-105 transition-transform">
                <h3 className={"mt-4 bg-[#e2e1bf] px-8 py-2 rounded-full font-serif font-bold italic text-2xl font-medium shadow-md"}>
                    Home & Living
                </h3>
                </a>

                <a href={"/prints/malewear"} className="hover:scale-105 transition-transform">
                <h3 className={"mt-4 bg-[#e2e1bf] px-8 py-2 rounded-full font-serif font-bold italic text-2xl font-medium shadow-md"}>
                    Male Wear
                </h3>
                </a>

                <a href={"/prints/femwear"} className="hover:scale-105 transition-transform">
                <h3 className={"mt-4 bg-[#e2e1bf] px-8 py-2 rounded-full font-serif font-bold italic text-2xl font-medium shadow-md"}>
                    Female Wear
                </h3>
                </a>

                <a href={"/prints/accessories"} className="hover:scale-105 transition-transform">
                <h3 className={"mt-4 bg-[#e2e1bf] px-8 py-2 rounded-full font-serif font-bold italic text-2xl font-medium shadow-md"}>
                    Accessories
                </h3>
                </a>
            </div>
        </div>
    )
}