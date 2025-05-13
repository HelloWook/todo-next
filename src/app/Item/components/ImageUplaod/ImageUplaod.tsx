'use client';
import { CircleButton } from '@/app/common/components/Button/Button';
import Image from 'next/image';
import React, { ChangeEvent, Dispatch, useRef, useState } from 'react';
import useLoading from '@/app/common/hooks/useLoading';

interface ImageUplaodProps {
    setSelectedImage: Dispatch<React.SetStateAction<File | null>>;
    TodoimageUrl: string;
    previewUrl: string | null;
}

const ImageUplaod = ({
    setSelectedImage,
    TodoimageUrl,
    previewUrl
}: ImageUplaodProps) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const defaultImg = '/img/bg.svg';

    // 파일 선택 시 호출되는 함수
    const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const file = files[0];
            setSelectedImage(file);
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className="relative  w-full h-fit border-slate-300 border-dashed border-2 rounded-2xl md:max-w-[384px]">
            <CircleButton
                className="absolute z-30 right-4 bottom-4 "
                onClick={(e) => {
                    e.preventDefault();
                    handleButtonClick();
                }}
                type="button"
            />

            <div className="relative">
                <div className="relative h-[311px] md:max-w-[384px]">
                    <Image
                        alt="미리보기 이미지"
                        src={previewUrl || TodoimageUrl || defaultImg}
                        className="rounded-2xl object-cover w-full"
                        fill
                    />
                </div>
                {!previewUrl && !TodoimageUrl && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                            width={64}
                            height={64}
                            alt="사진 이모지"
                            src={'/icons/img.svg'}
                        />
                    </div>
                )}
            </div>
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={fileInputRef}
                className="hidden"
            />
        </div>
    );
};

export default ImageUplaod;
