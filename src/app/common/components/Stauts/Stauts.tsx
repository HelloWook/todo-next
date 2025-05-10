import clsx from 'clsx';
import React from 'react';
import { SubHeading } from '../Text/Text';

interface StautsProps {
    isDone: boolean;
}

const StautsStlye = Object.freeze({
    complete: 'bg-green-700 text-amber-300 ',
    todo: 'text-green-700 bg-lime-300 '
});

const Stauts = ({ isDone }: StautsProps) => {
    const StautsColor = isDone ? StautsStlye.complete : StautsStlye.todo;
    const StatusContent = isDone ? 'DONE' : 'TO DO';

    return (
        <div
            className={clsx(
                ' flex justify-center items-center rounded-3xl w-[101px] h-[36px]',
                StautsColor
            )}
        >
            <SubHeading>{StatusContent}</SubHeading>
        </div>
    );
};

export default Stauts;
