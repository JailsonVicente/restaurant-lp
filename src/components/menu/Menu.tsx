import Card from "./Card";


export default function Menu(){
    return(
        <section className={`
            flex flex-col text-black text-center
            items-center gap-10 py-[20px] w-full max-w-[1600px]
            mb-[100px] z-20
        `} id="Menu">
            <h1 className="text-5xl">Top List is Back</h1>
            <h2>All our best meals in one delicius snap</h2>
            <div className={`
                flex flex-wrap items-center justify-center
                gap-[67px] mt-8
            `}>
                <Card 
                    url="/assets/dish1.png"
                    widthImage={250}
                    heightImage={200}
                    alt="Dish1"
                    price={10.99}
                    title="Beef Cheese Burger"
                    description="With Special Sauce"
                    stars={"5.0"}
                />
                <Card 
                    url="/assets/dish2.png"
                    widthImage={250}
                    heightImage={200}
                    alt="Dish2"
                    price={8.99}
                    title="Mixed Salad"
                    description="With Special Sauce"
                    stars={"5.0"}
                />
                <Card 
                    url="/assets/dish3.png"
                    widthImage={250}
                    heightImage={200}
                    alt="Dish3"
                    price={12.99}
                    title="Chicken Spaghetti"
                    description="With Special Sauce"
                    stars={"5.0"}
                />
                <Card 
                    url="/assets/dish4.png"
                    widthImage={250}
                    heightImage={200}
                    alt="Dish4"
                    price={14.99}
                    title="Vegan Chinese"
                    description="With Special Sauce"
                    stars={"5.0"}
                />
                <Card 
                    url="/assets/dish5.png"
                    widthImage={250}
                    heightImage={200}
                    alt="Dish5"
                    price={16.99}
                    title="Chessy Pizza"
                    description="With Special Sauce"
                    stars={"5.0"}
                />
            </div>
        </section>
    )
}