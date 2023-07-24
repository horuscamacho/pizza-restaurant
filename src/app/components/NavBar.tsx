import Menu from "@/app/components/Menu";
import Link from "next/link";
import CartIcon from "@/app/components/CartIcon";
import Image from "next/image";

export default function NavBar() {
    const user = false
    return (
        <div
            className="h-12 text-red-500 p-4 flex justify-between items-center border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
            <div className="hidden md:flex gap-4 flex-1">
                <Link href="/">Inicio</Link>
                <Link href="/">Menu</Link>
                <Link href="/">Contacto</Link>
            </div>
            {/*LOGO*/}
            <div className="text-xl md:font-bold flex-1 md:text-center">
                <Link href="/">
                    Pizza Shop
                </Link>
            </div>
            {/*MOBILE MENU*/}
            <div className="md:hidden">
                <Menu/>
            </div>
            <div className="hidden md:flex gap-4 items-center justify-end flex-1">
                <div
                    className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md ">
                    <Image src="/phone.png" alt="phone" width={20} height={20}/>
                    <span>771-5554125</span>
                </div>
                {!user ? <Link href={"/login"}>Login</Link> :
                    <Link href={"/orders"}>Orders
                    </Link>
                }
                <CartIcon/>
            </div>
        </div>
    )
}