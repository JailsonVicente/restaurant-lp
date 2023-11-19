import Card from "@/components/menu/Card";
import Image from "next/image";


export default function PaginaCards(){
    return(
        <div className="h-screen bg-slate-600 flex justify-center items-center gap-[66px]">
            <Card
                url="/assets/dish1.png"
                widthImage={250}
                heightImage={200}
                alt="dish1"
                price={10.99}
                title="Beef Cheese Burger"
                description="With Special Sauce"
            />

        </div>
    )
}