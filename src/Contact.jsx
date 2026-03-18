import React from 'react';

export default function Contact() {
    return (
        <div className={"flex flex-col items-center bg-[#dbbdcb] p-4 md:p-8 min-h-screen w-full text-white"}>
            <h1 className="mt-4 inline-block text-white bg-[#d192ac] px-8 py-2 m-10 rounded-full font-serif font-bold italic text-4xl font-medium shadow-md">
                Contact Me
            </h1>

            <details className="collapse bg-[#d192ac] border border-base-300" name="my-accordion-det-1" open>
                <summary className="collapse-title font-semibold">Email</summary>
                <div className="collapse-content text-sm">italyacarter@gmail.com
                </div>
            </details>
            <details className="collapse bg-[#d192ac] border border-base-300" name="my-accordion-det-1">
                <summary className="collapse-title font-semibold">Instagram</summary>
                <div className="collapse-content text-sm">@italyacarter
                </div>
            </details>
            <details className="collapse bg-[#d192ac] border border-base-300" name="my-accordion-det-1">
                <summary className="collapse-title font-semibold">Linkedin</summary>
                <div className="collapse-content text-sm">Italya Carter
                </div>
            </details>
        </div>
    )
}