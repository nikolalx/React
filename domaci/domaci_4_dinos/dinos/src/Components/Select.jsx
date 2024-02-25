import React from "react";
import { useState } from "react";

const Select = ({ data, className, onOrderHandler }) => {
  const [dinoId, setDinoId] = useState({ id: "Please choose..." });

  const dinoSetter = (e) => {
    setDinoId(e.target.value);
    onOrderHandler(data.find(dino => {
      if(dino.id == e.target.value){
        return dino
      }else {
        return false
      }
    }));
  };

  return (
    <>
      <select
        name="dinos"
        id="dinos"
        value={dinoId.id}
        className={className}
        onChange={dinoSetter}
      >
        <option key={0} value={"Please choose"}>
          Please choose...
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
