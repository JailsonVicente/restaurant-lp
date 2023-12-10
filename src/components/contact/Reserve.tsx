import Image from "next/image";

export default function Reserve() {
    return (
        <div className={`
        text-black w-[90vw]  flex flex-col gap-6 m-2 
        md:max-w-[540px] md:ml-[38px] 
        `}>
            <h1>Reserve Your Seat</h1>
            <p className="text-[25px] w-full">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
            <div className="w-full flex justify-center">
                <button className={`
                font-['Abril-Fatface']
                flex  justify-between border-b-2 border-black
                items-center px-[14px] font-bold w-full p-2
                text-3xl mb-6
                hover:bg-zinc-300 hover:rounded-lg
                active:-translate-y-1
            `}>
                    Book Now
                    <Image 
                        src={"/assets/arrow.png"}
                        width={81}
                        height={38}
                        alt="Arrow"
                    />
                </button>
            </div>
        </div>
    )
}