import { Button } from '@/app/common/components/Button/Button';
import { DetailCheckList } from '@/app/common/components/CheckList/CheckList';
import ImageUplaod from '@/app/Item/components/ImageUplaod/ImageUplaod';
import Image from 'next/image';

import React from 'react';

export default function Item() {
    return (
        <div className="bg-white h-screen pt-[22px] ">
            <div className=" max-w-[996px] m-auto flex flex-col gap-6">
                <DetailCheckList>{'반가'}</DetailCheckList>

                <div className="flex gap-6">
                    <ImageUplaod />
                    <Image
                        width={588}
                        height={311}
                        src={'/img/memo.jpg'}
                        alt="메모"
                    />
                </div>

                <div className="flex gap-4 justify-end">
                    <Button variant="secondary">
                        <Image
                            src={'/icons/check-black.svg'}
                            width={16}
                            height={16}
                            alt="체크 표시"
                            unoptimized
                        />
                        수정 완료
                    </Button>
                    <Button variant="delete">
                        <Image
                            src={'/icons/x.svg'}
                            width={16}
                            height={16}
                            alt="체크 표시"
                            unoptimized
                        />
                        삭제하기
                    </Button>
                </div>
            </div>
        </div>
    );
}
