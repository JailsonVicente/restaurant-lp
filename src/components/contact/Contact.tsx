import Image from "next/image"
import Reserve from "./Reserve"
import ContactMedia from "./ContactMedia"

export default function Contact() {
    return (
        <div className={`
            flex  md:px-[99px] md:mb-[132px]
        `} id="Contact">
            <ContactBox></ContactBox>
        </div>
    )
}

function ContactBox() {
    return (
        <div className={`
            flex flex-col w-full
            md:flex-row
        `}>
            <ContactMedia></ContactMedia>
            <Reserve></Reserve>
        </div>
    )
}


