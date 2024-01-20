import React, { DOMElement } from "react";
import { CSSTransition } from "react-transition-group";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";
type Animation =
  | "zoom-in-top"
  | "zoom-in-left"
  | "zoom-in-bottom"
  | "zoom-in-right";

type TransitionProps = CSSTransitionProps & {
  animation?: Animation;
};

const Transition: React.FC<TransitionProps> = (props) => {
  const { children, classNames, animation, ...restProps } = props;
  const ref = React.useRef(null);
  return (
    <CSSTransition
      classNames={classNames ? classNames : animation}
      {...restProps}
      nodeRef={ref}
    >
      {children}
    </CSSTransition>
  );
};

Transition.defaultProps = {
  unmountOnExit: true,
  appear: true,
};

export default Transition;
