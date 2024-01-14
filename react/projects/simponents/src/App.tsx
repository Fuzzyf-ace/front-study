import React from "react";
import "./styles/index.scss";
import Button, { ButtonSize, ButtonType } from "./components/Button";
import Menu from "./components/Menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
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
        menuMode="vertical"
      >
        <MenuItem>cool link</MenuItem>
        <MenuItem>cool link</MenuItem>
        <MenuItem>cool link</MenuItem>
        <SubMenu title="dropdown" defaultChecked={true}>
          <MenuItem>dropdown1</MenuItem>
          <MenuItem>dropdown2</MenuItem>
          <MenuItem>dropdown3</MenuItem>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default App;
