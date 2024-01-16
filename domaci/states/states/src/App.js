import logo from './logo.svg';
import useState from "react"
import './App.scss';

import Button1 from "./components/Button1/Button1";
import Button2 from "./components/Button2/Button2";
import Button3 from "./components/Buttong3/Button3";

import Paragraph from "./components/Paragraph/Paragraph";


const changeColorClicked = (e) => {
  if(changeColor) {
    setChangeColor(false)
  } else {
    setChangeColor(true)
  }
}

function App() {
  return (
    <div className="App">
      <div id="buttonContainer">
        <Button1 classNames={"buttons" + " " + "button1"}
        onclick={() => changeColorClicked()} />
        <Button2 classNames={"buttons" + " " + "button2"} />
        <Button3 classNames={"buttons" + " " + "button3"} />
      </div>

      <Paragraph>
        <p className={"paragraph"}
        style={changeColor ? {color: "blue"} : {color: "black"}}>Mothafuckin React!</p>
      </Paragraph>
    </div>
  );
}

export default App;
