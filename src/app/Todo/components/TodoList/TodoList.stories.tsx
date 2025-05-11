import type { Meta, StoryObj } from '@storybook/react';

import TodoList from './TodoList';
import { mockTodo } from '../../data/todos';

const meta: Meta<typeof TodoList> = {
    component: TodoList,
    title: 'molecules/TodoList',
    tags: ['autodocs'],
    argTypes: {}
};
export default meta;

type Story = StoryObj<typeof TodoList>;

export const Default: Story = {
    args: {
        todos: mockTodo
    }
};
