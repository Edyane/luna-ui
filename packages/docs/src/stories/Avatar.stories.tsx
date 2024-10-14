import type { StoryObj, Meta } from '@storybook/react';
import { Avatar, AvatarProps } from '@luna-ui/react';

export default {
	title: 'Data display/Avatar ',
	component: Avatar,
	args: {
		src: 'https://github.com/edyane.png',
		alt: 'Edyane',
	},
	argTypes: {
		src: {
			control: {
				type: 'text',
			},
		},
	},
} as Meta<AvatarProps>

type Story = StoryObj<AvatarProps>

export const Primary: Story = {}

export const WithFallback: Story = {
	args: {
		src: undefined,
	},
};
