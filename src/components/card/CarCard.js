import React from "react";
import "./CarCard.css";

export default function CarCard(props) {
    return (
        <div className="card">
            <img src={`${props.imagePath}/${props.img}`} alt={props.model} />
            <div className="card-content">
                <h2>{props.brand} - {props.model}</h2>
                <p>{props.horsePower} Horse Power</p>
                <button>Learn more!</button>
            </div>
        </div>
    );
}