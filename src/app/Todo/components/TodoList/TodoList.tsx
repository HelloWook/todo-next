import Stauts from '@/app/common/components/Stauts/Stauts';
import React from 'react';
import TodoItems from '../TodoItems/TodoItems';
import NoData from '../NoData/NoData';
import { TodoData } from '../../types/todo';

interface TodoListProps {
    todos: TodoData[];
}

const TodoList = ({ todos }: TodoListProps) => {
    // 임시로 해놈

    return (
        <div className="flex w-full justify-between gap-5">
            <div className="mt-[42px] flex flex-col gap-4 w-full flex-1/2">
                <Stauts />
                {todos ? (
                    <TodoItems
                        todos={todos.filter((todo) => !todo.isCompleted)}
                    />
                ) : (
                    <NoData />
                )}
            </div>
            <div className="mt-[42px] flex flex-col gap-4 w-full flex-1/2 ">
                <Stauts isDone={true} />
                {todos ? (
                    <TodoItems
                        todos={todos.filter((todo) => todo.isCompleted)}
                    />
                ) : (
                    <NoData isDone={true} />
                )}
            </div>
        </div>
    );
};

export default TodoList;
