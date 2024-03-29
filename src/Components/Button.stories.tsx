import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "../Components/Button";

export default {
    title: "Components/Button",
    component: Button,
    args: {
        children: 'create something'
    },
    argTypes: {
    }
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {};