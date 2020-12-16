
const storageData = JSON.stringify(localStorage.getItem("jobs")) || []
const addJobSucces = values => (
    {
        type: "ADD_JOB_CUCCESS",
        values
    }
)
export const addJob = (values, cb) => {

    return dispatch => {
        console.log('in action', values)
        dispatch(addJobSucces(values))

    }
    // const jobs = localStorage.getItem("Jobs")
}