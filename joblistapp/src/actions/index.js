
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2'
import {
    LOAD_JOBS,
    LOAD_JOBS_SUCCESS,
    ADD_JOB_SUCCESS,
    DELETE_ID_SUCCESS,
    EDIT_JOB_SUCCESS,
    TOGGLE_EDIT
} from '../constant'

const loadJobs = (offset, status) => ({
    type: LOAD_JOBS,
    offset,
    status
})
const loadJobSuccess = (jobs, page, totalPage) => ({
    type: LOAD_JOBS_SUCCESS,
    jobs,
    page,
    totalPage

})

export const loadJobsRequest = (page, status = "ALL") => {
    return dispatch => {
        const storageData = JSON.parse(localStorage.getItem("jobs")) || []
        storageData.forEach(job => {
            job.isEdit = false
        })
        const LIMIT = 5
        const offset = (page - 1) * LIMIT

        dispatch(loadJobs(offset, status))
        setTimeout(() => {
            let jobs
            let totalPage
            if (status !== "ALL") {
                let filteredData = storageData.filter(job => job.status === status)
                totalPage = filteredData.length
                jobs = filteredData.splice(offset, LIMIT)
            } else {
                totalPage = Math.ceil(storageData.length / LIMIT)
                jobs = storageData.splice(offset, LIMIT)
            }
            dispatch(loadJobSuccess(jobs, page, totalPage))
        }, 500)

    }
}

const addJobSuccess = (job) => ({
    type: ADD_JOB_SUCCESS,
    job


})

export const addJob = (job, page, status, totalJobInPage) => {

    return dispatch => {
        const storageData = JSON.parse(localStorage.getItem("jobs")) || []
        job.status = "APPLIED"
        job.id = uuidv4()
        storageData.push(job)
        localStorage.setItem("jobs", JSON.stringify(storageData))
        if (totalJobInPage === 5) return dispatch(loadJobsRequest(page + 1, status))
        job.isEdit = false
        dispatch(addJobSuccess(job))
    }

}

const deleteJobSucces = (id) => ({
    type: DELETE_ID_SUCCESS,
    id
})

export const deleteJob = (id, page, status, totalJobInPage) => {
    return dispatch => {
        const storageData = JSON.parse(localStorage.getItem("jobs")) || []
        const deletedStorageData = storageData.filter(job => job.id !== id)
        localStorage.setItem("jobs", JSON.stringify(deletedStorageData))
        dispatch(deleteJobSucces(id))
        if (page > 1 && totalJobInPage === 1) dispatch(loadJobsRequest(page - 1, status))
        Swal.fire({
            icon: 'success',
            title: 'Job has been deleted',
            showConfirmationButton: false,
        })
    }

}


const editJobSuccess = (id, values) => ({
    type: EDIT_JOB_SUCCESS,
    id,
    values
})

export const editJob = (id, values) => {
    return dispatch => {
        const storageData = JSON.parse(localStorage.getItem("jobs")) || []
        storageData.forEach(job => {
            if (job.id === id) {
                job = { ...values }
            }
        })
        localStorage.setItem("jobs", JSON.stringify(storageData))

        dispatch(editJobSuccess(id, values))
        Swal.fire({
            icon: 'success',
            title: 'Job has been updated!',
            showConfirmationButton: false,
        })
    }
}