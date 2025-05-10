import React from 'react';
import Image from 'next/image';
import { Button } from '../Button/Button';
import Input from '../Input/Input';

interface FormProps {
    isEmpty?: boolean;
}

const Form = ({ isEmpty = false }: FormProps) => {
    const ButtonStlye = isEmpty ? 'primary' : 'secondary';

    return (
        <div className="flex  items-center w-full gap-[16px] ">
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
