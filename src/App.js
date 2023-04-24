import React from "react";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";

/*Create Layout with components - Header, Menu, Footer 
and Home page and use it in App component*/

export default function App(){
  return(
    <div>
      <Header />
      <Menu/>
    </div>
  );
}