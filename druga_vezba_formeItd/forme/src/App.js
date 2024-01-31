import './App.css';
import { useState } from 'react';

import Form from './Components/Form/Form';
import Cards from './Components/Cards/Cards';

function App() {

  const [person, setPerson] = useState([])

  return (<>
    <aside>
      <Cards>
        <div className={'card1'}>
          <div className={"row circleContainer"}>
            <div id={"filledCircle"}></div>
            <div id={"emptyCricle"}></div>
          </div>

          <p className={"cardNumber"}>0980 0980 9090 8098</p>

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
      <Form onSubmitInfo={'/*funkcija koja ce da onda hendluje taj objekat koji dobija iz forme. Ta funkcija zove drugu koja ce da dodaje na karticu! */'} />
    </div>
  </>
  );
}

export default App;
