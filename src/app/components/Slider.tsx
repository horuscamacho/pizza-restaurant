'use client'
import Image from "next/image";
import {useEffect, useState} from "react";

const data = [
    {
        id: 1,
        title: "Nuestras Pizzas siempre tienen ingredientes frescos, siempre llegan calientes y crujientes",
        image: "/slide1.png"
    },
    {
        id: 2,
        title: "Hacemos entregas en cualquier parte de Pachuca, Hidalgo",
        image: "/slide2.png"
    },
    {
        id: 3,
        title: "Las mejores Pizzas para compartir en familia",
        image: "/slide3.jpg"
    }
]

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0)
    useEffect(() => {
        const interval = setInterval(
            () =>
                setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
            4000
        );
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
            {/* TEXT CONTAINER*/}
            <div
                className="h-1/2 flex items-center justify-center flex-col gap-8 text-red-500 font-bold lg:h-full lg:w-1/2">
                <h1 className="text-2xl text-center uppercase p-4 md:text-4xl xl:text-6xl md:p-10">
                    {data[currentSlide].title}
                </h1>
                <button className="bg-red-500 text-white py-4 px-8">Ordena Ahora</button>
            </div>
            {/* IMAGE CONTAINER*/}
            <div className="w-full h-1/2 relative lg:h-full lg:w-1/2">
                <Image src={data[currentSlide].image} alt="pizza guy" fill className="object-cover"/>
            </div>
        </div>
    )
}