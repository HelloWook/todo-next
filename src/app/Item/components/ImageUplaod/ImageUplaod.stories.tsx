import type { Meta, StoryObj } from '@storybook/react';

import ImageUplaod from './ImageUplaod';

const meta: Meta<typeof ImageUplaod> = {
    component: ImageUplaod,
    title: 'molecules/ImageUplaod',
    tags: ['autodocs'],
    argTypes: {}
};
export default meta;

type Story = StoryObj<typeof ImageUplaod>;

export const Default: Story = {
    args: {}
};
