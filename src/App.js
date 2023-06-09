import React from "react";
import Home from "./components/pages/home/Home";
import Quotes from "./components/Quotes";
import FocusBtn from "./components/FocusBtn";
import APIRequest from "./components/APIRequest";

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

/*TASK 4 
Create 2 btn and 2 text fields.
On click - button1 will focus the text field1
On click - button2 will focus the text field2
*/

/*TASK 5 
Make request to https://reqres.in/api/users and show user's name,
user's email and image in table.
Add parameter page, as it will have 2 pages.
Create the pages
*/

export default function App() {
  return (
    <div>
      <Home />
      <Quotes />
      <FocusBtn />
      <APIRequest />
    </div>
  );
}