import React from 'react'
import './style.scss'

const InputHandler = ({ classNames }) => {
    return (
        <>
            <div className={classNames}>
                <input type="text" placeholder='Name...' className='inputName' />
                <input type="text" placeholder='Surname...' className='inputSurname' />
            </div>
        </>
    )
}

export default InputHandler 