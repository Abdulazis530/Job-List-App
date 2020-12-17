
import { v4 as uuidv4 } from 'uuid';


const setLoading = (totalPage, offset, status) => ({
    type: "SET_LOADING",
    totalPage,
    offset,
    status
})
const loadJobSuccess = (jobs, page) => ({
    type: "LOAD_JOBS_SUCCESS",
    jobs,
    page

})

export const loadJobs = (page, status = "ALL") => {
    return dispatch => {
        const storageData = JSON.parse(localStorage.getItem("jobs")) || []

        const LIMIT = 5
        const offset = (page - 1) * LIMIT
        const totalPage = Math.ceil(storageData.length / LIMIT)

        dispatch(setLoading(totalPage, offset, status))
        setTimeout(() => {
            let jobs
            if (status !== "ALL") {
                jobs = storageData.filter(job => job.status === status).splice(offset, LIMIT)
            } else {
                jobs = storageData.splice(offset, LIMIT)

            }
            dispatch(loadJobSuccess(jobs, page))
        }, 500)

    }
}

const addJobSuccess = (job) => ({
    type: "ADD_JOB_SUCCESS",
    job


})

export const addJob = (job, page) => {

    return dispatch => {
        const storageData = JSON.parse(localStorage.getItem("jobs")) || []

        job.status = "APPLIED"
        job.id = uuidv4()
        storageData.push(job)
        localStorage.setItem("jobs", JSON.stringify(storageData))
        dispatch(addJobSuccess(job, page))
    }
    // const jobs = localStorage.getItem("Jobs")
}