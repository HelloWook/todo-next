import type { Meta, StoryObj } from '@storybook/react';

import Gnb from './Gnb';

const meta: Meta<typeof Gnb> = {
    component: Gnb,
    title: 'Gnb',
    tags: ['autodocs'],
    argTypes: {}
};
export default meta;

type Story = StoryObj<typeof Gnb>;

export const Default: Story = {
    args: {}
};
