import React from "react";
import "./style.css";

const Cards = ({ cardNum, name, years, months, cvc }) => {
//   const cardNumArray = (cardNum) => {
    
//     cardNum.split('').map((e, i) => {
//         if(i === 3 || i === 7 || i === 11){
//             return e + ' '
//         } else {
//             return e
//         }
//     }).join('')

//   };

  return (
    <>
      <div className={"card1"}>
        <div className={"row circleContainer"}>
          <div id={"filledCircle"}></div>
          <div id={"emptyCricle"}></div>
        </div>

        <p className={"cardNumber"} key={1}>
          {!cardNum ? "1234 1234 1234 1234" : cardNum}
        </p>

        <div className={"row nameExpDate"}>
          <p>{!name ? "Petar Peric" : name}</p>
          <p>{!months && !years ? "0/0" : months + "/" + years}</p>
        </div>
      </div>

      <div className={"card2"}>
        <p className={"cvc"}>{!cvc ? "000" : cvc}</p>
      </div>
    </>
  );
};

export default Cards;
