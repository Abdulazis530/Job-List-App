import Swal from 'sweetalert2'

const storageData = JSON.stringify(localStorage.getItem("jobs")) || []

const setLoading = () => ({
    type: "LOADING_TRUE"
})

const addJobSucces = values => (
    {
        type: "ADD_JOB_CUCCESS",
        values
    }
)
export const addJob = (values, cb) => {

    return dispatch => {
        console.log('in action', values)
        dispatch(setLoading())

        setTimeout(() => {
            cb()
            Swal.fire({
                icon: 'success',
                title: 'Your job has been added',
                showConfirmButton: false,
                timer: 1500
            })
        }, 1500)
        dispatch(addJobSucces(values))

    }
    // const jobs = localStorage.getItem("Jobs")
}