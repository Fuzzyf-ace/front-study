import type { Meta, StoryObj } from "@storybook/react";
import "../../styles/index.scss";
import Input from ".";
import Icon from "../Icon";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
const meta = {
  title: "Example/Input",
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    size: {
      options: ["sm", "lg"],
      control: { type: "radio" },
    },
    disabled: {
      control: "boolean",
    },
    icon: {
      control: "text",
    },

    suffix: {
      control: "text",
    },
  },
} as Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InputDefault: Story = {
  args: {
    size: "sm",
    disabled: false,
    icon: "react",
    prefix: <Icon icon="coffee" theme="danger" size="sm" />,
    suffix: "dsfa",
  },
};
