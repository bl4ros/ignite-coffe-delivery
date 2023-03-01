import { Meta, StoryObj } from "@storybook/react";
import { ButtonBase } from "../../components/button";

export default {
  title: "Components/Button",
  component: ButtonBase,
} as Meta;

const buttonBaseProps = {
  text: "This is a button",
  disabled: true,
};

export const ButtonComponent = (args: any) => {
  return <ButtonBase {...args} />;
};

ButtonComponent.args = {
  ...buttonBaseProps,
};
