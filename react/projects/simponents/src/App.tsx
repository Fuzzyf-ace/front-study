import React from "react";
import "./styles/index.scss";
import Button, { ButtonSize, ButtonType } from "./components/Button";
import Menu from "./components/Menu";
import MenuItem from "./components/Menu/menuItem";
function App() {
  return (
    <div className="App">
      <Button btnType={ButtonType.PRIMARY} onClick={() => {}}>
        primary
      </Button>
      <Button btnType="link" href="#" hrefLang="">
        dasf
      </Button>
      <Menu
        onSelect={(index) => {
          console.log(index);
        }}
      >
        <MenuItem index={0}>cool link</MenuItem>
        <MenuItem index={1}>cool link</MenuItem>
        <MenuItem index={2}>cool link</MenuItem>
      </Menu>
    </div>
  );
}

export default App;
