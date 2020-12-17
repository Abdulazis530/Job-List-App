import React, { useState } from 'react'
import Pagination from './Pagination'
import Status from './Status'
import Button from './Button'
import Modal from './Modal'
const jobs = [1, 2, 3, 4, 5
]

export default function Card({ children }) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleModal = () => setIsOpen(!isOpen)

    return (
        <>
            <section className="joblist__section">
                <div className="card">
                    <div className="card__header">
                        <Status />
                    </div>
                    <div className="card__body">
                        {children}
                    </div>
                    <div className="card__footer">
                        <Pagination />
                        <Button className="btn__primary" onClick={toggleModal}>
                            Add Job
                    </Button>
                    </div>

                </div>
            </section>

            <Modal isOpen={isOpen} onClose={toggleModal} />
        </>
    )
}
