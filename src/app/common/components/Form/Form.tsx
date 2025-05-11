import React from 'react';
import Image from 'next/image';
import { Button } from '../Button/Button';
import Input from '../Input/Input';
import clsx from 'clsx';
import { addTodo } from '@/app/Todo/utils/action';
import { useForm } from 'react-hook-form';

interface FormProps {
    className?: string;
}

const Form = ({ isEmpty = false, className }: FormProps) => {
    const ButtonStlye = isEmpty ? 'primary' : 'secondary';

    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        const response = await addTodo(data);
        console.log(response);
    };

    return (
        <form
            className={clsx('flex items-center gap-[16px] ', className)}
            onSubmit={handleSubmit(onSubmit)}
        >
            <Input {...register('name')} />
            <Button variant={ButtonStlye} type="submit">
                <Image
                    width={16}
                    height={16}
                    alt="플러스 아이콘"
                    src={'/icons/plus.svg'}
                    style={{
                        marginRight: '6px'
                    }}
                    unoptimized
                />
                {'추가하기'}
            </Button>
        </form>
    );
};

export default Form;
