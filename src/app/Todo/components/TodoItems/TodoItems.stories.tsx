import type { Meta, StoryObj } from '@storybook/react';

import TodoItems from './TodoItems';
import { mockTodo } from '../../data/todos';

const meta: Meta<typeof TodoItems> = {
    component: TodoItems,
    title: 'molecules/TodoItems',
    tags: ['autodocs'],
    argTypes: {}
};
export default meta;

type Story = StoryObj<typeof TodoItems>;

export const Default: Story = {
    args: {
        todos: mockTodo
    }
};
