export default function AboutBox() {
    return(
        <div className="w-[50%] flex flex-col gap-[42px]">
            <div>                
                <h2 className=" text-[#D21200] font-bold ">About</h2>
                <h1 className="text-black text-[60px] leading-[106.1%]">Why Freshy?</h1>
            </div>

            <div className={`
                text-[#282828] flex flex-col gap-[20px]
            `}>
                    <div>
                        <h3>Chef-Crafted For Pure Joy</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                    </div>

                    <div>
                        <h3>Ingredient You Can Trust</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                    </div>

                    <div>
                        <h3>Special Dishes As You Like</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                    </div>
            </div>

            <button className={`
                w-[178px] h-[46px] rounded-[200px]
                bg-[#D21200] mb-[42px]
            `}>Learn More</button>

        </div>
    )
}