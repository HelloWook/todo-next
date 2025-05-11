import { CheckList } from '@/app/common/components/CheckList/CheckList';
import React, { Dispatch } from 'react';

import { TodoData } from '../../types/todo';

interface TodoItemsProps {
    todos: TodoData[];
    setTodos: Dispatch<React.SetStateAction<TodoData[]>>;
}

const TodoItems = ({ todos, setTodos }: TodoItemsProps) => {
    return (
        <div className="flex flex-col-reverse gap-4">
            {todos.map((todo) => (
                <CheckList
                    setTodos={setTodos}
                    key={todo.id}
                    isDone={todo.isCompleted}
                    content={todo.name}
                    idx={todo.id}
                />
            ))}
        </div>
    );
};

export default TodoItems;
