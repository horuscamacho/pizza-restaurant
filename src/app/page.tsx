import Image from 'next/image'
import Slider from "@/app/components/Slider";
import FeaturedItems from "@/app/components/FeaturedItems";
import Offer from "@/app/components/Offer";

export default function Home() {
    return (
        <main>
            <Slider/>
            <FeaturedItems/>
            <Offer/>
        </main>
    )
}
