'use client';

import { DataInput } from '@/entities/inputs/dataInput';
import { useState } from 'react';
import star from '../../../../public/images/ic-star.svg';
import { SendButton } from '@/entities/buttons/sendButton/ui/ui';

interface comment {
    mark: number;
    name: string;
    comment: string;
}

//TODO: change width answer input

export const Comment = () => {
    const [answerValue, setAnswerValue] = useState<string>('');

    return (
        <div className="my-8">
            <div className="flex mb-2">
                <i className="h-7 w-7" style={{ backgroundImage: `url(${star.src})` }} />
                <span className="text-lg font-extrabold text-gold mx-2">5,0</span>
                <span className="text-xl font-extrabold text-black">Роман</span>
            </div>
            <p className="text-lg font-semibold mb-4">
                Меня буквально вернули эмоции в детство! я очень давно не был в цирке. Хотя и
                местный, но как-то руки не доходили.
            </p>
            <div className="flex ">
                <div className="w-96">
                    <DataInput
                        inputStyle={{ width: '100%' }}
                        inputDropDown={false}
                        inputName="Ответ"
                        inputPlaceholder="Ответ"
                        inputId="Ответ"
                        inputTypes="text"
                        inputValue={answerValue}
                        setText={setAnswerValue}
                    />
                </div>
                <SendButton />
            </div>
        </div>
    );
};
