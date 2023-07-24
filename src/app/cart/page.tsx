import Image from "next/image";

export default function CartPage() {
    return (
        <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
            <div
                className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
                <div className="flex items-center justify-between mb-4 ">
                    <Image src="/temporary/p1.png" alt="temporary" width={100} height={100}/>
                    <div className="">
                        <h2 className="uppercase text-xl font-bold">Sicilian</h2>
                        <span>Large</span>
                    </div>
                    <h3 className="font-bold">$79.90</h3>
                    <span className="cursor-pointer">X</span>
                </div>
                <div className="flex items-center justify-between mb-4 ">
                    <Image src="/temporary/p1.png" alt="temporary" width={100} height={100}/>
                    <div className="">
                        <h2 className="uppercase text-xl font-bold">Sicilian</h2>
                        <span>Large</span>
                    </div>
                    <h3 className="font-bold">$79.90</h3>
                    <span className="cursor-pointer">X</span>
                </div>
                <div className="flex items-center justify-between mb-4 ">
                    <Image src="/temporary/p1.png" alt="temporary" width={100} height={100}/>
                    <div className="">
                        <h2 className="uppercase text-xl font-bold">Sicilian</h2>
                        <span>Large</span>
                    </div>
                    <h3 className="font-bold">$79.90</h3>
                    <span className="cursor-pointer">X</span>
                </div>
            </div>
            <div
                className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
                <div className="flex justify-between">
                    <span className="">Sub Total (3 elementos)</span>
                    <span>$81.70</span>
                </div>
                <div className="flex justify-between">
                    <span className="">Costo del Servicio</span>
                    <span>$0.00</span>
                </div>
                <div className="flex justify-between">
                    <span className="">Costo de Entrega</span>
                    <span className="text-green-500">GRATIS!</span>
                </div>
                <hr className="my-2"/>
                <div className="flex justify-between">
                    <span className="">TOTAL(Incl. Envío)</span>
                    <span className="font-bold">$240.21</span>
                </div>
                <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">Checkout</button>
            </div>
        </div>
    )
}