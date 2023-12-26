import React from 'react';
import './style.scss';

const Section1 = ({ classNames, children }) => {
    return <section className={classNames}>{children}</section>
    
}

export default Section1