import Image from "next/image"
import CardTestimoni from "./CardTestimoni"
import SliderTestimoni from "./SliderTestimoni"


export default function Testimoni(){
    return(
        <div className={`
            pb-[50px] flex flex-col items-center
        `}>
            <div className="text-center my-10">
                <h2>Testimoni</h2>
                <h1>Real Client Review</h1>
            </div>
            <SliderTestimoni/>
        </div>
    )
}
