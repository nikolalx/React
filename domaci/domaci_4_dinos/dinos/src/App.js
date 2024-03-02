import "./App.scss";
import "./output.css";

import Form from "./Components/Form/Form";
import Card from "./Components/Cards/Card";
import { useState } from "react";

function App() {

  const [wholeOrder, setWholeOrder] = useState('')

  // const wholeOrderHandler = (order) => {
  //   order.buyer && order.comment && order.img ? setWholeOrder(order) : alert('The order is not complete.')
  // }

  const lSHandler = (order, buyer, comment) => {

    
    let array = localStorage.getItem('allOrders')
    let existingOrders = array ? JSON.parse(array) : [];
    let obj = {order, buyer, comment}
    let updatedOrder = [...existingOrders, obj]

    setter(JSON.stringify(updatedOrder))
  }

  const setter = (arr) => {
    localStorage.setItem('allOrders', arr)
  }

  const listOrders = () => {
    let array = localStorage.getItem('allOrders')
    let iterableArr = array ? JSON.parse(array) : ''
    setWholeOrder(iterableArr)
  }
  return (
    <>
      <div className="flex h-screen w-screen bg-dino-green flex-col content-center flex-wrap">
        <div className='h-[22rem] w-[60rem] bg-[url("./image/marko-transformed.jpeg")] bg-cover '>
          <Form onlSHandler={lSHandler} />
        </div>
        {wholeOrder ? <Card>
          <div className="flex">
            <div>
              <img className="h-[8rem] w-[8rem] " src={wholeOrder?.img}></img>
            </div>

            <div className="flex h-[8rem] w-[15rem] flex-col flex-wrap justify-center content-center">
              {wholeOrder.map((obj) => {
                return (<>
                  <p>obj?.buyer</p>
                </>)
              })}
            </div>
          </div>
        </Card> : ''}
        <button
        className="h-[40px] w-[100px] p-2 !bg-yellow-800 rounded-2xl self-center mt-2 cursor-pointer"
        onClick={listOrders}
      >
        List Orders
      </button>
      </div>
    </>
  );
}

export default App;
