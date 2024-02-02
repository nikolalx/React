import React from 'react'
import './style.css'

const Cards = ({cardNum, name, years, months, cvc}) => {
    return (
        <>
            <div className={'card1'}>
                <div className={"row circleContainer"}>
                    <div id={"filledCircle"}></div>
                    <div id={"emptyCricle"}></div>
                </div>

                <p className={"cardNumber"} key={1}>{!cardNum ? '1234 1234 1234 1234' : cardNum}</p>

                <div className={"row nameExpDate"}>
                    <p>{!name ? 'Petar Peric' : name}</p>
                    <p>{!months && !years ? '0/0' : months + '/' + years}</p>
                </div>
            </div>

            <div className={'card2'}>
                <p className={'cvc'}>{!cvc ? '123' : cvc}</p>
            </div>
        </>
    )

}

export default Cards