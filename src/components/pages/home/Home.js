import React from "react";
import withLayout from "../../layouts/withLayout";
import "../home/Home.css";
import CarCard from "../../card/CarCard";


/*TASK 2 CarCard component with Wrapper(Model,brand, horse power and image of the car)
create array of elements - {brand:"", model:"", image:"",horsePower:""} */

function Home() {
    const cars = [
        { brand: "Mercedes", model: "ML", image: "/images/1.jpg", horsePower: "250hp" },
        { brand: "Audi", model: "A8", image: "/images/2.jpg", horsePower: "200hp" },
        { brand: "BMW", model: "320", image: "/images/3.jpg", horsePower: "150hp" }
    ];
    return (
        <div>
            {cars.map(c => <CarCard {...c} />)}
        </div>
    );
}

export default withLayout(Home);