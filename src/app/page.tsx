'use client';
import { useEffect, useState } from 'react';
import Form from './common/components/Form/Form';

import TodoList from './Todo/components/TodoList/TodoList';
import { getTodo } from './Todo/utils/action';
import { TodoData } from './Todo/types/todo';

export default function Home() {
    const [todos, setTodos] = useState<TodoData[]>([]);

    const isEmpty = todos.length > 0;

    const fetchTodos = async () => {
        const data = await getTodo();
        if (data) setTodos(data);
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    if (todos.length === 0) {
        return <div>로딩 중 </div>;
    }

    return (
        <div className="pt-[22px]">
            <Form isEmpty={isEmpty} setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    );
}
