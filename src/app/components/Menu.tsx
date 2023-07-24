'use client'
import Image from "next/image";
import {useState} from "react";
import Link from "next/link";
import CartIcon from "@/app/components/CartIcon";

const links = [
    {
        id: 1,
        title: 'Inicio',
        url: '/'
    },
    {
        id: 2,
        title: 'Menu',
        url: '/menu'
    },
    {
        id: 3,
        title: 'Horario de Trabajo',
        url: '/'
    },
    {
        id: 4,
        title: 'Contacto',
        url: '/contacto'
    }
]

export default function Menu() {
    const [open, setOpen] = useState(false)
    const user = false
    return (
        <div>
            {!open ?
                <Image src="/open.png" alt="" width={20} height={20} onClick={() => setOpen(true)} priority={true}/> :
                <Image src="/close.png" alt="" width={20} height={20} onClick={() => setOpen(false)} priority={true}/>}
            {open && <div
                className="bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
                {links.map(element => (
                    <Link href={element.url} key={element.id} onClick={() => setOpen(false)}>{element.title}</Link>
                ))}
                {user ? <Link href={'/orders'} onClick={() => setOpen(false)}>Órdenes</Link> :
                    <Link href={'/login'} onClick={() => setOpen(false)}>Iniciar Sesión</Link>}
                <Link href={'/cart'}>
                    <CartIcon/>
                </Link>
            </div>}
        </div>
    )
}