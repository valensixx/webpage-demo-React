import React from "react";

export default function Filters(props) {
    return (
        <>
            <div>
                <input type="text" onInput={(e) => {
                    props.onInput(e);
                }} />
            </div>
        </>
    );
}