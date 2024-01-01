import React from 'react';
import './style.scss';

const Section1 = ({ classNames }) => {

    const nyc = 'About NYC Running Club'
    const pnyc = 'Nibh venenatis cras sed felis eget velit aliquet sagittis id. Tellus pellentesque eu tincidunt tortor aliquam nulla. Lorem Tellus pellentesque eu tincidunt tortor aliquam nulla. Tellus pellentesque eu tincidunt tortor aliquam nulla. '

    return (<section className={classNames}>
        <div className='circle'></div>
        <div className="circleImg"></div>
        <div className="circleText">
            <div className='flex'>
                <h1>{nyc}</h1>
                <p>{pnyc}</p>
            </div>
        </div>
        <div className='donut'></div></section>
    );

}

export default Section1