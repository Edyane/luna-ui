import type { StoryObj, Meta } from '@storybook/react'
import {
	Box,
	Text,
	Tooltip,
	TooltipProps,
	TooltipProvider,
} from '@luna-ui/react';
import './styles.css';

export default {
	title: 'Surfaces/Tooltip ',
	component: Tooltip,
	args: {
		children: (
			<Box css={{ width: '$12' }}>
				<Text css={{ display: 'flex', justifyContent: 'center', cursor: 'pointer' }}>26</Text>
			</Box>
		),
		description: 'October 26 - Available',
	},
	decorators: [
		(story) => {
			return <TooltipProvider>{story()}</TooltipProvider>
		},
	],
} as Meta<TooltipProps>

type Story = StoryObj<TooltipProps>

export const Primary: Story = {}
