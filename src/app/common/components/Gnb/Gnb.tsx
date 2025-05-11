'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import React from 'react';

const Gnb = () => {
    const router = useRouter();

    const logoClick = () => {
        router.push('/');
    };

    return (
        <header className="w-full h-[60px] flex items-center border-b border-b-slate-200 bg-white ">
            <div className="max-w-[1200px] m-auto w-full">
                <Image
                    src={'/logo/big-logo.svg'}
                    alt="로고"
                    width={151}
                    height={54}
                    onClick={logoClick}
                    className="cursor-pointer"
                    unoptimized
                />
            </div>
        </header>
    );
};

export default Gnb;
