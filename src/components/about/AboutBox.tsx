import ButtonAbout from "./ButtonAbout";

export default function AboutBox() {
    return(
        <div className={`
            flex flex-col gap-[42px]
            px-[20px]
            md:max-w-[800px]
            lg:max-w-[600px]
        `}>
            <div>                
                <h2 className=" text-[#D21200] font-medium">About</h2>
                <h1 className="text-black  leading-[106.1%]">Why Freshy?</h1>
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
            <ButtonAbout  title="Learn More"/>

        </div>
    )
}