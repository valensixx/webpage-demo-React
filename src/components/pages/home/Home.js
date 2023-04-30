import React from "react";
import withLayout from "../../layouts/withLayout";
import "../home/Home.css";


/*TASK 2 CarCard component with Wrapper(Model,brand, horse power and image of the car)
create array of elements - {brand:"", model:"", image:"",horsePower:""} */

function Home() {
    const cars=[
        {brand:"Mercedes", model:"ML", image:"/images/mb-ml.jpg", horsePower:"250hp"},
        {brand:"Audi", model:"A8", image:"/images/audiA8.jpg", horsePower:"200hp"},
        {brand:"BMW", model:"320", image:"/images/bmw-320.jpg", horsePower:"150hp"}
    ];
    return (
        <div>
           
        </div>
    );
}

export default withLayout(Home);