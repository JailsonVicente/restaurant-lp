import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const ToggleMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <div className="font-['Abril-Fatface'] ">
            <button
                className={`
                    hover:scale-110 lg:hidden  w-[60px] h-[60px]
                    fixed right-4 top-8 z-50
                    active:-translate-y-1
                `}
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
                    h-screen w-screen z-40 text-center bg-opacity-95 text-white
                `}>
                    <ul className='text-3xl'>
                        <li className="py-2 px-4 hover:shadow-md hover:shadow-slate-50 rounded-full">
                            <Link href={"#Home"} onClick={closeMenu}>Home</Link>
                        </li>
                        <li className="py-2 px-4 hover:shadow-md hover:shadow-slate-50 rounded-full">
                            <Link href={"#Menu"} onClick={closeMenu}>Menu</Link>
                        </li>
                        <li className="py-2 px-4 hover:shadow-md hover:shadow-slate-50 rounded-full">
                            <Link href={"#Healthy"} onClick={closeMenu}>Healthy</Link>
                        </li>
                        <li className="py-2 px-4 hover:shadow-md hover:shadow-slate-50 rounded-full">
                            <Link href={"#About"} onClick={closeMenu}>About</Link>
                        </li>
                        <li className="py-2 px-4 hover:shadow-md hover:shadow-slate-50 rounded-full">
                            <Link href={"#Contact"} onClick={closeMenu}>Contact</Link>
                        </li>
                    </ul>
                </div>
            )}  {(
                <div className='hidden lg:block'>
                    <ul className={`
                        flex text-xl
                    `}>
                        <li className="py-2 px-4">
                            <Link href={"#Home"} onClick={closeMenu}>Home</Link>
                        </li>
                        <li className="py-2 px-4">
                            <Link href={"#Menu"} onClick={closeMenu}>Menu</Link>
                        </li>
                        <li className="py-2 px-4">
                            <Link href={"#Healthy"} onClick={closeMenu}>Healthy</Link>
                        </li>
                        <li className="py-2 px-4">
                            <Link href={"#About"} onClick={closeMenu}>About</Link>
                        </li>
                        <li className="py-2 px-4">
                            <Link href={"#Contact"} onClick={closeMenu}>Contact</Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ToggleMenu;
