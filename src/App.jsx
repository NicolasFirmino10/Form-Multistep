import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";
import Steps from "./components/Steps";

import useForm from "./hooks/useForm";
import { useState } from "react";

import "./App.css";

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function App() {
  const [data, setData] = useState(formTemplate);

  const updateFiledHandler = (key, value) => {
    setData((prev)=>{
      return {...prev, [key]: value}
    })
  }

  const formComponents = [
    <UserForm key={0} data={data} updateFiledHandler={updateFiledHandler} />,
    <ReviewForm key={1} data={data}  updateFiledHandler={updateFiledHandler}/>,
    <Thanks key={2} data={data}  />,
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirtStep } =
    useForm(formComponents);

  return (
    <div className="app">
      <div className="header">
        <h2>Deixe a sua avaliação</h2>
        <p>Ficamos felizes com a sua compra, deixe a sua avaliação</p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep} />

        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {!isFirtStep && (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            )}
            {!isLastStep ? (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="button">
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
      {console.log(currentStep)}
    </div>
  );
}

export default App;
