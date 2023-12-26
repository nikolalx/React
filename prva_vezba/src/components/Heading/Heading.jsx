import React from "react";
import './style.css'

const Heading = ({ children, classNames }) => {
    return <header className={classNames}>{children}</header>
}

export default Heading