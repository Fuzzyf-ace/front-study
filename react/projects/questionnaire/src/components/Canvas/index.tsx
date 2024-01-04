import { FC, ReactNode } from "react";
import Title from "./Title";
import Radio from "./Radio";

type Props = {
  children?: ReactNode;
};

type CanvasType = FC<Props> & { Title: typeof Title } & {
  Radio: typeof Radio;
};

const Canvas: CanvasType = ({ children }) => {
  return <div className="canvas">{children}</div>;
};

Canvas.Title = Title;
Canvas.Radio = Radio;
export default Canvas;
