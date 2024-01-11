import React from "react";
import "./styles/index.scss";
import Button, { ButtonSize, ButtonType } from "./components/Button";
function App() {
  return (
    <div className="App">
      <Button btnType={ButtonType.PRIMARY} onClick={() => {}}>
        primary
      </Button>
      <Button btnType="link" href="#" hrefLang="">
        dasf
      </Button>
    </div>
  );
}

export default App;
