import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import {addJob} from '../../action'

export default function InputText({ mode }) {

    const [value, setValue] = useState({

    })
    const dispatch = useDispatch()

    // const handleChange = (e) => {

    //     if (mode === "search") dispatch({ type: "SEARCH", e })
    // }

    return (
        <>
            <input
                type={type}
                value={value}
                onChange={handleChange}
            />
        </>
    )
}
