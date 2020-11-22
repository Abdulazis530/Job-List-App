import React from 'react'

import linkedInIcon from '../assets/icons/linkedin.svg'
import githubIcon from '../assets/icons/github.svg'
export default function Footer() {
    return (
        <footer className="footer__section">
            <div className="footer__content">
                <p>
                    <img src={linkedInIcon} alt="linkedin icon" width="15px" height="15px" />
                    <a className="icon-text" href="https://www.linkedin.com/in/abdul-azis-27ok/">LinkedIn</a>
                </p>
                <p>
                    <img src={githubIcon} alt="Github icon" width="15px" height="15px" />
                    <a className="icon-text" href="https://github.com/Abdulazis530">Git Hub</a>
                </p>
                <p>
                    <img src={githubIcon} alt="Github icon" width="15px" height="15px" />
                    <a className="icon-text" href="https://github.com/Abdulazis530">Git Hub</a>
                </p>
            </div>

            <p>@Abdul Azis | 2020</p>


        </footer>
    )
}
