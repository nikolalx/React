import React from "react";
import { useState } from "react";
import json from "../../JSON/data.json";

import Select from "../Select";

const Form = ({onlSHandler }) => {
  const [order, setOrder] = useState({});
  const [buyer, setBuyer] = useState();
  const [comment, setComment] = useState();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    onlSHandler(order, buyer, comment);
    // onWholeOrderHandler(order);
  };

  const orderHandler = (dino) => {
    setOrder(dino)
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
      <input
        className="h-[40px] w-[100px] p-2 !bg-green-900 rounded-2xl self-center mt-2 cursor-pointer"
        type="submit"
      />
    </form>
  );
};

export default Form;

//prosledjujes Array iz App-a Formi. Iz Selecta prosledjujes klasika objekat dinosaurusa u Formu. U Formi se stvara novi objekat od tog dinosaurusa, buyer stejta i comment stejta. Nakon toga se .pushu-je u array uz App-a. Nakon toga se setuje array na Local Storage. I u App-u button ispisuje ceo array iz Local Storage-a.