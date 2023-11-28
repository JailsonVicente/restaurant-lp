import AboutBox from "./AboutBox";
import AboutImage from "./AboutImage";

export default function About() {
    return (

        <section className={`
            w-full flex justify-between flex-wrap items-center
            lg:px-[99px] max-w-[1600px] md:justify-center
        `} id="About">

            <AboutBox></AboutBox>
            <AboutImage></AboutImage>

        </section>


    )
}

