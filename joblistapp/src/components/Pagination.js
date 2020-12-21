import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadJobsRequest } from '../actions'

export default function Pagination() {
    const { page, totalPage, status } = useSelector(state => state.jobLists)
    const dispatch = useDispatch()

    const handleNext = () => {
        dispatch(loadJobsRequest(page + 1, status))
    }
    const handlePrev = () => {
        dispatch(loadJobsRequest(page - 1, status))
    }
    const changPage = (currentPage) => {
        dispatch(loadJobsRequest(currentPage, status))
    }

    let iterator = []
    for (let index = 0; index < totalPage; index++) {
        iterator.push(index)

    }
    return (
        <ul className="pagination">
            <li className={`page-item ${page === 1 && "disabled"}`} onClick={() => handlePrev()}>
                <div className="page-link" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </div>
            </li>
            {
                iterator.map((item, index) => (
                    <li
                        key={item}
                        className={`page-item ${page === index + 1 ? "active" : ""}`}
                        onClick={() => changPage(index + 1)}
                    >
                        <div className="page-link">{index + 1}</div>
                    </li>
                ))
            }

            <li className={`page-item ${page === totalPage && "disabled"}`} onClick={() => handleNext()}>
                <div className="page-link" href="/#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </div>
            </li>

        </ul>
    )
}
