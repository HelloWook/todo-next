import { CheckList } from '@/app/common/components/CheckList/CheckList';
import React from 'react';

import { TodoData } from '../../types/todo';

interface TodoItemsProps {
    todos: TodoData[];
}

const TodoItems = ({ todos }: TodoItemsProps) => {
    return (
        <div className="flex flex-col-reverse gap-4">
            {todos.map((todo) => (
                <CheckList key={todo.id} isDone={todo.isCompleted}>
                    {todo.name}
                </CheckList>
            ))}
        </div>
    );
};

export default TodoItems;
