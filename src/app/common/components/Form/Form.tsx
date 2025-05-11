import React, { Dispatch } from 'react';
import Image from 'next/image';
import { Button } from '../Button/Button';
import Input from '../Input/Input';
import clsx from 'clsx';
import { addTodo } from '@/app/Todo/utils/action';
import { useForm } from 'react-hook-form';
import { TodoData } from '@/app/Todo/types/todo';
import { Todo } from '@/app/Todo/types/todo';
interface FormProps {
    isEmpty: boolean;
    className?: string;
    setTodos: Dispatch<React.SetStateAction<TodoData[]>>;
}

const Form = ({ isEmpty = false, className, setTodos }: FormProps) => {
    const ButtonStlye = isEmpty ? 'secondary' : 'primary';

    const { register, handleSubmit, reset } = useForm<Todo>();

    const onSubmit = async (data: Todo) => {
        const response = await addTodo(data);
        console.log(response);
        alert('메모 추가');
        setTodos((prev: TodoData[]) => [...prev, response as TodoData]);
        reset();
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
