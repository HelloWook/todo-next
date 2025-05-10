import type { Meta, StoryObj } from '@storybook/react';

import Stauts from './Stauts';

const meta: Meta<typeof Stauts> = {
    component: Stauts,
    title: 'atoms/Stauts',
    tags: ['autodocs'],
    argTypes: {}
};
export default meta;

type Story = StoryObj<typeof Stauts>;

export const TODO: Story = {
    name: '투두 스타일',
    render: () => <Stauts isDone={false} />
};

export const Complete: Story = {
    name: '완료 스타일',
    render: () => <Stauts isDone={true} />
};
