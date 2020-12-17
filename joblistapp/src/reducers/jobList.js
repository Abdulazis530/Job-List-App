

const jobLists = (state = { jobs: [], loading: false, page: 1, offset: 0 }, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                loading: true,
                offset: action.offset,
                totalData: action.totalData
            }
        case "LOAD_JOBS_SUCCESS":
            return {
                ...state,
                jobs: [...state.jobs, ...action.jobs],
                loading: false,
                page: action.page,
            }


        default:
            return state
    }

}

export default jobLists