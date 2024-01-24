import React from 'react'
import './style.scss'

const StyleMe = ({classNames, style}) => {
    return (
        <p className={classNames} style={style}>Style me!</p>
    )
}

export default StyleMe