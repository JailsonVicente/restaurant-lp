import Image from "next/image"


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
                <CardTestimoni></CardTestimoni>
                <CardTestimoni></CardTestimoni>
                <CardTestimoni></CardTestimoni>
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

function CardTestimoni(){
    return(
        <div className={`
            w-[394px] h-[286px] flex gap-[13px]
            bg-[#CCC1AA]  drop-shadow-xl items-center text-black
        `}>
            <div className="">
                <Image
                        src="/assets/steve.png"
                        width={115}
                        height={229}
                        alt="Steve"
                        className="ml-[16px]"
                />
            </div>
            <div className="max-w-[247px]">
                <Image
                        src="/assets/quote.png"
                        width={24}
                        height={24}
                        alt="quote"
                        className="mb-[22px]"
                />

                <p className="text-[16px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>

                <Image
                        src="/assets/vectorV.png"
                        width={22}
                        height={19.89}
                        alt="v"
                        className="my-[22px]"
                />

                <div className="bg-black bg-opacity-[20%] h-[2px] mb-[7px]"></div>
                <p className="text-[15px]">Steve Smith, Director Of Venus</p>
            </div>
        </div>
    )
}