import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from '@luna-ui/react';

export default {
    title: 'Button',
    component: Button,

    args: {
        children: 'Enviar',
    },

} as Meta<ButtonProps>

// export const Primary: StoryObj<ButtonProps> = {}

export const Primary: StoryObj<ButtonProps> = {
    args: {
        type: 'primary',
        children: 'Primary Button'
    },
};

export const Danger: StoryObj<ButtonProps> = {
    args: {
        type: 'danger',
        children: 'Danger Button'
    },
};
export const Success: StoryObj<ButtonProps> = {
    args: {
        type: 'success',
        children: 'Success Button'
    },
};

export const Large: StoryObj<ButtonProps> = {
    args: {
        size: 'large',
        children: 'Large Button'
    },
};

export const Small: StoryObj<ButtonProps> = {
    args: {
        size: 'small',
        children: 'Small Button'
    },
};