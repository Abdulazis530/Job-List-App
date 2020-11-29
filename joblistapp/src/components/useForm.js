import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function useForm(validate) {
    const [values, setValues] = useState({ company: "", position: "", date: "" })
    const [errorValues, setErrorvalues] = useState({})
    const [submit, setSubmit] = useState(false)
    const dispatch = useDispatch()
    const handleChange = (e) => {

        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }


    const handleSubmit = e => {
        e.preventDefault();
        setErrorvalues(validate(values))
        setSubmit(true)
    }

    useEffect(() => {

        if (!Object.keys(errorValues).length && submit) {
            dispatch({ type: "ADD_DATA", values })
        }
    }, [errorValues])

    return {
        handleChange,
        handleSubmit,
        values,
        errorValues
    }
}