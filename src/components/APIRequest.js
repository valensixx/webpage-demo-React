import React, { useEffect, useState, useRef } from "react";

/*TASK 5 
Make request to https://reqres.in/api/users and show user's name,
user's email and image in table.
Add parameter page, as it will have 2 pages.
Create the pages
*/

export default function APIRequest() {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetch('https://reqres.in/api/users?page=' + page)
            .then(response => response.json())
            .then(response => {
                setTotalPages(response.total_pages);
                setUsers(response.data);
            });
    }, [page]);

    function renderTr(user, index) {
        return (
            <tr key={index}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.first_name} {user.last_name}</td>
                <td>
                    <img src={user.avatar} />
                </td>
            </tr>
        );
    }

    function renderPages() {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <li onClick={() => setPage(i)} key={i}>{i}</li>
            );
        }
        return (
            <ul>
                {pages}
            </ul>
        );
    }

    return (
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <td>
                            Id:
                        </td>
                        <td>
                            Email:
                        </td>
                        <td>
                            Name:
                        </td>
                        <td>
                            Image:
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {users.map(renderTr)}
                </tbody>
            </table>
            {renderPages()}
        </div>
    );
}