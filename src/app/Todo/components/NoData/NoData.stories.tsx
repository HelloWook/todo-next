import type { Meta, StoryObj } from '@storybook/react';

import NoData from './NoData';

const meta: Meta<typeof NoData> = {
    component: NoData,
    title: 'atoms/NoData',
    tags: ['autodocs'],
    argTypes: {}
};
export default meta;

type Story = StoryObj<typeof NoData>;

export const TODO: Story = {
    name: 'todo 캐릭터',
    render: () => <NoData isDone={false} />
};

export const DONE: Story = {
    name: 'todo 캐릭터',
    render: () => <NoData isDone={true} />
};
