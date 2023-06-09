import React, { useEffect, useState, useRef } from "react";
import Table from "./Table";
import Pagenation from "./Pagenation";
import Filters from "./Filters";
import User from "./User";

/*TASK 5 
Make request to https://reqres.in/api/users and show user's name,
user's email and image in table.
Add parameter page, as it will have 2 pages.
Create the pages

Task 6
add preview button. On click to do request to https://reqres.in/api/users{id}

Task 7
add text area for filter with results by email.

Task 8
Redefine the code in a different components! 
*/

export default function APIRequest() {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [user, setUser] = useState(null);
    const [userInitials, setUserInitials] = useState([]);

    useEffect(() => {
        fetch('https://reqres.in/api/users?page=' + page)
            .then(response => response.json())
            .then(response => {
                setTotalPages(response.total_pages);
                setUsers(response.data);
                setUserInitials(response.data);
            });
    }, [page]);

    function handalePreview(userId) {
        fetch(`https://reqres.in/api/users/${userId}`)
            .then(response => response.json())
            .then(response => {
                //console.log(response);
                setUser(response.data);
            })
    }

    function onInput(e) {
        let input = e.target.value;
        if (input.length > 0) {
            const filteredUsers = userInitials.filter(user => user.email.includes(input));
            setUsers([...filteredUsers]);
        }
        else {
            setUsers([...userInitials]);
        }
    }

    return (
        <div>
            {user === null &&
                <>
                    <Filters onInput={(e) => onInput(e)} />
                    <Table
                        users={users} handalePreview={(userId) => { handalePreview(userId) }}>
                        <Pagenation totalPages={totalPages} setPage={(i) => setPage(i)} />
                    </Table>
                </>}
            {user !== null && <User user={user} setUser={() => setUser(null)} />}
        </div>
    );
}