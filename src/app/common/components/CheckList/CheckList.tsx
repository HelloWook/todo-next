'use client';
import React, { Dispatch } from 'react';
import { Heading, Text } from '../Text/Text';
import clsx from 'clsx';
import Image from 'next/image';
import { editTodo } from '@/app/Todo/utils/action';
import { TodoData } from '@/app/Todo/types/todo';
import { useRouter } from 'next/navigation';
interface CheckListProps {
    idx: number;
    isDone: boolean;
    content: string;
    setTodos: Dispatch<React.SetStateAction<TodoData[]>>;
}

type CircleProps = Pick<CheckListProps, 'isDone' | 'idx'> &
    Partial<Pick<CheckListProps, 'setTodos'>>;

type DetailCheckListProps = Pick<CheckListProps, 'isDone' | 'idx' | 'content'>;

const commonStlye =
    ' bg- rounded-3xl border-2 border-slate-900 flex items-center w-full cursor-pointer';

const CircleBackGroundStlye = Object.freeze({
    complete: 'bg-violet-600',
    default: 'bg-yellow-50'
});

const CheckBackGroundListStlye = Object.freeze({
    complete: 'bg-violet-100',
    default: 'bg-white'
});

// 원 컴포넌트
const Circle = ({ isDone, idx, setTodos }: CircleProps) => {
    const backgroundColor = isDone
        ? CircleBackGroundStlye.complete
        : CircleBackGroundStlye.default;
    const newIsCompleted = !isDone;

    const handleClick = async () => {
        if (!setTodos) return;

        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === idx
                    ? { ...todo, isCompleted: newIsCompleted }
                    : todo
            )
        );
        try {
            await editTodo(
                {
                    isCompleted: !isDone
                },
                idx
            );
        } catch (error) {
            setTodos((prev) =>
                prev.map((todo) =>
                    todo.id === idx ? { ...todo, isCompleted: isDone } : todo
                )
            );
        }
    };

    return (
        <div
            className={clsx(
                'w-[32px] h-[32px] rounded-full border-2 border-slate-900  mr-[16px] flex items-center justify-center',
                backgroundColor
            )}
            onClick={handleClick}
        >
            {isDone && (
                <Image
                    src={'/icons/check.svg'}
                    width={16}
                    height={10}
                    alt="체크 표시"
                    unoptimized
                />
            )}
        </div>
    );
};

export const CheckList = ({
    isDone,
    idx,
    content,
    setTodos
}: CheckListProps) => {
    const backgroundColor = isDone
        ? CheckBackGroundListStlye.complete
        : CheckBackGroundListStlye.default;

    const router = useRouter();

    const handleClick = () => {
        router.push('item' + `/${idx}`);
    };

    return (
        <div
            className={clsx(
                'max-w-[588px] h-[50px] pl-[14px] ',
                commonStlye,
                backgroundColor
            )}
            onClick={handleClick}
        >
            <Circle isDone={isDone} idx={idx} setTodos={setTodos} />
            <Text className={isDone ? 'line-through' : ''}>{content}</Text>
        </div>
    );
};

export const DetailCheckList = ({
    isDone,
    content,
    idx
}: DetailCheckListProps) => {
    const backgroundColor = isDone
        ? CheckBackGroundListStlye.complete
        : CheckBackGroundListStlye.default;

    return (
        <div
            className={clsx(
                ' justify-center  h-[64px]',
                commonStlye,
                backgroundColor
            )}
        >
            <Circle isDone={isDone} idx={idx} />
            <Heading className={isDone ? 'underline' : ''}>{content}</Heading>
        </div>
    );
};
