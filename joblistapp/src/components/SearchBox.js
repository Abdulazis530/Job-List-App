import React from 'react'
import InputText from './Input/InputText';
import searchIcon from "../assets/icons/icon-search.svg"

export default function SearchBox() {
    return (
        <section className="filter__section">
            <div className="container-input">
                <InputText nameInput="search" placeholder="Search by job title, company or skill" className="input--search" />
                <img className="input-icon" src={searchIcon} alt={"icon"} />
            </div>
        </section>
    )
}
