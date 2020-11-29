const inputValue = {
    company: "",
    search: "",
    status: "",
    position: ""
}

const jobLists = (state = { inputValue, jobs: [], loading: false }, action) => {
    switch (action.type) {

        case "SEARCH":
            return {
                ...state,
                inputValue: {
                    ...inputValue,
                    [action.target.name]: action.target.value
                }
            }
        case "ADD_JOB_SUCCESS":
            return {
                ...state,
                jobs: [...state.jobs, action.values],
                loading: !state.loading
            }


        default:
            return state
    }

}

export default jobLists