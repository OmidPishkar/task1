import React from 'react'
import { historyPushState } from './history'

const Link = ({children , to}) => {


    const handleClick = (event) => {
        event.preventDefault()

        historyPushState( {} , '' , to )
    }

    return (
        <a href={to} onClick={handleClick}>
            {children}
        </a>
    )
}

export default Link