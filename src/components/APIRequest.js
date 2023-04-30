import React,{useEffect, useState, useRef} from "react";

/*TASK 5 
Make request to https://reqres.in/api/users and show user's name,
user's email and image in table.
Add parameter page, as it will have 2 pages.
Create the pages
*/

export default function APIRequest(){
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);


    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <td>
                            
                        </td>
                    </tr>
                </thead>
            </table>
        </div>
    );
}