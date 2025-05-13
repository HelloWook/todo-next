import Stauts from '@/app/common/components/Stauts/Stauts';
import React, { Dispatch, useMemo } from 'react';
import TodoItems from '../TodoItems/TodoItems';
import NoData from '../NoData/NoData';
import { TodoData } from '../../types/todo';

interface TodoListProps {
    todos: TodoData[] | null | undefined;
    setTodos: Dispatch<React.SetStateAction<TodoData[]>>;
}

const TodoList = ({ todos, setTodos }: TodoListProps) => {
    const incompleteTodos = useMemo(() => {
        if (!todos || !Array.isArray(todos)) return [];
        return todos.filter(
            (todo) =>
                todo && typeof todo === 'object' && todo.isCompleted === false
        );
    }, [todos]);

    const completedTodos = useMemo(() => {
        if (!todos || !Array.isArray(todos)) return [];
        return todos.filter(
            (todo) =>
                todo && typeof todo === 'object' && todo.isCompleted === true
        );
    }, [todos]);

    return (
        <div className="flex flex-wrap max-w-[1196px] w-full justify-between gap-5 mb-20">
            <div className="mt-[42px] flex flex-col gap-4 w-full md:w-[calc(50%-10px)]">
                <Stauts />
                {incompleteTodos.length > 0 ? (
                    <TodoItems todos={incompleteTodos} setTodos={setTodos} />
                ) : (
                    <NoData />
                )}
            </div>
            <div className="mt-[42px] flex flex-col gap-4 w-full md:w-[calc(50%-10px)]">
                <Stauts isDone={true} />
                {completedTodos.length > 0 ? (
                    <TodoItems todos={completedTodos} setTodos={setTodos} />
                ) : (
                    <NoData isDone={true} />
                )}
            </div>
        </div>
    );
};

export default TodoList;
