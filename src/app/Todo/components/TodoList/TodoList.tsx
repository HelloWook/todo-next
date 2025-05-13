import Stauts from '@/app/common/components/Stauts/Stauts';
import React, { Dispatch } from 'react';
import TodoItems from '../TodoItems/TodoItems';
import NoData from '../NoData/NoData';
import { TodoData } from '../../types/todo';

interface TodoListProps {
    todos: TodoData[];
    setTodos: Dispatch<React.SetStateAction<TodoData[]>>;
}

const TodoList = ({ todos, setTodos }: TodoListProps) => {
    return (
        <div className="flex flex-wrap max-w-[1196px] w-full justify-between gap-5 mb-20">
            <div className="mt-[42px] flex flex-col gap-4 w-full md:w-[calc(50%-10px)]">
                <Stauts />
                {todos ? (
                    <TodoItems
                        todos={todos.filter((todo) => !todo.isCompleted)}
                        setTodos={setTodos}
                    />
                ) : (
                    <NoData />
                )}
            </div>
            <div className="mt-[42px] flex flex-col gap-4 w-full md:w-[calc(50%-10px)]">
                <Stauts isDone={true} />
                {todos ? (
                    <TodoItems
                        todos={todos.filter((todo) => todo.isCompleted)}
                        setTodos={setTodos}
                    />
                ) : (
                    <NoData isDone={true} />
                )}
            </div>
        </div>
    );
};

export default TodoList;
