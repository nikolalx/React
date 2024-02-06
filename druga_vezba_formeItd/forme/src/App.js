import "./App.css";
import { useState } from "react";

import Form from "./Components/Form/Form";
import Cards from "./Components/Cards/Cards";
import Container from "./Components/Cards/Container";

function App() {
  const [persons, setPerson] = useState({});

  const addPerson = (person) => {
    setPerson(person);
  };

  const submitInfo = (person) => {
    addPerson(person);
  };

  return (
    <>
      <aside>
        <Container>
          <Cards
            name={persons.name}
            cardNum={persons.cardNum}
            months={persons.months}
            years={persons.years}
            cvc={persons.cvc}
          />
        </Container>
      </aside>

      <div id={"rightSide"}>
        <Form onSubmitInfo={submitInfo} />
      </div>
    </>
  );
}

export default App;
