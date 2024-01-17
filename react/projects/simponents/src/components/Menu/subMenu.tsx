import classNames from "classnames";
import React, { useContext } from "react";
import { MenuContext } from ".";
import Icon from "../Icon";
import { CSSTransition } from "react-transition-group";
import Transition from "../Transistion";

export type SubMenuProps = {
  index?: string;
  title: string;
} & React.HTMLAttributes<HTMLElement>;

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const { index, title, className, children, defaultChecked } = props;
  const classname = classNames("menu-item", "submenu-item", className, {
    active: index === useContext(MenuContext).selectedIndex,
  });
  const [menuOpen, setMenuOpen] = React.useState(defaultChecked);
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  };
  let timer: any;
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    e.preventDefault();
    clearTimeout(timer);
    timer = setTimeout(() => {
      setMenuOpen(toggle);
    }, 300);
  };
  const clickEvents =
    useContext(MenuContext).menuMode === "vertical"
      ? {
          onClick: handleClick,
        }
      : {};
  const hoverEvents =
    useContext(MenuContext).menuMode === "horizontal"
      ? {
          onMouseEnter: (e: React.MouseEvent) => {
            handleMouse(e, true);
          },
          onMouseLeave: (e: React.MouseEvent) => {
            handleMouse(e, false);
          },
        }
      : {};
  const renderChildren = () => {
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement =
        child as React.FunctionComponentElement<SubMenuProps>;
      const { displayName } = childElement.type;
      if (displayName === "MenuItem")
        return React.cloneElement(childElement, { index: `${index}-${i}` });
      else throw Error("SubMenu has a child which is not a MenuItem component");
    });
    return (
      <Transition in={menuOpen} timeout={500} animation="zoom-in-left">
        <ul
          className={classNames("submenu", {
            "menu-opened": menuOpen,
          })}
        >
          {childrenComponent}
        </ul>
      </Transition>
    );
  };
  return (
    <li key={index} className={classname} {...hoverEvents}>
      <div
        className={classNames("submenu-title", {
          vertical: useContext(MenuContext).menuMode === "vertical",
          opened: menuOpen,
        })}
        {...clickEvents}
      >
        {title}
        <Icon icon="angle-down" className="arrow-icon" />
      </div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = "SubMenu";

export default SubMenu;
