import "./App.scss";
import "./output.css";

import Form from "./Components/Form/Form";
import Card from "./Components/Cards/Card";
import { useState } from "react";

function App() {

  const [wholeOrder, setWholeOrder] = useState([])

  const wholeOrderHandler = (order) => {
    order.buyer && order.comment && order.img ? setWholeOrder(order) : alert('The order is not complete.')
  }

  const lSHandler = (order) => {
    let allOrders = [wholeOrder]
    let allOrdersString = JSON.stringify(allOrders)

    localStorage.setItem('allOrders', allOrdersString)
  }
  return (
    <>
      <div className="flex h-screen w-screen bg-dino-green flex-col content-center flex-wrap">
        <div className='h-[22rem] w-[60rem] bg-[url("./image/marko-transformed.jpeg")] bg-cover '>
          <Form onWholeOrderHandler={wholeOrderHandler} onlSHandler={lSHandler} wholeOrder={wholeOrder}/>
        </div>
        {wholeOrder ? <Card>
          <div className="flex">
            <div>
              <img className="h-[8rem] w-[8rem] " src={wholeOrder?.img}></img>
            </div>

            <div className="flex h-[8rem] w-[15rem] flex-col flex-wrap justify-center content-center">
              <p>Kupac: {wholeOrder?.buyer}</p>
              <p>Komentar: {wholeOrder?.comment}</p>
              <p>Cena: {wholeOrder?.cena}</p>
            </div>
          </div>

          <button
        className="h-[40px] w-[100px] p-2 !bg-yellow-800 rounded-2xl self-center mt-2 cursor-pointer"
        onClick={() => lSHandler(order)}
      >
        List Orders
      </button>
        </Card> : ''}
      </div>
    </>
  );
}

export default App;
