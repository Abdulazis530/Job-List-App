
const storageData = JSON.parse(localStorage.getItem("jobs")) || []
const addJobSucces = values => (
    {
        type: "ADD_JOB_CUCCESS",
        values
    }
)
export const addJob = (values) => {
    return dispatch => {
        storageData.push(values)
        localStorage.setItem("jobs", JSON.stringify(storageData))
        console.log('in action', values)
        dispatch(addJobSucces(values))

    }
    // const jobs = localStorage.getItem("Jobs")
}