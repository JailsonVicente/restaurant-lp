import { secureHeapUsed } from "crypto";
import Image from "next/image";

export default function Healthy() {
    return (
        <section className={`
            flex flex-col
            item-center item-center z-20
        `} id="Healthy">

            <HealthyBox></HealthyBox>
            <HealthyImg></HealthyImg>


        </section>
    )
}

function HealthyBox() {
    return (
        <div className={`
        flex w-screen
        bg-[#392E2D] text-white 
        lg:max-w-[1150px] flex-wrap
    `}>

            <span className={`
            text-[36px] leading-none mt-[40px]
            lg:text-[73px]  text-center w-full
        `}>For super nutrition, the chic and health conscious flock to Freshy</span>

            <div className={`
                flex flex-col justify-between m-0 gap-5
                lg:flex-row items-center my-5
            `}>
                <div className={`
                    w-full px-[10%]
                    lg:w-1/2 p-
                `}>
                    <span className={`
                        text-[150px]
                        lg:text-[200px]
                    `}>150+</span>
                    <p className="text-[23px] leading-[25px] text-white">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.</p>
                </div>

                <div className="flex items-center max-w-[90%] gap-3 px-[20px]">
                    <div className="relative w-full flex">
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
                            className="absolute left-[0px] top-[0px] z-20 rotate-[11.187deg]"
                        />
                    </div>
                    <div>
                        <button className="rounded-full bg-white w-[126px] h-[126px] text-black active:-translate-y-1">ReadMore</button>
                    </div>
                </div>
            </div>



        </div>
    )
}


function HealthyImg() {
    return (
        <div className={`
            relative h-[500px] md:h-[744px]
            w-screen flex flex-col mt-[100px] mb-[150px] gap-[20px]
            lg:w-full
        `}>
                <div className="">
                    <Image
                        src="/assets/orangeJuice.png"
                        width={580}
                        height={380}
                        alt="Orange Juice"
                        className="w-[80vw] md:w-[580px] z-20"
                    />
                </div>

            <div className="absolute right-0 bottom-0">
                <Image
                    src="/assets/pancake.png"
                    width={580}
                    height={380}
                    alt="Pancake"
                    className="w-[80vw] md:w-[580px]"
                />
            </div>





        </div>
    )
}