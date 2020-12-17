

const jobLists = (state = { jobs: [], loading: false, page: 1, offset: 0, status: "ALL", totalPage: null }, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                loading: true,
                offset: action.offset,
                status: action.status
            }
        case "LOAD_JOBS_SUCCESS":
            return {
                ...state,
                jobs: action.jobs,
                page: action.page,
                loading: false,
                totalPage: action.totalPage,
            }
        case "ADD_JOB_SUCCESS":
            return {
                ...state,
                jobs: [...state.jobs, action.job]
            }
        case "DELETE_ID_SUCCESS":
            return {
                ...state,
                jobs: state.jobs.filter(job => job.id !== action.id),
            }
        case "TOGGLE_EDIT":
            return {
                ...state,
                jobs: state.jobs.map(job => {
                    if (job.id === action.id) {
                        job.isEdit = true
                    }
                    return job
                })
            }
        case "EDIT_JOB_SUCCESS":
            return {
                ...state,
                jobs: state.jobs.map(job => {
                    if (job.id === action.id) {
                        job = { ...action.values }
                    }
                    return job
                })
            }
        default:
            return state
    }

}

export default jobLists