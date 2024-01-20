import React from 'react'
import './style.scss'

const Button = ({ classNames, value, onClick }) => {
    return <button className={classNames} onClick={onClick}>{value}</button>
}

export default Button