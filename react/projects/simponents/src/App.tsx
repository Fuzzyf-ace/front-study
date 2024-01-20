import "./styles/index.scss";
import Button, { ButtonType } from "./components/Button";
import Menu from "./components/Menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import Icon from "./components/Icon";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import Input from "./components/Input";
library.add(fas);
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
        // menuMode="vertical"
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
      <Icon icon="coffee" theme="danger" size="10x" />
      <Input icon={"chevron-right"} />
    </div>
  );
}

export default App;
