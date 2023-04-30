import React from "react";
import Home from "./components/pages/home/Home";
import Quotes from "./components/Quotes";

/*TASK 1 
Create Layout with components - Header, Menu, Footer 
and Home page and use it in App component*/

/*TASK 2 
CarCard component with Wrapper(Model,brand, horse power and image of the car)
create array of elements - {brand:"", model:"", image:"",horsePower:""} 
I type the code in Home component */

/*TASK 3 
Create component Quotes, generating random quote from array in every 10 seconds.
The quotes are taken form array made my me.
I type the code in Quotes component */

export default function App() {
  return (
    <div>
      <Home />
      <Quotes />
    </div>
  );
}