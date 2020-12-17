import React from 'react'
import trashIcon from '../assets/icons/trash.svg'
import editIcon from '../assets/icons/edit.svg'
import Button from './Button'

export default function JobItem(props) {
    const { num, company, position, date, status } = props
    return (
        <tr>
            <td>{num}</td>
            <td>{company}</td>
            <td>{position}</td>
            <td>{status}</td>
            <td>{date}</td>
            <td className="table__action">
                <Button className="btn__delete">
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
