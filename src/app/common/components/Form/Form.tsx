import React from 'react';
import Image from 'next/image';
import { Button } from '../Button/Button';
import Input from '../Input/Input';
import clsx from 'clsx';

interface FormProps {
    isEmpty?: boolean;
    className?: string;
}

const Form = ({ isEmpty = false, className }: FormProps) => {
    const ButtonStlye = isEmpty ? 'primary' : 'secondary';

    return (
        <div className={clsx('flex items-center gap-[16px] ', className)}>
            <Input />
            <Button variant={ButtonStlye}>
                <Image
                    width={16}
                    height={16}
                    alt="플러스 아이콘"
                    src={'/icons/plus.svg'}
                    style={{
                        marginRight: '6px'
                    }}
                    unoptimized
                />
                {'추가하기'}
            </Button>
        </div>
    );
};

export default Form;
