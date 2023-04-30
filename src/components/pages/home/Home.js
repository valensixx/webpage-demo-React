import React from "react";
import "../home/Home.css";
import withLayout from "../../layouts/withLayout";

function Home(){
    return(
        <main>
            <h1>Hello form Home!</h1>
        </main>
    );
}

export default withLayout(Home);