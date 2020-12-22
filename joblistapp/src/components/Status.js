import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadJobsRequest } from '../actions'

export default function Status() {
    const dispatch = useDispatch()
    const { status } = useSelector(state => state.jobs)

    const handleChangeStatus = (newStatus) => {
        dispatch(loadJobsRequest(1, newStatus))
    }


    return (
        <ul className="status">
            <li className={`status__item ${status === "ALL" && "active"}`} onClick={() => handleChangeStatus("ALL")}>
                <p>All</p>
            </li>
            <li className={`status__item ${status === "APPLIED" && "active"}`} onClick={() => handleChangeStatus("APPLIED")}>
                <p>Applied</p>
            </li>
            <li className={`status__item ${status === "INTERVIEW" && "active"}`} onClick={() => handleChangeStatus("INTERVIEW")}>
                <p>Interview</p>
            </li>
            <li className={`status__item ${status === "REJECTED" && "active"}`} onClick={() => handleChangeStatus("REJECTED")}>
                <p>Rejected</p>
            </li>
        </ul>
    )
}
