import AboutBox from "./AboutBox";
import AboutImage from "./AboutImage";

export default function About() {
    return (

        <section className={`
            w-full flex justify-between flex-wrap
            lg:px-[99px] max-w-[1600px]
        `}>

            <AboutBox></AboutBox>
            <AboutImage></AboutImage>

        </section>


    )
}

