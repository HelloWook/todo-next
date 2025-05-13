import clsx from 'clsx';
import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { TextBold } from '../Text/Text';
import Image from 'next/image';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'delete' | 'success';
    className?: string;
    children: ReactNode;
}

const ButtonStyle = Object.freeze({
    primary: ' bg-violet-600 text-white ',
    secondary: ' bg-slate-200 text-slate-900 ',
    delete: ' bg-rose-500 text-white ',
    success: ' bg-lime-300 text-slate-900 '
});

const commonButtonStyle =
    'relative w-full h-[56px] rounded-full border-2 border-slate-900 flex justify-center items-center ';

export const Button = ({
    variant = 'primary',
    className,
    children,
    ...rest
}: ButtonProps) => {
    return (
        <div className={clsx('relative max-w-[168px] w-full ', className)}>
            <div className="absolute w-full h-full bg-slate-900 text-slate-900 rounded-3xl border-2 border-slate-900 translate-x-1 translate-y-1" />
            <button
                className={clsx(
                    'flex justify-center items-center w-full cursor-pointer',
                    commonButtonStyle,
                    ButtonStyle[variant]
                )}
                {...rest}
            >
                <TextBold>{children}</TextBold>
            </button>
        </div>
    );
};

interface CircleButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

export const CircleButton = ({ className, onClick }: CircleButton) => {
    return (
        <button
            className={clsx(
                'w-[64px] h-[64px] rounded-full bg-slate-200 flex items-center justify-center cursor-pointer',
                className
            )}
            onClick={onClick}
        >
            <Image
                width={24}
                height={24}
                alt="플러스 버튼"
                src={'/icons/plus.svg'}
                unoptimized
            />
        </button>
    );
};
