import React from "react";
import Header from "../header/Header";
import Menu from "../menu/Menu";
import Footer from "../footer/Footer";

export default function withLayout(Component){
    const layout = (props) => {
        return(
            <>
                <Header />
                <Menu />
                <Component {...props} />
                <Footer />
            </>
        );
    }

    return layout;

}