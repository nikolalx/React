import React from 'react'

const Form = () => {
    return (
        <form action="">
            <div>
                <label htmlFor="nameSurname">CARDHOLDER NAME</label>
                <input type="text" id='nameSurname' />
            </div>

            <div>
                <label htmlFor="cardNum">CARD NUMBER</label>
                <input type="number" id='cardNum' />
            </div>

            <div>
                <div>
                    <label htmlFor="expDate">EXP. DATE (MM/YY)</label>
                    <label htmlFor="cvc">CVC</label>
                </div>
                <div>
                    <input type="number" id='expDate' />
                    <input type="number" />


                    <input type="number" id='cvc' />
                </div>
            </div>

            <input type="submit" value={`Confirm`} />
        </form>
    )
}

export default Form