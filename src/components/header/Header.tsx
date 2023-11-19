import ToggleMenu from "./ToggleMenu"


export default function Header() {
    return (
        <header className={`
            h-[140px] w-full bg-white
            flex items-center justify-between
            p-[24px] md:p-[48px] lg:p-[98px]

        `}>
            <Logo></Logo>
            <ToggleMenu></ToggleMenu>
            <Profile></Profile>
        </header>
    )
}

function Logo() {
    return(
        <div className={`
        
            text-black text-5xl font-['Henny_Pro'] font-medium
            

        `}>Freshy</div>
    )
}




function Profile(){
    return(
        <img src="/assets/profile.png" className="hidden lg:block"></img>
    )
}

