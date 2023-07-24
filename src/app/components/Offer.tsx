import Image from "next/image";
import CountDown from "@/app/components/CountDown";


export default function Offer() {
    return (
        <div
            className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
            <div className="flex-1 flex flex-col items-center text-center gap-8 p-6">
                <h2 className="text-white text-5xl font bold xl:text-6xl">Hamburguesa con papas a la francesa.</h2>
                <p className="text-white xl:text-xl">
                    Carne premium 100% de res, Hamburguesa a las brasas con queso cheddar, lechuga, tomate, cebolla,
                    pepinillos, mayonesa y mostaza. Acompañada de papas a la francesa.
                </p>
                <CountDown/>
                <button className="bg-red-500 text-white rounded-md py-3 px-6">Ordena ahora</button>
            </div>
            <div className="relative flex-1 w-full md:h-full">
                <Image src="/offerProduct.png" alt="Pizza Offer" fill className="object-contain" priority={true}/>
            </div>
        </div>
    )
}