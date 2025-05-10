import Image from 'next/image';
import React from 'react';

const Gnb = () => {
    return (
        <header className="w-full h-[60px] flex items-center border-b-1 border-b-slate-200 bg-white  mb-[22px]">
            <div className="max-w-[1200px] m-auto w-full">
                <Image
                    src={'/logo/big-logo.svg'}
                    alt="로고"
                    width={151}
                    height={54}
                />
            </div>
        </header>
    );
};

export default Gnb;
