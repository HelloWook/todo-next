'use client';
import { Button } from '@/app/common/components/Button/Button';
import { DetailCheckList } from '@/app/common/components/CheckList/CheckList';
import ImageUplaod from '@/app/Item/components/ImageUplaod/ImageUplaod';
import { deleteTodo, editTodo, getDetailTodo } from '@/app/Todo/utils/action';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { DetailTodo } from '@/app/Todo/types/todo';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import useLoading from '@/app/common/hooks/useLoading';

export default function Item() {
    const [todo, setTodo] = useState<DetailTodo | null>(null);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [uploadIamgeUrl, setUploadIamgeUrl] = useState<string>();
    const { Spinner, isLoading, withLoading } = useLoading();

    const router = useRouter();
    const params = useParams();
    const { register, handleSubmit, getValues } = useForm();

    const itemId = params.id as string;

    // 투두 불러오기
    const fetchData = async () => {
        const data = await getDetailTodo(itemId);
        if (data) setTodo(data);
    };

    useEffect(() => {
        withLoading(fetchData);
    }, []);

    if (isLoading || !todo) {
        return <Spinner />;
    }

    // 투두 삭제
    const handleDelete = async () => {
        deleteTodo(itemId);
        router.push('/');
    };

    const onSubmit = async () => {
        const nameValue = getValues('name');
        const memoValue = getValues('memo');
        await editTodo(
            {
                isCompleted: todo?.isCompleted,
                imageUrl: uploadIamgeUrl,
                memo: memoValue,
                name: nameValue
            },
            todo.id
        );
        router.push('/');
    };

    return (
        <div className="bg-white max-w-[1200px] m-auto pt-[22px] h-full ">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className=" w-[95%] max-w-[996px] m-auto flex flex-col gap-6  h-full md:h-screen"
            >
                <DetailCheckList
                    idx={todo.id}
                    isDone={todo.isCompleted}
                    setTodo={setTodo}
                >
                    <input
                        className={clsx(
                            todo.isCompleted ? 'underline' : '',
                            'text-nm-20-bold focus:outline-0 '
                        )}
                        defaultValue={todo.name}
                        {...register('name')}
                    />
                </DetailCheckList>

                <div className="flex gap-6 flex-wrap md:flex-nowrap">
                    <ImageUplaod
                        setUploadIamgeUrl={setUploadIamgeUrl}
                        setSelectedImage={setSelectedImage}
                        selectedImage={selectedImage}
                        TodoimageUrl={todo.imageUrl}
                    />
                    <div className="relative w-full md:max-w-[588px] h-[311px] flex justify-center">
                        <Image
                            src={'/img/memo.jpg'}
                            alt="메모"
                            className="absolute"
                            fill
                        />
                        <textarea
                            placeholder="메모를 작성해주세요"
                            className="max-w-[557px] h-[229px] w-full relative mt-[60px] focus:outline-0"
                            {...register('memo')}
                            defaultValue={todo.memo}
                        />
                    </div>
                </div>

                <div className="flex gap-4 justify-center mb-20 md:justify-end ">
                    <Button variant="secondary" type="submit">
                        <Image
                            src={'/icons/check-black.svg'}
                            width={16}
                            height={16}
                            alt="체크 표시"
                            unoptimized
                        />
                        수정 완료
                    </Button>
                    <Button variant="delete" onClick={handleDelete}>
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
            </form>
        </div>
    );
}
