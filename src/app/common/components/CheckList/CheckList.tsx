import React, { ReactNode } from 'react';
import { Heading, Text } from '../Text/Text';
import clsx from 'clsx';
import Image from 'next/image';

interface CheckListProps {
    isDone?: boolean;
    children: ReactNode;
}

type CircleProps = Pick<CheckListProps, 'isDone'>;

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
const Circle = ({ isDone = false }: CircleProps) => {
    const backgroundColor = isDone
        ? CircleBackGroundStlye.complete
        : CircleBackGroundStlye.default;

    return (
        <div
            className={clsx(
                'w-[32px] h-[32px] rounded-full border-2 border-slate-900  mr-[16px] flex items-center justify-center',
                backgroundColor
            )}
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

export const CheckList = ({ isDone = false, children }: CheckListProps) => {
    const backgroundColor = isDone
        ? CheckBackGroundListStlye.complete
        : CheckBackGroundListStlye.default;

    return (
        <div
            className={clsx(
                'max-w-[588px] h-[50px] pl-[14px] ',
                commonStlye,
                backgroundColor
            )}
        >
            <Circle isDone={isDone} />
            <Text className={isDone ? 'line-through' : ''}>{children}</Text>
        </div>
    );
};

export const DetailCheckList = ({ isDone, children }: CheckListProps) => {
    const backgroundColor = isDone
        ? CheckBackGroundListStlye.complete
        : CheckBackGroundListStlye.default;

    return (
        <div
            className={clsx(
                'w-[996px] h-[64px] justify-center ',
                commonStlye,
                backgroundColor
            )}
        >
            <Circle isDone={isDone} />
            <Heading className={isDone ? 'underline' : ''}>{children}</Heading>
        </div>
    );
};
