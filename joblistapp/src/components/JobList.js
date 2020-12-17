import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import JobItem from './JobItem'
import { loadJobs } from '../actions'

export default function JobList() {
    const { jobs, page, offset, status } = useSelector(state => state.jobLists)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadJobs(page, status))
    }, [page])

    return (
        <table>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Company</th>
                    <th>Position</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>

            </thead>
            <tbody>
                {jobs.map((job, index) => (
                    <JobItem
                        key={job.id}
                        num={offset + index + 1}
                        company={job.company}
                        position={job.position}
                        status={job.status}
                        date={job.date}
                    />
                ))
                }
            </tbody>
        </table>
    )
}
