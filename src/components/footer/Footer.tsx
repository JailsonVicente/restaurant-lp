export default function Footer() {
    return (
        <footer className={`
            
            bg-[#CCC1AA] w-full 
        `}>
            <ul className={`
                flex justify-center
                flex-wrap m-[46px] 
            `}>
                <li className="min-w-[270px] ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8" fill="none">
                        <path d="M8 8L0 0H16L8 8Z" fill="black" />
                    </svg>
                    <h2 className="border-b-[1px] border-black py-[16px] mb-[48px]">Contact</h2>
                    <span>
                        <p>Info@freshy.com</p>
                        <p>Contact@freshy.com</p>
                    </span>
                </li>
                <li className="max-w-[270px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8" fill="none">
                        <path d="M8 8L0 0H16L8 8Z" fill="black" />
                    </svg>
                    <h2 className="border-b-[1px] border-black py-[16px] mb-[48px]">Drop By</h2>
                    <span>
                        <p>St. Downtown,
                            Ottawa, Canada</p>
                        <p>001 213 542 689 256</p>
                    </span>
                </li>
                <li className="max-w-[270px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8" fill="none">
                        <path d="M8 8L0 0H16L8 8Z" fill="black" />
                    </svg>
                    <h2 className="border-b-[1px] border-black py-[16px] mb-[48px]">Follow Us</h2>
                    <span>
                        <p>Instagram
                            Facebook
                            Twitter</p>

                    </span>
                </li>
                <li className="max-w-[270px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8" fill="none">
                        <path d="M8 8L0 0H16L8 8Z" fill="black" />
                    </svg>
                    <h2 className="border-b-[1px] border-black py-[16px] mb-[48px]">Legal</h2>
                    <span>
                        <p>Website Design UI by Matay Creative
                            ©2022. All Rights Reserved</p>
                    </span>
                    <span>
                        <p className="font-bold">Coded by Jailson Vicente</p>
                    </span>
                </li>
            </ul>
        </footer>
    )
}