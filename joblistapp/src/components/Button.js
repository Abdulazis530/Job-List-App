import React from 'react'

export default function Button(props) {
    const className = ["btn"]
    className.push(props.className)

    if (props.onClick)
        return (<button className={className.join(" ")} onClick={props.onClick}>
            {props.children}
        </button>
        )


    return (
        <button className={className.join(" ")}>
            {props.children}
        </button>
    )
}
