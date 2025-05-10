import type { Meta, StoryObj } from '@storybook/react';

import Form from './Form';

const meta: Meta<typeof Form> = {
    component: Form,
    title: 'molecules/Form',
    tags: ['autodocs'],
    argTypes: {}
};
export default meta;

type Story = StoryObj<typeof Form>;

export const Default: Story = {
    args: {}
};
