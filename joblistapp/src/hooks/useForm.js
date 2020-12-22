import { useState, useEffect } from 'react'

export default function useForm(validate, callback, objValue) {
    const [values, setValues] = useState(objValue)
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
        console.log("here")
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