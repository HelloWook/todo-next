'use client';
import { Button } from '@/app/common/components/Button/Button';
import { DetailCheckList } from '@/app/common/components/CheckList/CheckList';
import ImageUplaod from '@/app/Item/components/ImageUplaod/ImageUplaod';
import { getDetailTodo } from '@/app/Todo/utils/action';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { DetailTodo } from '@/app/Todo/types/todo';
import React, { useEffect, useState } from 'react';

export default function Item() {
    const [todo, setTodo] = useState<DetailTodo | null>();

    const params = useParams();
    const itemId = params.id as string;

    useEffect(() => {
        const fetchData = async () => {
            const data = await getDetailTodo(itemId);
            if (data) setTodo(data);
        };
        fetchData();
    }, []);

    if (!todo) {
        return <div>로딩 중 </div>;
    }

    return (
        <div className="bg-white h-screen pt-[22px] ">
            <div className=" max-w-[996px] m-auto flex flex-col gap-6">
                <DetailCheckList
                    content={todo.name}
                    idx={todo.id}
                    isDone={todo.isCompleted}
                ></DetailCheckList>

                <div className="flex gap-6">
                    <ImageUplaod />
                    <div className="relative w-[588px] h-[311px] flex justify-center">
                        <Image
                            width={588}
                            height={311}
                            src={'/img/memo.jpg'}
                            alt="메모"
                            className="absolute"
                        />
                        <textarea
                            placeholder="메모를 작성해주세요"
                            className="w-[557px] h-[229px] relative mt-[60px] focus:outline-0"
                        ></textarea>
                    </div>
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
