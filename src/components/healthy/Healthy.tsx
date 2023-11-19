import { secureHeapUsed } from "crypto";
import Image from "next/image";

export default function Healthy() {
    return (
        <section className={`
            flex flex-col
            item-center item-center
        `}>

            <HealthyBox></HealthyBox>
            <HealthyImg></HealthyImg>


        </section>
    )
}

function HealthyBox() {
    return(
        <div className={`
        bg-[#392E2D] flex flex-wrap p-10 max-w-[1150px] text-white mt-[200px]
    `}>

        <span className="text-[73px] leading-[77px] text-center w-full font-normal mb-[40px]">For super nutrition, the chic and health conscious flock to Freshy</span>

        <div className="w-[50%] flex flex-col items-center justify-center gap-10">
            <span className="text-[200px] leading-[200px]">150+</span>
            <p className="text-[23px] leading-[25px] text-white">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.</p>
        </div>

        <div className=" flex items-center w-[50%] justify-center">
            <div className="w-[60%] h-[403px]">
                <Image
                    src="/assets/image1.png"
                    width={269}
                    height={403}
                    alt="dish"
                    className="relative left-[0px] "
                />
                <Image
                    src="/assets/image2.png"
                    width={269}
                    height={403}
                    alt="dish"
                    className="relative left-[0px] top-[-400px] z-20 rotate-[11.187deg]"
                />
            </div>
            <button className="rounded-full bg-white w-[126px] h-[126px] text-black">ReadMore</button>
        </div>
    </div>
    )
}


function HealthyImg() {
    return (
        <div className={`
            w-full flex flex-col mt-[150px] mb-[150px]
        `}>

            <Image
                src="/assets/orangeJuice.png"
                width={600}
                height={400}
                alt="Orange Juice"
                className="pr-[30px] "
            />

            <Image
                src="/assets/pancake.png"
                width={600}
                height={400}
                alt="Pancake"
                className=" relative ml-[50%] top-[-100px] pl-[30px]"
            />

        </div>
    )
}