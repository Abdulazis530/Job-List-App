import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import {addJob} from '../../action'
import propTypes from 'prop-types'

export default function InputText({ type, nameInput, placeholder, className }) {

    const [value, setvalue] = useState({
        company: "",
        search: "",
        date: "",
        position: "",
        status: ""
    })


    const handleChange = (e) => {
        setvalue({
            ...value,
            [e.target.name]: e.target.value
        })

    }

    if (type === "date")
        return (
            <input
                type={type}
                name={nameInput}
                value={value[nameInput]}
                placeholder={placeholder}
                className={["input", className].join(" ")}
            />
        )

    return (
        <input
            type="text"
            name={nameInput}
            value={value[nameInput]}
            onChange={handleChange}
            placeholder={placeholder}
            className={["input", className].join(" ")}
            autoComplete="off"
        />

    )
}

InputText.propTypes = {
    nameInput: propTypes.string,
    placeholder: propTypes.string,
    className: propTypes.string,
}