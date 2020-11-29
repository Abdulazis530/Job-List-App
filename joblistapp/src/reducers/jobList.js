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
        case "ADD_DATA":
            console.log(action.values)

            return state
        default:
            return state
    }

}

export default jobLists