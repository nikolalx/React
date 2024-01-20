import React from 'react'
import "./style.scss";

const Button1 = ({classNames, onClick}) => {

    return <button className={classNames} onClick={onClick}>Green Color</button>
}

export default Button1