import React from "react";
import withLayout from "../../layouts/withLayout";
import "../home/Home.css";
import CarCard from "../../card/CarCard";


/*TASK 2 CarCard component with Wrapper(Model,brand, horse power and image of the car)
create array of elements - {brand:"", model:"", image:"",horsePower:""} */

const imagePath = "/images";

function Home() {
    const cars = [
        { brand: "Mercedes", model: "ML", img: "/1.jpg", horsePower: "250hp" },
        { brand: "Audi", model: "A8", img: "/2.jpg", horsePower: "200hp" },
        { brand: "BMW", model: "320", img: "/3.jpg", horsePower: "150hp" }
    ];
    return (
        <div style={{padding:20, display:"flex", justifyContent:"space-between", flexWrap:"wrap"}}>
            {cars.map(c => <CarCard {...c} path="/images/" width={"30%"} />)}
        </div>
    );
}

export default withLayout(Home);