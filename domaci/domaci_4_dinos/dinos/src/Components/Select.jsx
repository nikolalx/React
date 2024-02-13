import React from "react";
import { useState } from "react";

const Select = ({data, className}) => {

  const [dino, setDino] = useState('')

  const dinoHandler = (e) => {
    setDino(e.target.value)
    console.log(dino)
  }

  return (
    <>
      <select name="dinos" id="dinos" value={dino} className={className} key={''} onChange={(e) => dinoHandler(e)}>
        <option defaultValue={'Please choose'} selected disabled>Please choose</option>
      {data.map((dino) => {
        return <option key={dino.id} value={dino.name}>{dino.name}</option>
      })}
      </select>
    </>
  );
};

export default Select;
