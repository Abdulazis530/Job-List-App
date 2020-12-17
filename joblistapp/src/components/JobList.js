import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import JobItem from './JobItem'
import { loadJobs } from '../actions'

export default function JobList() {
    const { jobs, page, offset } = useSelector(state => state.jobLists)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadJobs(page))
    }, [page])

    return (
        <table>
            <tbody>
                {jobs.map((job, index) => (
                    <JobItem
                        key={job.id}
                        num={offset + index}
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
