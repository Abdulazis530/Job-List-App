import React from 'react'

export default function Status() {
    return (
        <ul className="status">
            <li className="status__item ">
                <p>All</p>
            </li>
            <li className="status__item active">
                <p>Interview</p>
            </li>
            <li className="status__item">
                <p>Rejected</p>
            </li>
        </ul>
    )
}
