import React from 'react'
import trashIcon from '../assets/icons/trash.svg'
import editIcon from '../assets/icons/edit.svg'
import Pagination from './Pagination'
import Status from './Status'
import Button from './Button'
const jobs = [1, 2, 3, 4, 5
]

export default function Card() {
    return (
        <section className="joblist__section">
            <div className="card">
                <div className="card__header">
                    <Status />
                </div>
                <div className="card__body">
                    <table>
                        <tr>
                            <th>No</th>
                            <th>Company</th>
                            <th>Position</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>

                        {jobs.map((e, index) =>

                            <tr key={`job-${index + 1}`}>
                                <td>{index + 1}</td>
                                <td>Alfreds Futterkiste</td>
                                <td>Maria Anders</td>
                                <td>Germany</td>
                                <td>28-10-2020</td>
                                <td className="table__action">
                                    <Button className="btn__delete">
                                        <img src={trashIcon} alt="trash icon" width="15px" height="15px" />
                                        <span> Delete</span>
                                    </Button>

                                    <Button className="btn__edit">
                                        <img src={editIcon} alt="edit icon" width="15px" height="15px" />
                                        <span> Edit</span>
                                    </Button>

                                </td>

                            </tr>


                        )}

                    </table>
                </div>
                <div className="card__footer">
                    <Pagination />
                    <Button className="btn__primary">
                        Add Job
                    </Button>
                </div>

            </div>
        </section>
    )
}
