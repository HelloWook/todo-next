'use client';
import { useEffect, useState } from 'react';
import Form from './common/components/Form/Form';

import TodoList from './Todo/components/TodoList/TodoList';
import { getTodo } from './Todo/utils/action';
import { TodoData } from './Todo/types/todo';

export default function Home() {
    const [todos, setTodos] = useState<TodoData[]>([]);

    useEffect(() => {
        async function fetchTodos() {
            const data = await getTodo();
            if (data) setTodos(data);
            setTodos(data);
        }
        fetchTodos();
    }, []);

    return (
        <div className="pt-[22px]">
            <Form />
            <TodoList todos={todos} />
        </div>
    );
}
