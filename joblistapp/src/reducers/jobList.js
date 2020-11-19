const inputValue = {
    company: "",
    search: "",
    status: "",
    position: ""
}

const jobLists = (state = { inputValue, jobs: [], }, action) => {
    switch (action.type) {

        case "SEARCH":
            return {
                ...state,
                inputValue: {
                    ...inputValue,
                    [action.target.name]: action.target.value
                }
            }

        default:
            return state
    }

}

export default jobLists