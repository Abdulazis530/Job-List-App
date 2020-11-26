import React from 'react'
import ReactDOM from 'react-dom'
import Form from './Form'
import Input from './Form'



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
                    <Form />
                </div>
            </div>

        </>,
        document.getElementById('portal')
    )
}