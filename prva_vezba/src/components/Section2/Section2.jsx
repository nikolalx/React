import React from 'react'
import './style.scss'

const Section2 = ({ classNames={classNames}, children }) => {
    return <section className={classNames}>{children}</section>
}

export default Section2