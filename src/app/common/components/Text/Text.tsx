import clsx from 'clsx';
import React, { ReactNode } from 'react';

interface TextBaseProps {
    className?: string;
    children: ReactNode;
}

const CommonStlye = 'flex';

// 기본 텍스트 컴포넌트
export const Text = ({ children, className }: TextBaseProps) => {
    return (
        <span className={clsx('text-nm-16-regular ', CommonStlye, className)}>
            {children}
        </span>
    );
};

// 볼드 텍스트
export const TextBold = ({ children, className }: TextBaseProps) => {
    return (
        <span className={clsx('text-nm-16-bold', CommonStlye, className)}>
            {children}
        </span>
    );
};

// 중간 크기 제목
export const SubHeading = ({ children, className }: TextBaseProps) => {
    return <span className={clsx(CommonStlye, className)}>{children}</span>;
};

// 큰 제목
export const Heading = ({ children, className }: TextBaseProps) => {
    return (
        <span className={clsx('text-nm-20-bold', CommonStlye, className)}>
            {children}
        </span>
    );
};

// 더 큰 제목
export const LargeHeading = ({ children, className }: TextBaseProps) => {
    return (
        <span className={clsx('text-xl font-bold', CommonStlye, className)}>
            {children}
        </span>
    );
};
