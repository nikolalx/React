import { useState } from "react"
import './App.scss';

import Dugmic from "./components/Dugmic/Dugmic";
import StyleMe from "./components/StyleMe/StyleMe";

import Button1 from "./components/Button1/Button1";

import Paragraph from "./components/Paragraph/Paragraph";

import Product from "./components/Product/Product";

import WarningButton from "./components/WarningButton/WarningButton";

import Warning from "./components/Warning/Warning";

function App() {

  const changeCol = () => {
    if (tColor === 'black') {
      setTColor('red')
    } else {
      setTColor('black')
    }
  }

  const col = 'black'

  const [pColor, setColor] = useState(col)
  const [tColor, setTColor] = useState('black')

  const [warning, setWarning] = useState(false)

  return (
    <div className="App">
      {/* <div id="buttonContainer">
        <Button1 classNames={"buttons" + " " + "button1"}
          onClick={() => { setColor(pColor === col || pColor === 'red' || pColor === 'blue' ? 'green' : col) }} />
        <Button1 classNames={"buttons" + " " + "button2"}
          onClick={() => { setColor(pColor === col || pColor === 'green' || pColor === 'blue' ? 'red' : col) }} />
        <Button1 classNames={"buttons" + " " + "button3"}
          onClick={() => { setColor(pColor === col || pColor === 'red' || pColor === 'green' ? 'blue' : col) }} />
        <Dugmic classNames={'dugmic'} onClick={changeCol} />
      </div>

      <Paragraph classNames={'paragraph'} style={{ color: pColor }} />

      <StyleMe classNames={'text'} style={{ color: tColor }} /> */}

      {/* Novi domaci odavde BR 5 */}
      {/* <h1 style={{color:'white'}}>
        My Web shop:
      </h1>
      <Product classNames={'card'} title={'Product 1'} price={'$10'} description={'First Product'} />
      <Product classNames={'card'} title={'Product 2'} price={'$20'} description={'Second Product'} /> */}

      {/* ovde ide poslednji deo domaceg BR 6 */}

<Warning>
  <div className={'warning'} style={warning ? {opacity:'1'} : {opacity:'0'}}>
    <h1>
      Are you sure?
    </h1>

    <p>
      These changes can't be reverted!
    </p>

    <WarningButton classNames={'proceed'} text={'proceed'} onClick={() => {setWarning(false)}}/>
    
  </div>
</Warning>

      <WarningButton classNames={'show_warning'} text={'delete'} onClick={() => {setWarning(true)}}/>
    </div>
  );
}

export default App;
