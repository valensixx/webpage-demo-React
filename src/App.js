import React from "react";
import Home from "./components/pages/home/Home";

/*TASK 1 Create Layout with components - Header, Menu, Footer 
and Home page and use it in App component*/

/*TASK 2 CarCard component with Wrapper(Model,brand, horse power and image of the car)
create array of elements - {brand:"", model:"", image:"",horsePower:""} */

export default function App(){
  return(
    <div>
      <Home/>
    </div>
  );
}