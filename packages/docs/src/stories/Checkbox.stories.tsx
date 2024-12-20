import type { StoryObj, Meta } from '@storybook/react';
import { Box, Text, Checkbox, CheckboxProps } from '@luna-ui/react';
import './styles.css';

export default {
	title: 'Form/Checkbox',
	component: Checkbox,
	args: {},
	decorators: [
		(story) => {
			return (
				<Box as="label" css={{ display: 'flex', gap: '$2' }}>
					{story()}
					<Text>Accept terms of use</Text>
				</Box>
			)
		},
	],
} as Meta<CheckboxProps>

type Story = StoryObj<CheckboxProps>

export const Primary: Story = {
	args: {},
};
