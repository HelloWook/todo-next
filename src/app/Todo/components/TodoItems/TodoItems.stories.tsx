import type { Meta, StoryObj } from '@storybook/react';

import TodoItems from './TodoItems';

const meta: Meta<typeof TodoItems> = {
    component: TodoItems,
    title: 'TodoItems',
    tags: ['autodocs'],
    argTypes: {}
};
export default meta;

type Story = StoryObj<typeof TodoItems>;

export const Default: Story = {
    args: {}
};
