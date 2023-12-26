import React from "react";
import './style.scss'

const Heading = ({ children, classNames }) => {
    return <header className={classNames}>{children}</header>
}

export default Heading