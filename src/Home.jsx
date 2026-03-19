import React from 'react';
import soul from './assets/soul.png';
import about from './assets/about.png';
import pieces from './assets/pieces.png';
import books from './assets/books.png';
import prints from './assets/prints.png';
import contact from './assets/img_3.png'

export default function Home() {
    return (
        <div className={"flex flex-col items-center justify-center min-h-screen bg-[#D6BCC8] p-8"}>

            <div className={"mb-12 md:mb-20"}>
                <img src={soul} />
            </div>

            <div className={"flex flex-wrap justify-center gap-6 md:gap-12"}>
                <a href={'/about'} className="hover:scale-105 transition-transform">
                <img src={about} />
                </a>

                <a href={'/pieces'} className="hover:scale-105 transition-transform">
                    <img src={pieces} />
                </a>

                <a href={'/prints'} className="hover:scale-105 transition-transform">
                    <img src={prints} />
                </a>

                <a href={'/books'} className="hover:scale-105 transition-transform">
                    <img src={books} />
                </a>

                <a href={'/contact'} className="hover:scale-105 transition-transform">
                    <img src={contact} />
                </a>

            </div>

        </div>
    )
}