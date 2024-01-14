import classNames from "classnames";
import { FC, useContext } from "react";
import { MenuContext } from ".";
export type MenuItemProps = {
  index?: string;
  disabled?: boolean;
} & React.HTMLAttributes<HTMLElement>;

const MenuItem: FC<MenuItemProps> = (props) => {
  const { index, disabled, className, style, children } = props;
  const classname = classNames("menu-item", className, {
    disabled: disabled,
    active: index === useContext(MenuContext).selectedIndex,
  });
  const context = useContext(MenuContext);
  const handleClick = () => {
    if (context.onSelect && !disabled) {
      context.onSelect(index ? index : "0");
    }
  };
  return (
    <li className={classname} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};

MenuItem.displayName = "MenuItem";

export default MenuItem;
