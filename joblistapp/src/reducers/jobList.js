

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
                jobs: state.jobs.length < 5 ? [...state.jobs, action.job] : state.jobs
            }
        case "DELETE_ID_SUCCESS":
            return {
                ...state,
                jobs: state.jobs.filter(job => job.id !== action.id),
                page: state.page > 1 && state.jobs.filter === 1 ? state.page - 1 : state.page
            }


        default:
            return state
    }

}

export default jobLists