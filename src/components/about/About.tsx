import AboutBox from "./AboutBox";
import AboutImage from "./AboutImage";

export default function About() {
    return (

        <section className={`
            w-full flex gap-[20px] px-[99px] flex-wrap
        `}>

            <AboutBox></AboutBox>
            <AboutImage></AboutImage>

        </section>


    )
}

