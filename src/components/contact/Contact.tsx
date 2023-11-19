import Image from "next/image"
import Reserve from "./Reserve"
import ContactMedia from "./ContactMedia"

export default function Contact() {
    return (
        <div className={`
            flex  px-[99px] mb-[132px]
        `}>
            <ContactBox></ContactBox>
        </div>
    )
}

function ContactBox() {
    return (
        <div className="flex">
            <ContactMedia></ContactMedia>
            <Reserve></Reserve>
        </div>
    )
}


