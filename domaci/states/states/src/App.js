import { useState } from "react"
import './App.scss';

import Dugmic from "./components/Dugmic/Dugmic";
import StyleMe from "./components/StyleMe/StyleMe";

import Button1 from "./components/Button1/Button1";

import Paragraph from "./components/Paragraph/Paragraph";



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


  return (
    <div className="App">
      <div id="buttonContainer">
        {/* <Button1 classNames={"buttons" + " " + "button1"}
          onClick={() => { setColor(pColor === col || pColor === 'red' || pColor === 'blue' ? 'green' : col) }} />
        <Button1 classNames={"buttons" + " " + "button2"}
          onClick={() => { setColor(pColor === col || pColor === 'green' || pColor === 'blue' ? 'red' : col) }} />
        <Button1 classNames={"buttons" + " " + "button3"}
          onClick={() => { setColor(pColor === col || pColor === 'red' || pColor === 'green' ? 'blue' : col) }} /> */}
        <Dugmic classNames={'dugmic'} onClick={changeCol} />
      </div>

      {/* <Paragraph classNames={'paragraph'} style={{ color: pColor }} /> */}

      <StyleMe classNames={'text'} style={{ color: tColor }} />
    </div>
  );
}

export default App;
