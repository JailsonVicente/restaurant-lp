import Image from "next/image"

interface CardProps {
    price: number
    title: string
    description: string
    stars: string
    alt: string
    widthImage?: number
    heightImage?: number
    url: string
}

export default function Card(props: CardProps) {
    return (
        <div className={`
        flex flex-col px-[35px] items-center
        bg-[#392E2D] gap-[42px] text-white
        w-[350px] h-[350px] rounded-[15px]
        `}>
            <section className="relative w-full h-[129px]">
                <Image
                    src={props.url}
                    width={props.widthImage}
                    height={props.heightImage}
                    alt={props.alt}
                    className="relative left-[-85px] top-[-60px]"
                />
                <h2 className={`
                    absolute right-[0px] top-[89px]
                    text-[30px] leading-[40px]
                    font-semibold text-white
                `}>
                    ${props.price}
                </h2>
            </section>
            <section className="flex flex-col gap-[1px] text-left w-full">
                <h2 className={`
                    text-[30px] leading-[40px] text-white
                `}>
                    {props.title}
                </h2>
                <h3 className={`
                    text-[20px] leading-[26px] text-white
                `}>
                    {props.description}
                </h3>
            </section>
            <section className="flex justify-between w-full">
                <span>{props.stars}</span>
                <Image 
                    src={"/assets/cardIcon.png"}
                    width={23}
                    height={22.31}
                    alt="Card Icon"
                />
            </section>
        </div>
    )
}




