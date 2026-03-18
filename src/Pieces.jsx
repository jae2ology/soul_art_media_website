import React from 'react';

export default function Pieces() {
    return (
        /* Removed fixed gap to allow manual spacing */
        <div className="flex flex-col items-center bg-[#a3dccb] p-4 md:p-8 min-h-screen w-full">

            <h1 className="mt-4 inline-block bg-[#C3B1D1] text-black px-8 py-2 rounded-full font-mono text-4xl font-medium shadow-md">
                Originals
            </h1>

            {/* FIRST & SECOND PIECES: Kept in a narrower container for that "stacked" look */}
            <div className="flex flex-col items-center mt-10 w-full max-w-2xl gap-16 mb-20">
                <div className="flex flex-col items-center">
                    <img src="src/paintings/he.png" className="w-full h-auto shadow-lg rounded-lg" alt="He Who Is"/>
                    <h2 className="mt-4 bg-[#e2e1bf] text-black px-8 py-2 rounded-full shadow-sm text-xl">
                        "He Who Is" - $30
                    </h2>
                </div>

                <div className="flex flex-col items-center">
                    <img src="src/paintings/stream.png" className="w-full h-auto shadow-lg rounded-lg" alt="Drawn to the Stream" />
                    <h2 className="mt-4 bg-[#e2e1bf] text-black px-8 py-2 rounded-full shadow-sm text-xl">
                        "Drawn to the Stream" - $70
                    </h2>
                </div>

                <div className="flex flex-col items-center">
                    <img src="src/paintings/p1.png" className="w-full h-auto shadow-lg rounded-lg" alt="He Who Is"/>
                </div>

                <div className="flex flex-col items-center">
                    <img src="src/paintings/p2.png" className="w-full h-auto shadow-lg rounded-lg" alt="He Who Is"/>
                </div>
            </div>

            {/* THIRD PIECE: The 3-Column Layout.
                Using max-w-none or max-w-7xl allows it to expand in fullscreen. */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 w-full max-w-[1400px] px-4">

                {/* Left Text: Only 'w-72' on desktop so it stays a tall pill shape */}
                <div className="bg-[#E2E6AD] p-8 rounded-[3rem] shadow-sm w-full md:w-72 text-center text-lg leading-relaxed order-2 md:order-1">
                    <p>She carries melodies not everyone hears—rhythms shaped by pain, praise, and quiet prayers. Each brushstroke is a note, each color a feeling she couldn’t say aloud. Through faith, her soul sings.</p>
                </div>

                {/* Center Content: Image is now MUCH larger on desktop (md:w-[600px]) */}
                <div className="flex flex-col items-center gap-4 order-1 md:order-2 w-full md:w-[600px]">
                    <div className="text-center">
                        <h2 className="text-3xl font-serif">“Soundtrack of Her Soul”</h2>
                        <p className="font-bold text-2xl mt-2">$40</p>
                    </div>

                    <img
                        src="src/paintings/soundtrack.png"
                        className="w-full h-auto rounded-md shadow-2xl border-8 border-white/5"
                        alt="Soundtrack of Her Soul"
                    />

                    <p className="text-sm mt-2 text-center font-medium">
                        2025 16in x 20in Oil and other materials on Canvas
                    </p>
                </div>

                {/* Right Text */}
                <div className="bg-[#E2E6AD] p-8 rounded-[3rem] shadow-sm w-full md:w-72 text-center text-lg leading-relaxed order-3">
                    <p>This piece is inspired by Psalm 42:8 — “By day the Lord directs his love, at night his song is with me—a prayer to the God of my life.”</p>
                </div>
            </div>
        </div>
    );
}