import React from "react";
import { useState } from "react";
import json from "../../JSON/data.json";

import Select from "../Select";

const Form = ({ onWholeOrderHandler, onlSHandler }) => {
  const [order, setOrder] = useState({});
  const [dinoObj, setDinoObj] = useState()
  const [buyer, setBuyer] = useState();
  const [comment, setComment] = useState();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let obj = {...dinoObj, buyer, comment}
    setOrder(obj)
    onlSHandler(order)
  };

  const orderHandler = (dino) => {
    setDinoObj(dino);
  };

  const buyerHandler = (e) => {
    setBuyer(e.target.value);
  };

  const commentHandler = (e) => {
    setComment(e.target.value);
  };

  return (
    <form
      className="flex flex-col flex-wrap w-[40%] p-4"
      action=""
      onSubmit={onSubmitHandler}
    >
      <label htmlFor="kupac">Kupac</label>
      <input
        className="w-[80%]"
        type="text"
        name="kupac"
        id="kupac"
        onChange={buyerHandler}
      />
      <label htmlFor="dinos">Dinosaurusi</label>
      <Select
        data={json.data}
        className="w-[80%] text-black"
        onOrderHandler={orderHandler}
      />
      <label htmlFor="napomena">Napomena</label>
      <textarea
        className="h-[8rem]"
        id="napomena"
        onChange={commentHandler}
      ></textarea>
      <button
        className="h-[40px] w-[100px] p-2 !bg-green-900 rounded-2xl self-center mt-2 cursor-pointer"
        type="submit" onClick={() => onlSHandler(order)}
      />
      <button
        className="h-[40px] w-[100px] p-2 !bg-yellow-800 rounded-2xl self-center mt-2 cursor-pointer"
        onClick={() => onWholeOrderHandler(order)}
      >
        List Orders
      </button>
    </form>
  );
};

export default Form;
