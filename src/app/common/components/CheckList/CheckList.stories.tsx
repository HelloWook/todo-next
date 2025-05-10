import type { Meta, StoryObj } from '@storybook/react';

import { CheckList, DetailCheckList } from './CheckList';

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
    render: () => <CheckList isDone={false}></CheckList>
};

export const Complete: Story = {
    name: '체크 완료 스타일',
    render: () => <CheckList isDone={true}></CheckList>
};

export const DetailDefault: Story = {
    name: '디테일 기본 스타일',
    render: () => <DetailCheckList isDone={false}></DetailCheckList>
};

export const CompleteDefault: Story = {
    name: '디테일 체크 완료 스타일',
    render: () => <DetailCheckList isDone={true}></DetailCheckList>
};
