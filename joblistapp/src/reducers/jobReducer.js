
import {
    LOAD_JOBS,
    LOAD_JOBS_SUCCESS,
    ADD_JOB_SUCCESS,
    DELETE_ID_SUCCESS,
    EDIT_JOB_SUCCESS,
    TOGGLE_EDIT
} from '../constant'

const jobReducer = (state = { jobs: [], loading: false, page: 1, offset: 0, status: "ALL", totalPage: null }, action) => {
    switch (action.type) {
        case LOAD_JOBS:
            return {
                ...state,
                loading: true,
                offset: action.offset,
                status: action.status,
                page: action.page
            }
        case LOAD_JOBS_SUCCESS:
            return {
                ...state,
                jobs: action.jobs,
                loading: false,
                totalPage: action.totalPage,
            }
        case ADD_JOB_SUCCESS:
            return {
                ...state,
                jobs: [...state.jobs, action.job]
            }
        case DELETE_ID_SUCCESS:
            return {
                ...state,
                jobs: state.jobs.filter(job => job.id !== action.id),
            }
        case TOGGLE_EDIT:
            return {
                ...state,
                jobs: state.jobs.map(job => {
                    if (job.id === action.id) {
                        job.isEdit = !job.isEdit
                    }
                    return job
                })
            }
        case EDIT_JOB_SUCCESS:
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

export default jobReducer