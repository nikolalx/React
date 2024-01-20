import { useState } from "react"
import './App.scss';

import Button1 from "./components/Button1/Button1";

import Paragraph from "./components/Paragraph/Paragraph";

function App() {

  const col = 'black'

  const [pColor, setColor] = useState(col)
  const [height, setHeight] = useState('')

  return (
    <div className="App">
      <div id="buttonContainer">
        <Button1 classNames={"buttons" + " " + "button1"}
          onClick={() => { setColor(pColor === col || pColor === 'red' || pColor === 'blue' ? 'green' : col) }} />
        <Button1 classNames={"buttons" + " " + "button2"}
          onClick={() => { setColor(pColor === col || pColor === 'green' || pColor === 'blue' ? 'red' : col) }} />
        <Button1 classNames={"buttons" + " " + "button3"}
          onClick={() => { setColor(pColor === col || pColor === 'red' || pColor === 'green' ? 'blue' : col) }} />
      </div>

      <Paragraph classNames={'paragraph'} style={{ color: pColor }} />
    </div>
  );
}

export default App;
