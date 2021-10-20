import {Button as Btn, ButtonProps} from "./Button";
import {Meta, Story} from "@storybook/react";

export default {
  component: Btn,
  title: "ui/Button",
} as Meta;

const Template: Story<ButtonProps> = args => <Btn {...args} />;

export const Button = Template.bind({});
Button.args = {
  theme: "solid-primary",
  children: "Button",
  disabled: false,
  className: "",
};
