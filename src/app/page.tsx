'use client';
import { useEffect, useState } from 'react';
import Form from './common/components/Form/Form';

import TodoList from './Todo/components/TodoList/TodoList';
import { getTodo } from './Todo/utils/action';
import { TodoData } from './Todo/types/todo';
import useLoading from './common/hooks/useLoading';

export default function Home() {
    const [todos, setTodos] = useState<TodoData[]>([]);
    const { Spinner, isLoading, withLoading } = useLoading();

    const isEmpty = todos.length > 0;

    const fetchTodos = async () => {
        const data = await getTodo();
        if (data) setTodos(data);
    };

    // 렌더링 시 투두 데이터 불러오기
    useEffect(() => {
        withLoading(fetchTodos);
    }, []);

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div className="pt-[22px]  max-w-[1200px] m-auto w-[95%]  ">
            <Form isEmpty={isEmpty} setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    );
}
