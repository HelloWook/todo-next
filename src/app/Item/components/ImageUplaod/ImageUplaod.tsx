'use client';
import { CircleButton } from '@/app/common/components/Button/Button';
import Image from 'next/image';
import React, { ChangeEvent, useRef, useState } from 'react';

const ImageUplaod = () => {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const defaultImg = '/img/bg.svg';

    // 파일 선택 시 호출되는 함수
    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const file = files[0];
            setSelectedImage(file);

            const imageUrl = URL.createObjectURL(file);
            setPreviewUrl(imageUrl);
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className="relative w-fit h-fit border-slate-300 border-dashed border-2 rounded-2xl">
            <CircleButton
                className="absolute z-30 right-4 bottom-4"
                onClick={(e) => {
                    e.stopPropagation();
                    handleButtonClick();
                }}
            />

            <div className="relative">
                <Image
                    alt="미리보기 이미지"
                    src={previewUrl || defaultImg}
                    className="rounded-2xl object-cover w-[384px] h-[311px] "
                    width={384}
                    height={311}
                />
                {!previewUrl && (
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
