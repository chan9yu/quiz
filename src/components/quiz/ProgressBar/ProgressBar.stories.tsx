import type { Meta, StoryObj } from '@storybook/react';
import ProgressBar from './ProgressBar';

const meta = {
	title: 'Components/Quiz/ProgressBar',
	component: ProgressBar,
	tags: ['autodocs']
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: 'ProgressBar'
	}
};
