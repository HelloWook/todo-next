import clsx from 'clsx';
import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { Text } from '../Text/Text';

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

export const Button = ({
    variant = 'primary',
    className,
    children,
    ...rest
}: ButtonProps) => {
    const commonButtonStyle =
        'relative w-[148px] h-[56px]   rounded-3xl border-2 border-slate-900';

    return (
        <>
            <div className="absolute w-[148px] h-[56px]  bg-slate-900 text-slate-900 rounded-3xl border-2 border-slate-900 translate-1" />
            <button
                className={clsx(
                    commonButtonStyle,
                    ButtonStyle[variant],
                    className
                )}
                {...rest}
            >
                <Text>{children}</Text>
            </button>
        </>
    );
};
