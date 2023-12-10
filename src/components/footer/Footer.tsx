export default function Footer() {
    return (
        <footer className={`
            
            bg-[#CCC1AA] w-full flex justify-center items-center py-[46px]
        `}>
            <ul className={`
                flex flex-wrap  justify-center
                max-w-[90vw] text-xl
            `}>
                <li className="w-full lg:w-1/4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8" fill="none">
                        <path d="M8 8L0 0H16L8 8Z" fill="black" />
                    </svg>
                    <h2 className=" md:border-b-[1px] border-black py-[16px] ">Contact</h2>
                    <div className="p-2 border-b-[1px] border-black md:border-none mb-2">
                        <div>Info@freshy.com</div>
                        <div>Contact@freshy.com</div>
                    </div>
                </li>
                <li className="w-full lg:w-1/4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8" fill="none">
                        <path d="M8 8L0 0H16L8 8Z" fill="black" />
                    </svg>
                    <h2 className="md:border-b-[1px] border-black py-[16px]">Drop By</h2>
                    <div className="p-2 border-b-[1px] border-black md:border-none mb-2">
                        <div>St. Downtown,
                            Ottawa, Canada</div>
                        <div>001 213 542 689 256</div>
                    </div>
                </li>
                <li className="w-full lg:w-1/4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8" fill="none">
                        <path d="M8 8L0 0H16L8 8Z" fill="black" />
                    </svg>
                    <h2 className="md:border-b-[1px] border-black py-[16px]">Follow Us</h2>
                    <div className="p-2 border-b-[1px] border-black md:border-none mb-2">
                        <div className="flex flex-col">
                            <div>Instagram</div>
                            <div>Facebook</div>
                            <div>Twitter</div>                            
                        </div>

                    </div>
                </li>
                <li className="w-full lg:w-1/4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8" fill="none">
                        <path d="M8 8L0 0H16L8 8Z" fill="black" />
                    </svg>
                    <h2 className="md:border-b-[1px] border-black py-[16px]">Legal</h2>
                    <div className="p-2 border-b-[1px] border-black md:border-none mb-2">
                        <div>
                            <div>Website Design UI by Matay Creative
                                ©2022. All Rights Reserved</div>
                        </div>
                        <div>
                            <div className="font-bold">Coded by Jailson Vicente</div>
                        </div>
                    </div>
                </li>
            </ul>
        </footer>
    )
}