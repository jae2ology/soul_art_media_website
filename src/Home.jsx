import React from 'react';

export default function Home() {
    return (
        <div className={"flex flex-col items-center justify-center min-h-screen bg-[#D6BCC8] p-8"}>

            <div className={"mb-12 md:mb-20"}>
                <img src={"src/assets/soul.png"} />
            </div>

            <div className={"flex flex-wrap justify-center gap-6 md:gap-12"}>
                <a href={'/about'} className="hover:scale-105 transition-transform">
                <img src={"src/assets/about.png"} />
                </a>

                <a href={'/pieces'} className="hover:scale-105 transition-transform">
                    <img src={"src/assets/pieces.png"} />
                </a>

                <a href={'/prints'} className="hover:scale-105 transition-transform">
                    <img src={"src/assets/prints.png"} />
                </a>

                <a href={'/books'} className="hover:scale-105 transition-transform">
                    <img src={"src/assets/books.png"} />
                </a>

                <a href={'/contact'} className="hover:scale-105 transition-transform">
                    <img src={"src/assets/img_3.png"} />
                </a>

            </div>

        </div>
    )
}