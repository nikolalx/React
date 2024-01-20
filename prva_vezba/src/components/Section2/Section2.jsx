import React from 'react'
import './style.scss'

import dog1 from '../../images/dog1.jpg'
import dog2 from '../../images/dog2.jpg'
import dog3 from '../../images/dog3.jpg'
import dog4 from '../../images/dog4.jpg'
import dog5 from '../../images/dog5.jpg'


const Section2 = ({ classNames }) => {
    const content = [
        { h2: 'WORKOUTS', p: 'Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.', img: dog1 },
        { h2: 'WEIGHT LOSS', p: 'Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.', img: dog2 },
        { h2: 'JOGGING', p: 'Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.', img: dog3 },
        { h2: 'HEALTH BENEFITS', p: 'Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.', img: dog4 },
        { h2: 'WHOOPWHOOP', p: 'Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.', img: dog5 }
    ];

    return (<>
        {
            content.map((dog, key) => {
                return (
                    <div className={'card'}>
                        <div className="imgContainer">
                            <img src={dog.img} alt={dog.img} className='dogs' key={key}></img>
                        </div>

                        <div className={'cardContent'}>
                            <h2 className={classNames}>{dog.h2}</h2>
                            <p>{dog.p}</p>
                        </div>
                    </div>

                );

            })
        }</>)
}

export default Section2