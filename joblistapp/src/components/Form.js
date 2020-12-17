import React, { useState } from 'react'
import { addJob } from '../actions'
import propTypes from 'prop-types'
import useForm from '../hooks/useForm'
import validate from "../utils/validate"
import Swal from 'sweetalert2'


export default function Form({ onClose }) {
    const [loading, setLoading] = useState(false)
    const submit = () => {
        setLoading(true)
        setTimeout(() => {
            addJob(values)
            setLoading(false)
            onClose()
            Swal.fire({
                icon: 'success',
                title: 'Your job has been added',
                showConfirmButton: false,
            })
        }, 1500)
    };
    const { handleChange, handleSubmit, values, errorValues } = useForm(validate, submit)


    return (
        <form className="form" onSubmit={handleSubmit} noValidate>

            <div className="form-row">
                <label>Company</label>
                <input
                    name="company"
                    placeholder="Add new company"
                    className={`input input-modal ${errorValues.company && "error"}`}
                    onChange={handleChange}
                    value={values.company}
                />
                {
                    errorValues.company && <p className="error-input">{errorValues.company}</p>

                }
            </div>

            <div className="form-row">
                <label>Position</label>
                <input name="position"
                    placeholder="job Position"
                    className={`input input-modal ${errorValues.position && "error"}`}
                    onChange={handleChange}
                    value={values.position}
                />
                {
                    errorValues.position && <p className="error-input">{errorValues.position}</p>

                }
            </div>

            <div className="form-row">
                <label>Date</label>
                <input
                    name="date"
                    placeholder="mm/dd/yyyy"
                    className={`input input-modal ${errorValues.date && "error"}`}
                    onChange={handleChange}
                    value={values.date}
                    type="text"
                    onFocus={(e) => e.target.type = 'date'}

                />{
                    errorValues.date && <p className="error-input">{errorValues.date}</p>

                }
            </div>

            <button className={`btn btn__primary ${loading && "loading"}`} style={{ alignSelf: "flex-end" }} type="submit">
                Save
            </button>
        </form>
    )
}

Form.propTypes = {
    nameinput: propTypes.string,
    placeholder: propTypes.string,
    className: propTypes.string,
}