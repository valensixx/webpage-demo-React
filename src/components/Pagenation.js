import React from "react";

export default function Pagenation(props) {
    const pages = [];
    for (let i = 1; i <= props.totalPages; i++) {
        pages.push(
            <li className="page-button"
                style={{ cursor: 'pointer' }}
                onClick={() => props.setPage(i)} key={i}>{i}
            </li>
        );
    }
    return (
        <ul>
            {pages}
        </ul>
    );
}