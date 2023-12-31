import Button from "../menu/Button";

export default function HomeBox() {
    return (
        <div className={`
                flex flex-col items-center  relative gap-[60px]
            `}>
            <h1 className={`
                    font-['Henny-Pro'] text-black text-center
                    text-4xl md:text-5xl lg:text-5xl
                    max-w-[900px] font-medium
                `}>
                    Finally, the dish you have been waiting for on your table
            </h1>

            <h2 className={`
                    font-[Maven-Pro] text-center text-[#282828]
                    text-sm md:text-lg lg:text-lg
                    max-w-[600px]
                `}>
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document
            </h2>
            <Button title="Order Now" />
        </div>
    )
}