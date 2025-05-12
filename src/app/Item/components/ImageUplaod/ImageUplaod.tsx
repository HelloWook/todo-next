'use client';
import { CircleButton } from '@/app/common/components/Button/Button';
import Image from 'next/image';
import React, { ChangeEvent, Dispatch, useRef, useState } from 'react';
import { uploadImage } from '@/app/Item/util/action';

interface ImageUplaodProps {
    selectedImage: File | null;
    setSelectedImage: Dispatch<React.SetStateAction<File | null>>;
    setUploadIamgeUrl: Dispatch<React.SetStateAction<string | undefined>>;
    TodoimageUrl: string;
}

const ImageUplaod = ({
    setSelectedImage,
    selectedImage,
    setUploadIamgeUrl,
    TodoimageUrl
}: ImageUplaodProps) => {
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const defaultImg = '/img/bg.svg';

    // 파일 선택 시 호출되는 함수
    const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const file = files[0];
            setSelectedImage(file);
        }
        const url = await uplaodImage();
        setPreviewUrl(url);
    };

    // 이미지 url 받아오는 함수
    const uplaodImage = async () => {
        if (!selectedImage) return;

        const formData = new FormData();

        formData.append('image', selectedImage);

        // 받아온 이미지 url
        const data = await uploadImage(formData);

        setUploadIamgeUrl(data.url);
        return data.url;
    };

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className="relative w-fit h-fit border-slate-300 border-dashed border-2 rounded-2xl">
            <CircleButton
                className="absolute z-30 right-4 bottom-4"
                onClick={(e) => {
                    e.preventDefault();
                    handleButtonClick();
                }}
                type="button"
            />

            <div className="relative">
                <div className="relative w-[384px] h-[311px]">
                    <Image
                        alt="미리보기 이미지"
                        src={previewUrl || TodoimageUrl || defaultImg}
                        className="rounded-2xl object-cover"
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
