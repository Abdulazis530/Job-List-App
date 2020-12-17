import React from 'react'
import { useDispatch } from 'react-redux'
import useForm from '../hooks/useForm'
import validate from "../utils/validate"
import { editJob } from '../actions'
import Swal from 'sweetalert2'
import trashIcon from '../assets/icons/trash.svg'
import editIcon from '../assets/icons/edit.svg'
import Button from './Button'

export default function EditForm(props) {
    const dispatch = useDispatch()
    const { num, company, position, date, statusJob, id } = props

    const submit = () => {

        Swal.fire({
            title: 'Are you sure?',
            text: "This job will be updated !",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#08db93',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No!',
        }).then(result => {
            if (result.value) {
                dispatch(editJob(id, values))
            };
        })

    }
    const { handleChange, handleSubmit, values, errorValues } = useForm(validate, submit, { position, company, date, statusJob })

    return (
        <tr>
            <td>{num}</td>
            <td>
                <div className="form-row">
                    <label>Company</label>
                    <input
                        name="company"
                        placeholder="Edit company"
                        className={`input input-modal ${errorValues.company && "error"}`}
                        value={values.company}
                    />
                </div>
            </td>
            <td>
                <div className="form-row">
                    <label>Position</label>
                    <input
                        name="positon"
                        placeholder="Edit position"
                        className={`input input-modal ${errorValues.position && "error"}`}
                        value={values.position}
                    />
                </div>
            </td>
            <td>
                <div className="form-row">
                    <label>Status</label>
                    <input
                        name="status"
                        placeholder="Edit status"
                        className={`input input-modal ${errorValues.status && "error"}`}
                        value={values.status}
                    />
                </div>

            </td>
            <td>
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
                    />
                </div>
            </td>
            <td className="table__action">
                <Button className="btn__delete">
                    <img src={trashIcon} alt="trash icon" width="15px" height="15px" />
                    <span> Delete</span>
                </Button>

                <Button className="btn__edit" onClick={() => { alert("click") }}>
                    <img src={editIcon} alt="edit icon" width="15px" height="15px" />
                    <span> Edit</span>
                </Button>

            </td>
        </tr>
    )
}
