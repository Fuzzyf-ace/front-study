import { FC, ReactNode } from "react";
import Title from "./Title";

type Props = {
  children?: ReactNode;
};

type CanvasType = FC<Props> & { Title: typeof Title };

const Canvas: CanvasType = ({ children }) => {
  return <div className="canvas">{children}</div>;
};

Canvas.Title = Title;
export default Canvas;
