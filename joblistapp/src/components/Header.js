import React from 'react'

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <h1 className="nav__title">
                    Joblist.
            </h1>
                <ul className="nav__tabs">
                    <li className="nav__item"><a href="/#">About</a></li>
                    <li className="nav__item"> <a href="/#">Home</a></li>
                </ul>
            </nav>
        </header>

    )
}
