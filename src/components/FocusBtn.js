import React, {useRef} from "react";

/*TASK 4 
Create 2 btn and 2 text fields.
On click - button1 will focus the text field1
On click - button2 will focus the text field2
*/

export default function FocusBtn(){
    return(
        <div>
            <div>
                <input type="text" />
                <button>Click button 1</button>
            </div>
            <div>
                <input type="text" />
                <button>Click button 2</button>
            </div>
        </div>
    );
}