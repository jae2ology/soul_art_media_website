import React from 'react';
import u from './book_images/u.png';
import book from './book_images/book.png';
import cover from './book_images/cover.png';
import quote from './book_images/quote.png';
import img from './book_images/img.png'
import img_1 from './book_images/img_1.png'
import img_2 from './book_images/img_2.png'
import img_3 from './book_images/img_3.png'
import img_4 from './book_images/img_4.png'


export default function Books() {
    return (
        <div className="flex flex-col items-center bg-[#c14f4c] p-4 md:p-8 min-h-screen w-full">

            <h1 className="mt-4 inline-block text-white bg-[#d192ac] px-8 py-2 m-10 rounded-full font-serif font-bold italic text-4xl font-medium shadow-md">
                Books
            </h1>

            <p className={"mt-10 inline-block text-white bg-[#cb7573] font-serif px-10 py-8 rounded-2xl shadow-md"}>
                Anonymously: The Things I Couldn’t Say Out Loud is a collection of 44 poems born from the moments we were too afraid or too broken to speak. Rooted in faith and the journey of survival, these poems offer companionship to anyone carrying a heavy heart. Whether you are navigating grief, doubt, or the quiet ache of healing, this book reminds you that you are seen, you are not alone, and God is still writing your story.</p>

            <div className={"flex flex-wrap items-center gap-6 md:gap-12 mt-12"}>
                <img src={u} className={"w-40 md:w-64 h-auto rounded-lg shadow-md"}/>
                <img src={book} className={"w-40 md:w-64 h-auto rounded-lg shadow-md"}/>
                <img src={cover} className={"w-40 md:w-64 h-auto rounded-lg shadow-md"}/>
                <img src={quote} className={"w-40 md:w-64 h-auto rounded-lg shadow-md"}/>
            </div>

            <p className={"mt-10 inline-block text-white bg-[#cb7573] px-5 py-5 rounded-full shadow-md font-serif"}>
                Illustrations from the book
            </p>

            <div className={"flex flex-wrap justify-center gap-6 md:gap-12 mt-12"}>
                <img src={img} className={"w-40 md:w-64 h-auto rounded-lg shadow-md"}/>
                <img src={img_1} className={"w-40 md:w-64 h-auto rounded-lg shadow-md"}/>
                <img src={img_2} className={"w-40 md:w-64 h-auto rounded-lg shadow-md"}/>
                <img src={img_3} className={"w-40 md:w-64 h-auto rounded-lg shadow-md"}/>
                <img src={img_4} className={"w-40 md:w-64 h-auto rounded-lg shadow-md"}/>
            </div>

            <p className={"mt-10 inline-block text-white bg-[#cb7573] px-5 py-5 rounded-full shadow-md font-serif"}>
                (Available for sale as prints)
            </p>
        </div>
    )
}