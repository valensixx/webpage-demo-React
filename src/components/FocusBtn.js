import React, { useRef } from "react";

/*TASK 4 
Create 2 btn and 2 text fields.
On click - button1 will focus the text field1
On click - button2 will focus the text field2
*/

export default function FocusBtn() {
    const refOne = useRef(null);
    const refTwo = useRef(null);

    return (
        <div>
            <div>
                <input type="text" ref={refOne} />
                <button onClick={() =>
                    refOne.current.focus()
                }>Click button 1</button>
            </div>
            <div>
                <input type="text" ref={refTwo} />
                <button onClick={() =>
                    refTwo.current.focus()
                }>Click button 2</button>
            </div>
        </div>
    );
}