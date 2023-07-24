import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">
            {/* BOX */}
            <div
                className=" h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2">
                {/* IMAGE CONTAINER */}
                <div className="relative h-1/3 w-full md:h-full md:w-1/2">
                    <Image src="/loginBg.png" alt="login image" fill className="object-cover"/>
                </div>
                {/* FORM CONTAINER */}
                <div className="p-10 flex flex-col gap-8 md:w-1/2">
                    <h2 className="font-bold text-xl xl:text-3xl">Bienvenido</h2>
                    <p>Inicia Sesión o crea una cuenta para ordenar.</p>
                    <button className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md">
                        <Image
                            src="/google.png"
                            alt=""
                            width={20}
                            height={20}
                            className="object-contain"
                        />
                        <span>Inicia sesión con Google</span>
                    </button>
                    <button className="flex gap-4 p-4 ring-1 ring-blue-100 rounded-md">
                        <Image
                            src="/facebook.png"
                            alt=""
                            width={20}
                            height={20}
                            className="object-contain"
                        />
                        <span>Inicia Sesión con Facebook</span>
                    </button>
                    <p className="text-sm">
                        Problemas para iniciar sesión? <Link className="underline" href="/">Contáctanos</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};