import { secureHeapUsed } from "crypto";
import Image from "next/image";

export default function Healthy() {
    return (
        <section className={`
            flex flex-col
            item-center item-center
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
            w-screen flex flex-col mt-[100px] mb-[150px] gap-[20px]
            lg:w-full 
        `}>

            <div className="w-full flex flex-row-reverse">
                <div className="w-[70%] flex flex-row-reverse">
                    <Image
                        src="/assets/orangeJuice.png"
                        width={600}
                        height={400}
                        alt="Orange Juice"
                        className=""
                    />
                </div>
            </div>
            <div className="w-[70%]">
                <Image
                    src="/assets/pancake.png"
                    width={600}
                    height={400}
                    alt="Pancake"
                    className=""
                />
            </div>





        </div>
    )
}