import React from 'react'

export default function Card() {
    return (
        <section className="joblist__section">
            <div className="card">
                <div className="card__header">
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
                </div>

            </div>
        </section>
    )
}
