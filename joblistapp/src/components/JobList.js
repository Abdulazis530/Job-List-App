/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import JobItem from './JobItem'
import EditForm from './EditForm'
import { loadJobsRequest } from '../actions'
import Spinner from "./Spinner"
export default function JobList() {
    const { jobs, page, offset, status, loading } = useSelector(state => state.jobs)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadJobsRequest(page, status))
    }, [page])
    if (loading) return <Spinner />
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
                {
                    jobs.map((job, index) => (
                        job.isEdit ?
                            <EditForm
                                key={`edit-${job.id}`}
                                num={offset + index + 1}
                                company={job.company}
                                position={job.position}
                                statusJob={job.status}
                                date={job.date}
                                id={job.id}
                            />
                            :
                            <JobItem
                                key={`list-${job.id}`}
                                num={offset + index + 1}
                                company={job.company}
                                position={job.position}
                                statusJob={job.status}
                                date={job.date}
                                id={job.id}
                            />
                    ))
                }
            </tbody>
        </table>
    )
}
