import Stauts from '@/app/common/components/Stauts/Stauts';
import React from 'react';
import TodoItems from '../TodoItems/TodoItems';

const TodoList = () => {
    return (
        <div className="flex w-full justify-between gap-5">
            <div className="mt-[42px] flex flex-col gap-4 w-full flex-1/2">
                <Stauts />
                <TodoItems />
            </div>
            <div className="mt-[42px] flex flex-col gap-4 w-full flex-1/2 ">
                <Stauts isDone={true} />
                <TodoItems />
            </div>
        </div>
    );
};

export default TodoList;
