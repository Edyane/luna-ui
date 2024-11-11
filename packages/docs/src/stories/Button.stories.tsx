import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@luna-ui/react';
import './styles.css';

// docs
const meta = {
    title: 'Type Buttons/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        type: 'default',
        children: 'Enviar',
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// type buttons
export const Primary: Story = {
    args: {
        type: 'primary',
        children: 'Primary Button'
    },
};

export const PrimaryRound: Story = {
    args: {
        type: 'primaryRound',
        children: 'Primary Round'
    },
};

export const Second: Story = {
    args: {
        type: 'second',
        children: 'Second Button'
    },
};

export const Tertiary: Story = {
    args: {
        type: 'tertiary',
        children: 'Tertiary Button'
    },
};

export const Danger: Story = {
    args: {
        type: 'danger',
        children: 'Danger Button'
    },
};

export const Success: Story = {
    args: {
        type: 'success',
        children: 'Success Button'
    },
};

export const Round: Story = {
    args: {
        type: 'round',
        children: 'Round Button'
    },
};