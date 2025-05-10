import { CheckList } from '@/app/common/components/CheckList/CheckList';
import React from 'react';

interface Todo {
    content: string;
    isDone: boolean;
}

interface TodoItemsProps {
    datas?: Todo[];
}

const TodoItems = ({ datas }: TodoItemsProps) => {
    return (
        <div>
            {datas &&
                datas.map((data, idx) => (
                    <CheckList key={idx} isDone={data.isDone}>
                        {data.content}
                    </CheckList>
                ))}
        </div>
    );
};

export default TodoItems;
