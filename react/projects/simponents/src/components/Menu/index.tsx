import classNames from "classnames";
import {
  Children,
  FC,
  FunctionComponentElement,
  cloneElement,
  createContext,
  useState,
} from "react";
import { MenuItemProps } from "./menuItem";

export type MenuProps = {
  defaultIndex?: string;
  menuMode?: "horizontal" | "vertical";
  onSelect?: (selectedIndex: string) => void;
} & React.HTMLAttributes<HTMLElement>;

type MenuContextType = {
  selectedIndex: string;
  onSelect?: (selectedIndex: string) => void;
  menuMode?: "horizontal" | "vertical";
};
export const MenuContext = createContext<MenuContextType>({
  selectedIndex: "0",
});

const Menu: FC<MenuProps> = (props) => {
  const { defaultIndex, className, menuMode, style, onSelect, children } =
    props;
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);
  const classname = classNames(
    "menu",
    className,
    {
      "menu-vertical": menuMode === "vertical",
    },
    {
      "menu-horizontal": menuMode === "horizontal",
    }
  );
  const renderChildren = () => {
    return Children.map(children, (child, index) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;
      // 验证子元素是否是 MenuItem 或者 SubMenu
      if (displayName === "MenuItem" || displayName === "SubMenu")
        return cloneElement(childElement, { index: index.toString() });
      else throw Error("Menu has a child which is not a MenuItem component");
    });
  };
  return (
    <ul className={classname} style={style}>
      <MenuContext.Provider
        value={{
          selectedIndex: selectedIndex ? selectedIndex : "0",
          onSelect: (index) => {
            setSelectedIndex(index.toString());
            if (onSelect) onSelect(index);
          },
          menuMode: menuMode ? menuMode : "horizontal",
        }}
      >
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};

// why I can set default props here?
Menu.defaultProps = {
  defaultIndex: "0",
  menuMode: "horizontal",
};

export default Menu;
