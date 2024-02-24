import React from "react";
import { useState } from "react";

const Select = ({ data, className, onSubmitHandler }) => {
  const [dinoId, setDinoId] = useState('Please Choose');

const dinoHandler = (e) => {
  setDinoId(e.target.value)
  console.log(dinoId)
  onSubmitHandler(dinoId)
}

  return (
    <>
      <select
        name="dinos"
        id="dinos"
        value={dinoId}
        className={className}
        onChange={dinoHandler}
      >
        <option
          key={0}
          name={"none"}
          value={'Please choose'}
          disabled
        >
          Please choose
        </option>
        {data.map((dinos) => {
          return (
            <option key={dinos.id} name={dinos.name} value={dinos.id}>
              {dinos.name}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Select;
