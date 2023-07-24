import Link from "next/link";

export default function Footer() {
    return (
        <div className="uppercase h-12 md:h-24 p-4 lg:p-20 xl:p-40 text-red-500 flex items-center justify-between">
            <Link href={'/'}
                  className="font-bold text-xl"
            >Pizza
                Shop</Link>
            <p>All Rights Reserved.</p>
        </div>
    )
}