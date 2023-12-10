import { url } from "inspector";
import Image from "next/image";

export default function Background(){
    return(
        <div>
            <div className="w-[50px] h-[50px]">
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
            </div>
            <div className="w-auto h-auto">
                <Image 
                    height={408}
                    width={208}
                    alt="ellipse"
                    src={"/assets/background/ellipse7.png"}
                    className={`
                        absolute left-[-50px] top-[300px] w-[200px] h-auto
                        md:top-[395px] md:left-0
                    `}
                />
            </div>
        </div>
    )
}