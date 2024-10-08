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

export const PrimaryRound: StoryObj<ButtonProps> = {
    args: {
        type: 'primaryRound',
        children: 'Primary Round'
    },
};

export const Second: StoryObj<ButtonProps> = {
    args: {
        type: 'second',
        children: 'Second Button'
    },
};

export const Tertiary: StoryObj<ButtonProps> = {
    args: {
        type: 'tertiary',
        children: 'Tertiary Button'
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

export const Round: StoryObj<ButtonProps> = {
    args: {
        type: 'round',
        children: 'Round Button'
    },
};