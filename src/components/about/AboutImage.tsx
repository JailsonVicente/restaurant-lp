import Image from "next/image"

export default function AboutImage() {
    return (
        <div className={`
            flex 
        `}>
            <div className={`
            
            `}>
                <Image
                    src="./assets/potato.png"
                    width={263}
                    height={303}
                    alt="Potato"
                    className=""
                />
                <Image
                    src="./assets/beef.png"
                    width={260}
                    height={303}
                    alt="beef"
                    className="ml-[22px] mt-[11px] "
                />
            </div>

            <div>
                <Image
                        src="./assets/bread.png"
                        width={263}
                        height={302}
                        alt="bread"
                        className="ml-[9px] mt-[135px]"
                />
            </div>

        </div>
    )
}