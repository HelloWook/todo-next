import type { Meta, StoryObj } from '@storybook/react';

import TodoList from './TodoList';

const meta: Meta<typeof TodoList> = {
    component: TodoList,
    title: 'TodoList',
    tags: ['autodocs'],
    argTypes: {}
};
export default meta;

type Story = StoryObj<typeof TodoList>;

export const Default: Story = {
    args: {}
};
