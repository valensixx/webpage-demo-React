import React from "react";
import withLayout from "../../layouts/withLayout";
import "../home/Home.css";


function Home(){
    return(
        <main>
            <h1>Hello form Home!</h1>
            <img src ={"/images/1.jpg"}/>
        </main>
    );
}

export default withLayout(Home);