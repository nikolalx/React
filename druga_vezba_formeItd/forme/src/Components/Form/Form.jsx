import React from 'react'
import './style.scss'
import { useState } from 'react'

const Form = ({onSubmitInfo}) => {

    const [name, setName] = useState('')
    const [cardNum, setCardNum] = useState(0)
    const [months, setMonths] = useState(0)
    const [years, setYears] = useState(0)
    const [cvc, setCvc] = useState(0)

    const nameHandler = (e) => {
        setName(e.target.value)
    }

    const cardNumHandler = (e) => {
        setCardNum(e.target.value)
    }

    const monthsHandler = (e) => {
        setMonths(e.target.value)
    }

    const yearsHandler = (e) => {
        setYears(e.target.value)
    }

    const cvcHandler = (e) => {
        setCvc(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const info = {name, cardNum, months, years, cvc}
        onSubmitInfo(info)
    }

    return (
        <form action="" onSubmit={submitHandler}>
            <div className={'column'}>
                <label htmlFor="nameSurname" className={'label'}>CARDHOLDER NAME</label>
                <input type="text" id='nameSurname' className={'input'} onChange={nameHandler} />
            </div>

            <div className={'column'}>
                <label htmlFor="cardNum" className={'label'}>CARD NUMBER</label>
                <input type="tel" id='cardNum' className={'input'} />
            </div>

            <div className={'column'}>
                <div className={'row dateCvc'}>
                    <label htmlFor="expDate" className={'label'}>EXP. DATE (MM/YY)</label>
                    <label htmlFor="cvc" className={'label'}>CVC</label>
                </div>
                <div className={'row dateCvcInputs'}>
                    <input type="tel" id='expDate' maxlength={2} className={'input'} />
                    <input type="tel" maxlength={2} className={'input'} />


                    <input type="tel" maxlength={3} id='cvc' className={'input'} />
                </div>
            </div>

            <input type="submit" value={`Confirm`} id={'submit'} />
        </form>
    )
}

export default Form