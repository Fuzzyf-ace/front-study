import { Typography } from "antd";
import { FC } from "react";

type Props = {
  title: string;
  level?: 1 | 2 | 3 | 4 | 5;
};
const Title: FC<Props> = ({ title, level = 1 }: Props) => {
  return <Typography.Title level={level}>{title}</Typography.Title>;
};

export default Title;
