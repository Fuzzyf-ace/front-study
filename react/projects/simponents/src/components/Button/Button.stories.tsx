import type { Meta, StoryObj } from "@storybook/react";
import "../../styles/index.scss";
import Button, { ButtonType } from ".";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    btnType: {
      options: [
        ButtonType.PRIMARY,
        ButtonType.SECONDARY,
        ButtonType.SAFE,
        ButtonType.DANGER,
        ButtonType.LINK,
      ],
      control: {
        type: "select",
      },
    },
    children: { control: "text" },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    href: {
      control: "text",
      defaultValue: "#",
      description: "href for link button",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Button",
    btnType: "primary",
    size: "md",
    href: "#",
  },
};
