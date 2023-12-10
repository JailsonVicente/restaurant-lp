interface ButtonProps{
    title: string
}

export default function ButtonAbout(props: ButtonProps){
    return(
        <button className={`
            w-44 h-10
            rounded-full bg-[#D21200]
            shadow-lg
            hover:bg-[#913229]
            active:-translate-y-1
        `}>
            <span className={`
                text-[#EAE5D9] text-2xl text-center leading-none
            `}>{props.title}</span>
        </button>
    )
}