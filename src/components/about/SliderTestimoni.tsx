import { useState } from "react"
import CardTestimoni from "./CardTestimoni"

export default function SliderTestimoni() {

    type Slide = {
        card: React.ReactNode;
    }

    const slides: Slide[] = [
        {
            card: <CardTestimoni ImageUrl="/assets/steve.png" Name="Steve Smith, Director Of Venus" />
        },
        {
            card: <CardTestimoni ImageUrl="/assets/monica.png" Name="Monica Jen, Manager Of Venus" />
        },
        {
            card: <CardTestimoni ImageUrl="/assets/ezekiel.png" Name="Ezekiel Wade, Developer Of Venus" />
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex: any) => {
        setCurrentIndex(slideIndex);
    }

    return (
        <div className={`
            flex flex-col items-center
            w-[90vw] h-auto gap-4
        `}>
            <div className="">
                {slides[currentIndex].card}
            </div>
            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className=''>
                        <input type="radio" id={`radio-${slideIndex}`} checked={currentIndex === slideIndex} readOnly className="hidden" />
                        <label htmlFor={`radio-${slideIndex}`} className="custom-radio"></label>
                    </div>
                ))}
            </div>
            <div className="flex justify-between w-full">
                <button onClick={prevSlide} className={`
                    w-32 h-10
                    rounded-full bg-[#D21200]
                    shadow-lg
                    hover:bg-[#913229]
                    text-white
                    active:-translate-y-1
                `}>Previous</button>
                <button onClick={nextSlide} className={`
                    w-32 h-10
                    rounded-full bg-[#D21200]
                    shadow-lg
                    hover:bg-[#913229]
                    text-white
                    active:-translate-y-1
                `}>Next</button>
            </div>
        </div>
    )
}