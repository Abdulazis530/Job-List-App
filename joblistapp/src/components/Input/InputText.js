import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import {addJob} from '../../action'
import propTypes from 'prop-types'

export default function InputText({ nameInput, placeholder, className }) {


    const dispatch = useDispatch()
    const { inputValue } = useSelector(state => state.jobLists)

    const handleChange = (e) => {

        if (nameInput === "search") dispatch({ type: "SEARCH", target: e.target })
    }

    return (
        <input
            type="text"
            name={nameInput}
            value={inputValue[nameInput]}
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