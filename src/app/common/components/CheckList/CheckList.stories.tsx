import type { Meta, StoryObj } from '@storybook/react';

import { CheckList, DetailCheckList } from './CheckList';
import { mockTodo } from '@/app/Todo/data/todos';

const meta: Meta<typeof CheckList> = {
    component: CheckList,
    title: 'molecules/CheckList',
    tags: ['autodocs'],
    argTypes: {}
};
export default meta;

type Story = StoryObj<typeof CheckList>;

export const Default: Story = {
    name: '기본 스타일',
    render: () => (
        <CheckList
            content={mockTodo[1].name}
            isDone={mockTodo[1].isCompleted}
            idx={mockTodo[1].id}
            setTodos={}
        ></CheckList>
    )
};

export const Complete: Story = {
    name: '체크 완료 스타일',
    render: () => (
        <CheckList
            content={mockTodo[1].name}
            isDone={mockTodo[1].isCompleted}
            idx={mockTodo[1].id}
        ></CheckList>
    )
};

export const DetailDefault: Story = {
    name: '디테일 기본 스타일',
    render: () => (
        <DetailCheckList
            content={mockTodo[1].name}
            isDone={mockTodo[1].isCompleted}
            idx={mockTodo[1].id}
        ></DetailCheckList>
    )
};

export const CompleteDefault: Story = {
    name: '디테일 체크 완료 스타일',
    render: () => (
        <DetailCheckList
            content={mockTodo[1].name}
            isDone={mockTodo[1].isCompleted}
            idx={mockTodo[1].id}
        ></DetailCheckList>
    )
};
