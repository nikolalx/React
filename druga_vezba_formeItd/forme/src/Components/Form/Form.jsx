import React from "react";
import "./style.scss";
import { useState } from "react";

const Form = ({ onSubmitInfo }) => {
  const [name, setName] = useState("");
  const [cardNum, setCardNum] = useState('');
  const [months, setMonths] = useState(0);
  const [years, setYears] = useState(0);
  const [cvc, setCvc] = useState(0);
  const [widthSubmit, setWidthSubmit] = useState(false);

  const nameHandler = (e) => {
    setName(e.target.value);
  };


  const cardNumHandler = (event) => {
    if (event.target.value.length > 16 || event.target.value.length < 16) {
      setWidthSubmit(true);
      return;
    } else {
      setWidthSubmit(false);
      setCardNum(event.target.value)
  }

  const monthsHandler = (e) => {
    setMonths(e.target.value);
  };

  const yearsHandler = (e) => {
    setYears(e.target.value);
  };

  const cvcHandler = (e) => {
    setCvc(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let cardNumber = cardNum.split('').map((e,i) => {
      if(i === 3 || i === 7 || i === 11){
        return e + ' '
      }else {
        return e
      }
    }).join('')
    const person = { name, cardNumber, months, years, cvc };
    onSubmitInfo(person);
  };

  return (
    <form action="" onSubmit={submitHandler}>
      <div className={"column"}>
        <label htmlFor="nameSurname" className={"label"}>
          CARDHOLDER NAME
        </label>
        <input
          type="text"
          id="nameSurname"
          className={"input"}
          pattern="^[a-z A-Z]+$"
          placeholder="Name and Surname"
          onChange={nameHandler}
        />
      </div>

      <div className={"column"}>
        <label htmlFor="cardNum" className={"label"}>
          CARD NUMBER
        </label>
        <input
          type="text"
          pattern="[0-9\s]{13,19}"
          id="cardNum"
          placeholder="Card number"
          className={"input"}
          onChange={cardNumHandler}
        />
      </div>

      <div className={"column"}>
        <div className={"row dateCvc"}>
          <label htmlFor="expDate" className={"label"}>
            EXP. DATE (MM/YY)
          </label>
          <label htmlFor="cvc" className={"label"}>
            CVC
          </label>
        </div>
        <div className={"row dateCvcInputs"}>
          <input
            type="number"
            placeholder="Months"
            id="expDate"
            maxLength={2}
            max={12}
            min={1}
            className={"input smaller"}
            onChange={monthsHandler}
          />
          <input
            type="number"
            placeholder="Years"
            maxLength={2}
            max={24}
            className={"input smaller"}
            onChange={yearsHandler}
          />

          <input
            type="number"
            placeholder="e.g. 123"
            maxLength={3}
            id="cvc"
            className={"input smaller"}
            onChange={cvcHandler}
          />
        </div>
      </div>

      <input type="submit" value={`Confirm`} id={"submit"} />

      <p id="error">{widthSubmit ? "Card number length not correct!" : ""}</p>
    </form>
  );
};
}
export default Form
