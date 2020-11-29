import React, { useState } from 'react'

export default function Header() {
    const [isTabOpen, setIsTabopen] = useState(false)
    return (
        <header>
            <nav className="navbar">
                <h1 className="navbar-brand">
                    Joblist.
                </h1>
                <i className={`fas ${isTabOpen ? "fa-times" : "fa-bars"} fa-2x`} onClick={() => { setIsTabopen(!isTabOpen) }} />

                <div className={`navbar-links ${isTabOpen ? "active" : ""}`}>
                    <ul>
                        <li><a href="/#">About</a></li>
                        <li> <a href="/#">Home</a></li>
                    </ul>
                </div>
            </nav>
        </header>

    )
}
