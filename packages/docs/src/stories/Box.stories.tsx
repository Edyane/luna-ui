import type { StoryObj, Meta } from '@storybook/react';
import { Text } from '../../../react/src/components/Text';
import { Box } from '@luna-ui/react';
import './styles.css';

// docs
const meta = {
	title: 'Layout/Box',
	component: Box,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		type: 'default',
		children: 'Enviar',
	},
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

// box types
export const PrimaryBox: Story = {
	args: {
		children: (
			<Text>
				A simple container for organizing stuff of any sizes or hierarchies.
			</Text>
		),
	},
};