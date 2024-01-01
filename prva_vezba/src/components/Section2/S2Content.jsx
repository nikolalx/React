import React from 'react'
import './style.scss'

import dog1 from './/images/dog1.jpg'
import dog2 from './/images/dog2.jpg'
import dog3 from './/images/dog3.jpg'
import dog4 from './/images/dog4.jpg'

const content = [
    { h2: 'WORKOUTS', p: 'Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.', img: dog1 },
    { h2: 'WEIGHT LOSS', p: 'Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.', img: dog2 },
    { h2: 'JOGGING', p: 'Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.', img: dog3 },
    { h2: 'HEALTH BENEFITS', p: 'Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.', img: dog4 }
];

export const DogImg = (content) => {

    return content.map((dog, key) => {
        <img src={dog.img} alt={dog.img} className='dogs' key={key} />
    })
}

export const CardContent = (content) => {
    return (
        <div className='cardContent'>
            {content.map((dog, key) => {
                <>
                <h2 key={key}>{dog.h2}</h2> 
                <p>{dog.p}</p>
                </>
            })}
        </div>
    );
}