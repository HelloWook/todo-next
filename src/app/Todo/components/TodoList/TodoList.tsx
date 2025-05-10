import Stauts from '@/app/common/components/Stauts/Stauts';
import React from 'react';
import TodoItems from '../TodoItems/TodoItems';
import NoData from '../NoData/NoData';

const TodoList = () => {
    // 임시로 해놈
    const data = undefined;
    return (
        <div className="flex w-full justify-between gap-5">
            <div className="mt-[42px] flex flex-col gap-4 w-full flex-1/2">
                <Stauts />
                {data ? <TodoItems /> : <NoData />}
            </div>
            <div className="mt-[42px] flex flex-col gap-4 w-full flex-1/2 ">
                <Stauts isDone={true} />
                {data ? <TodoItems /> : <NoData isDone={true} />}
            </div>
        </div>
    );
};

export default TodoList;
