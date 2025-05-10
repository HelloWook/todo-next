import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

const Input = ({ className }: InputProps) => {
    return (
        <>
            <div className="absolute  w-[1000px] h-[56px] px-6 py-[19px]  bg-slate-900 text-slate-900 rounded-3xl border-2 border-slate-900 translate-1" />
            <input className="relative w-[1000px] h-[56px] px-6 py-[19px] bg-slate-100 rounded-3xl border-2 border-slate-900 text-slate-500 focus:outline-0"></input>
        </>
    );
};

export default Input;
