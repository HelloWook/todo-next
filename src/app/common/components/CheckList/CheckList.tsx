'use client';
import React, { Dispatch, ReactNode } from 'react';
import { Text } from '../Text/Text';
import clsx from 'clsx';
import Image from 'next/image';
import { editTodo } from '@/app/Todo/utils/action';
import { TodoData, DetailTodo } from '@/app/Todo/types/todo';
import { useRouter } from 'next/navigation';

interface CheckListProps {
    idx: number;
    isDone: boolean;
    content: string;
    setTodos: Dispatch<React.SetStateAction<TodoData[]>>;
}

type CircleProps = Pick<CheckListProps, 'isDone' | 'idx'> & {
    handleClick: (e: React.MouseEvent<HTMLDivElement>) => Promise<void>;
    className?: string;
};

type DetailCheckListProps = Pick<CheckListProps, 'isDone' | 'idx'> & {
    setTodo: Dispatch<React.SetStateAction<DetailTodo | null>>;
    children: ReactNode;
};

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
const Circle = ({ isDone, handleClick, className }: CircleProps) => {
    const backgroundColor = isDone
        ? CircleBackGroundStlye.complete
        : CircleBackGroundStlye.default;

    return (
        <div
            className={clsx(
                'w-[32px] h-[32px] rounded-full border-2 border-slate-900  mr-[16px] flex items-center justify-center',
                backgroundColor,
                className
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

    const handleCircleClick = async (
        event: React.MouseEvent<HTMLDivElement>
    ) => {
        event.stopPropagation();

        const newIsCompleted = !isDone;

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
                    isCompleted: newIsCompleted
                },
                idx
            );
        } catch (error) {
            setTodos((prev) =>
                prev.map((todo) =>
                    todo.id === idx
                        ? { ...todo, isCompleted: !newIsCompleted }
                        : todo
                )
            );
        }
    };

    return (
        <div
            className={clsx(
                ' h-[50px] pl-[14px] w-full',
                commonStlye,
                backgroundColor
            )}
            onClick={handleClick}
        >
            <Circle isDone={isDone} idx={idx} handleClick={handleCircleClick} />
            <Text className={isDone ? 'line-through' : ''}>{content}</Text>
        </div>
    );
};

export const DetailCheckList = ({
    isDone,
    children,
    idx,
    setTodo
}: DetailCheckListProps) => {
    const backgroundColor = isDone
        ? CheckBackGroundListStlye.complete
        : CheckBackGroundListStlye.default;

    const handleCircleClick = async (
        event: React.MouseEvent<HTMLDivElement>
    ) => {
        event.stopPropagation();
        const newIsCompleted = !isDone;

        try {
            setTodo((prev) => {
                if (!prev) return prev;
                return { ...prev, isCompleted: newIsCompleted };
            });
            await editTodo(
                {
                    isCompleted: newIsCompleted
                },
                idx
            );
        } catch (error) {
            setTodo((prev) => {
                if (!prev) return prev;
                return { ...prev, isCompleted: !newIsCompleted };
            });
        }
    };

    return (
        <div
            className={clsx(
                ' justify-center h-[64px]',
                commonStlye,
                backgroundColor
            )}
        >
            <Circle
                isDone={isDone}
                idx={idx}
                handleClick={handleCircleClick}
                className="ml-[100px]"
            />
            {children}
        </div>
    );
};
