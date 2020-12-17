import React, { useState } from 'react'
import Pagination from './Pagination'
import Button from './Button'
import Modal from './Modal'




export default function Card({ header, body }) {
    const [isOpen, setIsOpen] = useState(false)
    const toggleModal = () => setIsOpen(!isOpen)

    return (
        <>
            <section className="joblist__section">
                <div className="card">
                    <div className="card__header">
                        {header}
                    </div>
                    <div className="card__body">
                        {body}
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
