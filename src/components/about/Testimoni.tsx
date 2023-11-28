import Image from "next/image"
import CardTestimoni from "./CardTestimoni"


export default function Testimoni(){
    return(
        <div className={`
            pb-[50px] flex flex-col items-center
        `}>
            <div className="text-center">
                <h2>Testimoni</h2>
                <h1>Real Client Review</h1>
            </div>

            <Banner></Banner>

        </div>
    )
}

function Slider(){
    return(
        <div>

        </div>
    )
}

function Banner() {
    return(
        <div className={`
            flex flex-col  items-center 
            my-[50px]
        `}>
            <div className="flex gap-[30px]">
                <CardTestimoni ImageUrl="/assets/steve.png" Name="Steve Smith, Director Of Venus"/>
                <CardTestimoni ImageUrl="/assets/monica.png" Name="Monica Jen, Manager Of Venus"/>
                <CardTestimoni ImageUrl="/assets/ezekiel.png" Name="Ezekiel Wade, Developer Of Venus"/>
            </div>

            <div className="">
                <span className="flex gap-[14px] mt-[88px]">
                    <div className="w-[16px] h-[16px] rounded-full bg-white shadow-md"></div>            
                    <div className="w-[16px] h-[16px] rounded-full bg-red-800 shadow-md"></div>
                    <div className="w-[16px] h-[16px] rounded-full bg-white shadow-md"></div>
                </span>
            </div>

        </div>
    )
}

