import Image from 'next/image';
import React, { useState } from 'react';

const ToggleMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="">
            <button
                className="hover:scale-110 lg:hidden"
                onClick={toggleMenu}
                id='toggleIcon'
            >
                <Image
                    src={"./assets/menu-vetorGroup.svg"}
                    width={60}
                    height={60}
                    alt='Menu Icon'
                />
            </button>

            {isMenuOpen && (
                <div className={`
                    bg-[#392E2D] border rounded shadow-lg absolute top-[140px]
                    w-screen left-[0px] z-10 text-center opacity-100 text-white
                `}>
                    <ul>
                        <li className="py-2 px-4">Home</li>
                        <li className="py-2 px-4">Menu</li>
                        <li className="py-2 px-4">About</li>
                        <li className="py-2 px-4">Healthy</li>
                        <li className="py-2 px-4">Contact</li>
                    </ul>
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
