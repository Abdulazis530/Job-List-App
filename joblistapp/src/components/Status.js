import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadJobs } from '../actions'

export default function Status() {
    const dispatch = useDispatch()
    const { status, page } = useSelector(state => state.jobLists)

    const handleChangeStatus = (newStatus) => {
        dispatch(loadJobs(page, newStatus))
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
