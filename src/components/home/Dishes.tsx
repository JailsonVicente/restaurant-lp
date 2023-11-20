import Image from "next/image"


export default function Dishes() {
    return (
        <div className={`
            flex items-center justify-center
            pt-[40px] w-full gap-4
            
        `}>
            <div className="">
                <Image
                    src="/assets/dish1Home.png"
                    width={300}
                    height={300}
                    alt="Dish 1"
                    className=""
                />
            </div>
            <div className="">
            <Image
                src="/assets/dish2Home.png"
                width={400}
                height={394.52}
                alt="Dish 2"
            />
            </div>
            <div className="">
            <Image
                src="/assets/dish3Home.png"
                width={300}
                height={299.2}
                alt="Dish 3"
            />
            </div>



        </div>
    )
}