import Image from 'next/image';
import React, { useState } from 'react';

const ToggleMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = ()=>{
        setIsMenuOpen(false)
    }

    return (
        <div className="">
            <button
                className="hover:scale-110 lg:hidden"
                onClick={toggleMenu}
                id='toggleIcon'
            >
                <Image
                    src={"/assets/menu-vetorGroup.svg"}
                    width={60}
                    height={60}
                    alt='Menu Icon'
                />
            </button>

            {isMenuOpen && (
                <div className={`
                    left-0 right-0 top-0 bottom-0 fixed
                    flex flex-col 
                    items-center justify-center
                    bg-[#2e2c20]
                    h-screen w-screen z-10 text-center bg-opacity-95 text-white
                `}>
                    <ul className='text-3xl'>
                        <li className="py-2 px-4">Home</li>
                        <li className="py-2 px-4">Menu</li>
                        <li className="py-2 px-4">About</li>
                        <li className="py-2 px-4">Healthy</li>
                        <li className="py-2 px-4">Contact</li>
                    </ul>
                    <button className={`
                        w-[40px] h-[40px] bg-black
                        border-[2px] border-white rounded-full
                        m-[20px]
                    `} onClick={closeMenu}>
                        <span className='text-xl leading-none'>X</span>
                    </button>
                </div>
            )}  {(
                <div className='hidden lg:block'>
                    <ul className={`
                        flex
                    `}>
                        <li className="py-2 px-4">Home</li>
                        <li className="py-2 px-4">Menu</li>
                        <li className="py-2 px-4">About</li>
                        <li className="py-2 px-4">Healthy</li>
                        <li className="py-2 px-4">Contact</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ToggleMenu;
