import "./App.scss";
import "./output.css";

import Form from "./Components/Form/Form";

function App() {
  return (
    <>
      <div className="flex h-screen w-screen bg-dino-green flex-col content-center flex-wrap">
        <div className='h-[22rem] w-[60rem] bg-[url("./image/marko-transformed.jpeg")] bg-cover '>
          <Form />
        </div>
      </div>
    </>
  );
}

export default App;
