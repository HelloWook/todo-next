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

    const { register, handleSubmit, reset, getValues } = useForm<Todo>();

    const onSubmit = async (data: Todo) => {
        const nameValue = getValues('name');
        if (!nameValue) {
            alert('제목을 입력해주세요');
            return;
        }

        try {
            //  임시 ID를 생성하여 낙관적 UI 업데이트
            const tempTodo: TodoData = {
                ...data,
                id: Date.now(),
                isCompleted: false
            };
            setTodos((prev) => [...prev, tempTodo]);
            const response = await addTodo(data);

            setTodos((prev) =>
                prev.map((todo) => (todo.id === tempTodo.id ? response : todo))
            );
            reset();
        } catch (error) {
            setTodos((prev) => prev.filter((todo) => todo.id !== Date.now()));
        }
    };

    return (
        <form
            className={clsx('flex items-center gap-[16px] ', className)}
            onSubmit={handleSubmit(onSubmit)}
        >
            <Input {...register('name')} />

            <div className="max-w-[64px] w-full sm:max-w-[168px]">
                <Button variant={ButtonStlye} type="submit">
                    <Image
                        width={16}
                        height={16}
                        alt="플러스 아이콘"
                        src={
                            ButtonStlye === 'primary'
                                ? '/icons/plus-white.svg'
                                : '/icons/plus.svg'
                        }
                        unoptimized
                    />
                    <div className="hidden sm:inline">{'추가하기'}</div>
                </Button>
            </div>
        </form>
    );
};

export default Form;
