import React, { useState } from 'react';

// 로딩 상태를 수정하는 훅
const useLoading = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const Spinner = () => {
        return (
            <span className="inline-block w-12 h-12 border-4 border-white border-b-transparent rounded-full box-border animate-spin" />
        );
    };

    const startLoading = () => {
        setIsLoading(true);
    };

    const stopLoading = () => {
        setIsLoading(false);
    };

    const withLoading = async (asyncFunction: () => Promise<unknown>) => {
        try {
            startLoading();
            return await asyncFunction();
        } finally {
            stopLoading();
        }
    };

    return {
        Spinner,
        startLoading,
        stopLoading,
        isLoading,
        withLoading
    };
};

export default useLoading;
