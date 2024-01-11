import { FC } from "react";
import classnames from "classnames";
export const enum ButtonSize {
  LARGE = "lg",
  MEDIUM = "md",
  SMALL = "sm",
}

export const enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  DANGER = "danger",
  SAFE = "safe",
  LINK = "link",
}
type ButtonProps = {
  btnType?: ButtonType | string;
  size?: ButtonSize | string;
  href?: string;
  disabled?: boolean;
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLElement> &
  React.AnchorHTMLAttributes<HTMLElement>;

const DEFAULT_BUTTON_PROPS: ButtonProps = {
  btnType: ButtonType.PRIMARY,
  size: ButtonSize.MEDIUM,
};

const Button: FC<ButtonProps> = (props) => {
  const { btnType, size, disabled, children, href, className, ...restProps } = {
    ...DEFAULT_BUTTON_PROPS,
    ...props,
  };
  const classname: string = classnames(
    "btn",
    `btn-${btnType}`,
    `btn-${size}`,
    className,
    {
      disabled: disabled,
    }
  );

  if (btnType === ButtonType.LINK)
    if (!href) throw Error("href is missing while button type is link");
    else
      return (
        <a href={href} className={classname} {...restProps}>
          {children}
        </a>
      );
  else
    return (
      <button className={classname} {...restProps}>
        {children}
      </button>
    );
};

export default Button;
