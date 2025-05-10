import { TextBold } from '@/app/common/components/Text/Text';
import Image from 'next/image';
import React from 'react';

interface NoDataProps {
    isDone?: boolean;
}

const NoData = ({ isDone = false }: NoDataProps) => {
    const imgType = isDone ? '/img/empty2.svg' : '/img/empty.svg';
    const content = isDone ? (
        <TextBold>
            {'할 일이 없어요'} <br /> {'새롭게 추가해주세요!'}
        </TextBold>
    ) : (
        <TextBold>
            {'할 일이 없어요'} <br /> {'해야 할 일을 체크해보세요!'}
        </TextBold>
    );
    return (
        <div className="flex flex-col items-center text-center text-slate-400">
            <Image
                width={240}
                height={240}
                alt="마스코트 이미지"
                src={imgType}
            />
            {content}
        </div>
    );
};

export default NoData;
