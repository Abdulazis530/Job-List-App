import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'

import trashIcon from '../assets/icons/trash.svg'
import editIcon from '../assets/icons/edit.svg'
import Button from './Button'
import { deleteJob } from '../actions'

export default function JobItem(props) {
    const dispatch = useDispatch()
    const { page, status } = useSelector(state => state.jobLists)
    const { num, company, position, date, statusJob, id } = props

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "This job will be deleted !",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#08db93',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No!',
        }).then(result => {
            if (result.value) {
                dispatch(deleteJob(id, page, status))
            }
        })
    }
    return (
        <tr>
            <td>{num}</td>
            <td>{company}</td>
            <td>{position}</td>
            <td>{statusJob}</td>
            <td>{date}</td>
            <td className="table__action">
                <Button className="btn__delete" onClick={() => handleDelete(id)}>
                    <img src={trashIcon} alt="trash icon" width="15px" height="15px" />
                    <span> Delete</span>
                </Button>

                <Button className="btn__edit">
                    <img src={editIcon} alt="edit icon" width="15px" height="15px" />
                    <span> Edit</span>
                </Button>

            </td>
        </tr>
    )
}
