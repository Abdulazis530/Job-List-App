import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { searchJobAction } from '../actions'
import searchIcon from "../assets/icons/icon-search.svg"


export default function SearchBox() {
    const [filter, setFilter] = useState("")
    const dispatch = useDispatch()

    useEffect(() => {
        if (filter) dispatch(searchJobAction(filter))
    }, [filter])
    const handleChange = (e) => {
        setFilter(e.target.value)
    }

    return (
        <section className="filter__section">

            <div className="container-input">
                <input name="filter" placeholder="Search by job title, company or skill" className="input input--search" value={filter} onChange={handleChange} />
                <img className="input-icon" src={searchIcon} alt={"icon"} />
            </div>

        </section>
    )
}
