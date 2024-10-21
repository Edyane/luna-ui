import type { StoryObj, Meta } from '@storybook/react';
import { Avatar, AvatarProps } from '@luna-ui/react';

// docs
const meta = {
	title: 'Avatar/Avatar',
	component: Avatar,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
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
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// avatar types
export const Primary: Story = {
	args: {
		src: 'https://github.com/edyane.png',
		alt: 'Edyane',
	},
}

export const WithFallback: Story = {
	args: {
		src: undefined,
	},
};
