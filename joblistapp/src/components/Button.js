import React from 'react'

export default function Button(props) {
    const className = ["btn"]
    className.push(props.className)
    return (
        <button className={className.join(" ")}>
            {props.children}
        </button>
    )
}
