'use client'
import Countdown from "react-countdown";

const endingDate = new Date('2023-07-31T00:00:00');
export default function CountDown() {
    return (
        <Countdown className="font-bold text-yellow-300 text-5xl " date={endingDate}/>
    )
}