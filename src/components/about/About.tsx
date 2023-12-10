import AboutBox from "./AboutBox";
import AboutImage from "./AboutImage";

export default function About() {
    return (

        <section className={`
            w-full flex flex-wrap justify-between  items-center
            sm:flex
            max-w-[1600px] md:justify-center
    
        `} id="About">

            <AboutBox></AboutBox>
            <AboutImage></AboutImage>

        </section>


    )
}

