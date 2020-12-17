
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2'


const setLoading = (offset, status) => ({
    type: "SET_LOADING",
    offset,
    status
})
const loadJobSuccess = (jobs, page, totalPage) => ({
    type: "LOAD_JOBS_SUCCESS",
    jobs,
    page,
    totalPage

})

export const loadJobs = (page, status = "ALL") => {
    return dispatch => {
        const storageData = JSON.parse(localStorage.getItem("jobs")) || []

        const LIMIT = 5
        const offset = (page - 1) * LIMIT

        dispatch(setLoading(offset, status))
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
    type: "ADD_JOB_SUCCESS",
    job


})

export const addJob = (job, page, status, totalJobInPage) => {

    return dispatch => {
        const storageData = JSON.parse(localStorage.getItem("jobs")) || []
        job.status = "APPLIED"
        job.id = uuidv4()
        storageData.push(job)
        localStorage.setItem("jobs", JSON.stringify(storageData))
        if (totalJobInPage === 5) return dispatch(loadJobs(page + 1, status))
        dispatch(addJobSuccess(job))
    }

}

const deleteJobSucces = (id) => ({
    type: "DELETE_ID_SUCCESS",
    id
})

export const deleteJob = (id, page, status, totalJobInPage) => {
    return dispatch => {
        const storageData = JSON.parse(localStorage.getItem("jobs")) || []
        const deletedStorageData = storageData.filter(job => job.id !== id)
        localStorage.setItem("jobs", JSON.stringify(deletedStorageData))
        dispatch(deleteJobSucces(id))
        if (page > 1 && totalJobInPage === 1) dispatch(loadJobs(page - 1, status))
        Swal.fire({
            icon: 'success',
            title: 'Todo has been deleted',
            showConfirmationButton: false,
        })
    }

}