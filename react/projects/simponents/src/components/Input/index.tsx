import React, { FC, InputHTMLAttributes } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Icon from "../Icon";
import classNames from "classnames";
export type InputSize = "lg" | "sm";
// use omit to remove size from InputHTMLAttributes to escape conflict
export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, "size" | "prefix"> {
  disabled?: boolean;
  size?: InputSize;
  icon?: IconProp;
  prefix?: string | React.ReactElement;
  suffix?: string | React.ReactElement;
}
const Input: FC<InputProps> = (props) => {
  const { disabled, size, icon, prefix, suffix, style, ...restProps } = props;
  const cnames = classNames("input-wrapper", {
    [`input-size-${size}`]: size,
    "is-disabled": disabled,
    "input-group": prefix || suffix,
    "input-group-suffix": !!suffix,
    "input-group-prefix": !!prefix,
  });
  const fixControlledValue = (value: any) => {
    if (typeof value === "undefined" || value === null) {
      return "";
    }
    return value;
  };
  if ("value" in props) {
    delete restProps.defaultValue;
    restProps.value = fixControlledValue(props.value);
  }
  return (
    <div className={cnames} style={style}>
      {prefix && <div className="input-group-prefix">{prefix}</div>}
      {icon && (
        <div className="icon-wrapper">
          <Icon icon={icon} title={`title-${icon}`} />
        </div>
      )}
      <input className="input-inner" disabled={disabled} {...restProps} />
      {suffix && <div className="input-group-suffix">{suffix}</div>}
    </div>
  );
};

export default Input;
