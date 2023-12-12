import { url } from "inspector";
import Image from "next/image";

export default function Background() {
    return (
        <div>
            <Image
                height={200}
                width={200}
                alt="tomato"
                src={"/assets/background/tomato.png"}
                className={`
                        absolute
                        rotate-[-12.991deg] w-20 h-20 left-[-40px]
                        md:w-[200px] md:h-[200px] md:left-[-90px]
                    `}
            />

            <Image
                height={408}
                width={408}
                alt="ellipse1"
                src={"/assets/background/ellipse.png"}
                className={`
                        absolute left-[-204px] top-[300px]
                        md:top-[395px] md:left-[-204px]
                    `}
            />
            <Image
                height={408}
                width={408}
                alt="ellipse2"
                src={"/assets/background/ellipse.png"}
                className={`
                        absolute right-[-112px] top-[1100px] z-10
                        w-[204px] h-[204px]
                        md:w-[408px] md:h-[408px]
                        md:top-[1150px] md:right-[-112px]
                    `}
            />
            <Image
                height={408}
                width={408}
                alt="ellipse3"
                src={"/assets/background/ellipse.png"}
                className={`
                        absolute left-[-112px] top-[4200px] z-10
                        w-[204px] h-[204px]
                        md:top-[2800px] md:left-[-145px] 
                        md:w-[408px] md:h-[408px]
                    `}
            />

        </div>
    )
}