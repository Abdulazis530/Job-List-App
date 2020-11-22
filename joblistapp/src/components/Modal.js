import React from 'react'
import ReactDOM from 'react-dom'
import Input from './Input'



export default function Modal({ isOpen, onClose }) {

    if (!isOpen) return null




    return ReactDOM.createPortal(
        <>
            <div className="overlay"></div>
            <div className="modal">
                <h2 className="modal__title">Add a New Job</h2>
                <button className="btn modal__close" onClick={onClose}>
                    <i className="modal__close-icon far fa-times-circle"></i>
                </button>

                <div className="modal__body">
                    <label>Company</label>
                    <Input nameInput="company" placeholder="Add new company" className="modal__input" />
                    <label>Position</label>
                    <Input nameInput="position" placeholder="job Position" className="modal__input" />
                    <label>Date</label>
                    <Input nameInput="date" placeholder="date" className="modal__input" type="date" />

                </div>
            </div>

        </>,
        document.getElementById('portal')
    )
}