
import { v4 as uuidv4 } from 'uuid';

const storageData = JSON.parse(localStorage.getItem("jobs")) || []

const setLoading = (totalData, offset) => ({
    type: "SET_LOADING",
    totalData,
    offset
})
const loadJobSuccess = (jobs, page) => ({
    type: "LOAD_JOBS_SUCCESS",
    jobs,
    page

})

export const loadJobs = (page) => {
    return dispatch => {
        const totalData = storageData.length
        const LIMIT = 5
        const offset = (page - 1) * LIMIT
        dispatch(setLoading(totalData, offset))
        setTimeout(() => {
            const jobs = storageData.slice(offset, LIMIT)
            dispatch(loadJobSuccess(jobs, page))
        }, 500)

    }
}



export const addJob = (values) => {
    values.status = "APPLIED"
    values.id = uuidv4()
    storageData.push(values)
    localStorage.setItem("jobs", JSON.stringify(storageData))
    // const jobs = localStorage.getItem("Jobs")
}