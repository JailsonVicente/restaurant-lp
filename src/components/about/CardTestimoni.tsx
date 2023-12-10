import Image from "next/image"


interface CardTestimoniProps{
    ImageUrl: string 
    Name: string
}


export default function CardTestimoni(props: CardTestimoniProps){
    return(
        <div className={`
        w-[90vw] h-auto  flex flex-col gap-[13px] py-4
        md:w-[394px] md:h-[286px] md:flex-row
        lg:w-[394px] lg:h-[286px] lg:flex-row
        bg-[#CCC1AA]  drop-shadow-xl items-center text-black
    `}>
        <div className="">
            <Image
                    src={props.ImageUrl}
                    width={115}
                    height={229}
                    alt="Steve"
                    className="lg:ml-[16px]"
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
            <p className="text-[15px]">{props.Name}</p>
        </div>
    </div>
    )
}