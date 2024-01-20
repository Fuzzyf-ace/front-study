import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React from "react";

export type ThemeProps =
  | "primary"
  | "secondary"
  | "success"
  | "safe"
  | "info"
  | "warning"
  | "danger"
  | "light"
  | "dark";
export interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps;
  icon: IconProp;
}
const Icon: React.FC<IconProps> = (props) => {
  const { className, theme, ...restProps } = props;
  const classname = classNames("icon", className, { [`icon-${theme}`]: theme });
  return <FontAwesomeIcon className={classname} {...restProps} />;
};
export default Icon;
