import './App.css';
import { useState } from 'react';

import Form from './Components/Form/Form';
import Cards from './Components/Cards/Cards';

function App() {

  const [persons, setPerson] = useState([])

  const addPerson = (person) => {
    setPerson((prevState) => {
      return [...prevState, person]
    })
  }

const submitInfo = (person) => {
  addPerson(person)
}

  return (<>
    <aside>
      <Cards>
        <div className={'card1'}>
          <div className={"row circleContainer"}>
            <div id={"filledCircle"}></div>
            <div id={"emptyCricle"}></div>
          </div>

          <p className={"cardNumber"} key={1}>{persons.map((info) => (
            cardNumb={info.cardNumb}
          ))}</p>

          <div className={"row nameExpDate"}>
            <p>Nikola ALeksic</p>
            <p>12/25</p>
          </div>
        </div>

        <div className={'card2'}>
          <p className={'cvc'}>000</p>
        </div>
      </Cards>
    </aside>

    <div id={'rightSide'}>
      <Form onSubmitInfo={submitInfo} />
    </div>
  </>
  );
}

export default App;
