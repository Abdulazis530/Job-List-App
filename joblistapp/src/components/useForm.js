import { useState, useEffect } from 'react'

export default function useForm(validate, callback) {
    const [values, setValues] = useState({ company: "", position: "", date: "" })
    const [errorValues, setErrorvalues] = useState({})
    const [submit, setSubmit] = useState(false)

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
            callback()
        }
    }, [errorValues])

    return {
        handleChange,
        handleSubmit,
        values,
        errorValues
    }
}