export default function Reserve() {
    return (
        <div className={`
        text-black w-[50%] max-w-[540px] ml-[38px]
        `}>
            <h1>Reserve Your Seat</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
            <button className={`
                flex text-[65px] gap-[120px] border-b-2 border-black
                items-center px-[14px] 
            `}> 
                Book Now
                <svg xmlns="http://www.w3.org/2000/svg" width="81" height="38" viewBox="0 0 81 38" fill="none">
                    <path d="M79.7678 20.7678C80.7441 19.7915 80.7441 18.2085 79.7678 17.2322L63.8579 1.32233C62.8816 0.34602 61.2986 0.34602 60.3223 1.32233C59.346 2.29864 59.346 3.88155 60.3223 4.85786L74.4645 19L60.3223 33.1421C59.346 34.1184 59.346 35.7014 60.3223 36.6777C61.2986 37.654 62.8816 37.654 63.8579 36.6777L79.7678 20.7678ZM0 21.5H78V16.5H0V21.5Z" fill="black" />
                </svg>
            </button>
        </div>
    )
}