import type { Meta, StoryObj } from '@storybook/react';

import { Button, CircleButton } from './Button';

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'atoms/Button',
    tags: ['autodocs'],
    argTypes: {}
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    name: '기본 버튼 ',
    render: () => <Button variant="primary">{'추가하기'}</Button>
};

export const Secondary: Story = {
    name: '세컨드 스타일 ',
    render: () => <Button variant="secondary">{'수정 완료'}</Button>
};

export const Suceess: Story = {
    name: '성공 버튼',
    render: () => <Button variant="success">{'성공'}</Button>
};

export const Delete: Story = {
    name: '삭제 버튼 ',
    render: () => <Button variant="delete">{'삭제'}</Button>
};

export const Circle: Story = {
    name: '삭제 버튼 ',
    render: () => <CircleButton />
};
