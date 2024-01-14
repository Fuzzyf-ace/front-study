import classNames from "classnames";
import { FC, createContext, useState } from "react";

export type MenuProps = {
  defaultIndex?: number;
  mode?: "horizontal" | "vertical";
  onSelect?: (selectedIndex: number) => void;
} & React.HTMLAttributes<HTMLElement>;

type MenuContextType = {
  selectedIndex: number;
  onSelect?: (selectedIndex: number) => void;
};
export const MenuContext = createContext<MenuContextType>({
  selectedIndex: 0,
});

const Menu: FC<MenuProps> = (props) => {
  const { defaultIndex, className, mode, style, onSelect, children } = props;
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);
  const classname = classNames("menu", className, {
    "menu-vertical": mode === "vertical",
  });

  return (
    <ul className={classname} style={style}>
      <MenuContext.Provider
        value={{
          selectedIndex: selectedIndex ? selectedIndex : 0,
          onSelect: (index) => {
            setSelectedIndex(index);
            if (onSelect) onSelect(index);
          },
        }}
      >
        {children}
      </MenuContext.Provider>
    </ul>
  );
};

// why I can set default props here?
Menu.defaultProps = {
  defaultIndex: 0,
  mode: "horizontal",
};

export default Menu;
