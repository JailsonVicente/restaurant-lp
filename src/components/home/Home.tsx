import Dishes from "./Dishes";
import HomeBox from "./HomeBox";

export default function Home() {
    return (
        <section className={`
            w-full h-auto 
            flex flex-col items-center py-[60px]
        `} id="Home">
            <HomeBox></HomeBox>
            <Dishes></Dishes>
        </section>
    )
}

