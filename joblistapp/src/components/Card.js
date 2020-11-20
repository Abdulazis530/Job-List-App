import React from 'react'
import trashIcon from '../assets/icons/trash.svg'
import editIcon from '../assets/icons/edit.svg'
const jobs = [1, 2, 3, 4, 5
]

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
                <div className="card__body">
                    <table>
                        <tr>
                            <th>No</th>
                            <th>Company</th>
                            <th>Position</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>

                        {jobs.map((e, index) =>

                            <tr key={`job-${index + 1}`}>
                                <td>{index + 1}</td>
                                <td>Alfreds Futterkiste</td>
                                <td>Maria Anders</td>
                                <td>Germany</td>
                                <td className="table__action">
                                    <button className="btn btn__delete">
                                        <img src={trashIcon} alt="trash icon" />
                                        <span> Delete</span>
                                    </button>

                                    <button className="btn btn__edit">
                                        <img src={editIcon} alt="edit icon" />
                                        <span> Edit</span>
                                    </button>
                                </td>

                            </tr>


                        )}

                    </table>
                </div>
            </div>
        </section>
    )
}
