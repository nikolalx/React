import React from "react";
import json from '../../JSON/data.json'


import Select from "../Select";

const Form = () => {
  return (
    <form className="flex flex-col flex-wrap w-[40%] p-4">
      <label htmlFor="kupac">Kupac</label>
      <input className="w-[80%]" type="text" name="kupac" id="kupac" />
      <label htmlFor="dinos">Dinosaurusi</label>
      <Select data={json.data} className="w-[80%] text-black" />
      <label htmlFor="napomena">Napomena</label>
      <textarea className="h-[8rem]" id="napomena"></textarea>
      <input
        className="h-[40px] w-[100px] p-2 !bg-green-900 rounded-2xl self-center mt-2 cursor-pointer"
        type="submit"
      />
    </form>
  );
};

export default Form;
