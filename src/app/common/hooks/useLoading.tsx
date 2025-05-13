import React, { useState } from 'react';
import { SubHeading } from '../components/Text/Text';
import clsx from 'clsx';

interface TextProps {
    sentence?: string;
    className?: string;
}

// 로딩 상태를 수정하는 훅
const useLoading = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const Spinner = ({
        sentence = '데이터를 불러오는 중입니다',
        className
    }: TextProps) => {
        return (
            <div
                className={clsx(
                    'fixed inset-0 flex items-center justify-center flex-col',
                    className
                )}
            >
                <span className="w-12 h-12 border-4 border-violet-600 border-b-transparent rounded-full animate-spin mb-4" />
                <SubHeading>{sentence}</SubHeading>
            </div>
        );
    };
    const startLoading = () => {
        setIsLoading(true);
    };

    const stopLoading = () => {
        setIsLoading(false);
    };

    async function withLoading<T>(asyncFunction: () => Promise<T>): Promise<T> {
        try {
            startLoading();
            return await asyncFunction();
        } finally {
            stopLoading();
        }
    }

    return {
        Spinner,
        startLoading,
        stopLoading,
        isLoading,
        withLoading
    };
};

export default useLoading;
