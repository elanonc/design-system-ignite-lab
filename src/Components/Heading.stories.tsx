import { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from "../Components/Heading";

export default {
    title: "Components/Heading",
    component: Heading,
    args: {
        children: 'lorem ipsum.', 
        size: 'md'
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {};

export const Small: StoryObj<HeadingProps> = {
    args: {
        size: 'sm'
    }
};

export const Large: StoryObj<HeadingProps> = {
    args: {
        size: 'lg'
    }
};

export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>Testando com H1</h1>
        )
    }, 
    argTypes: {
        children: {
            table: {
                disable: true,

            }
        },
        asChild: {
            table: {
                disable: true
            }
        }
    }
};