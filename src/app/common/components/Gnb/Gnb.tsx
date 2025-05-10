import Image from 'next/image';
import React from 'react';

const Gnb = () => {
    return (
        <header className="w-full h-[60px] flex items-center border-b-1 border-b-slate-200 bg-white pl-[360px]">
            <Image
                src={'/logo/big-logo.svg'}
                alt="로고"
                width={151}
                height={54}
            />
        </header>
    );
};

export default Gnb;
