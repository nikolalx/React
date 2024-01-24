import React from 'react'
import './style.scss'

const Dugmic = ({classNames, onClick}) => {
    return <button className={classNames} onClick={onClick} >Toggle Style!</button>
}

export default Dugmic