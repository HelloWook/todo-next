'use server';
const url = process.env.NEXT_PUBLIC_API_URL;
const imgUrl = url + '/images';

// 이미지 업로드
const uploadImage = async (image: FormData) => {
    try {
        const response = await fetch(imgUrl + '/upload', {
            method: 'POST',
            body: image
        });

        if (!response.ok) {
            throw new Error('API 응답이 올바르지 않습니다');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export { uploadImage };
