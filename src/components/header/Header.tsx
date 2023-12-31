import Image from "next/image"
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
            <Profile/>
        </header>
    )
}

function Logo() {
    return(
        <div className={`
        
            text-black text-5xl font-['Abril_Fatface'] font-medium
            

        `}>Freshy</div>
    )
}




function Profile(){
    return(
        <Image 
            src={"/assets/profile.png"}
            width={100}
            height={100}
            alt="profile image"
            className="hidden lg:block "
        />
    )
}

