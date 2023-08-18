'use client';

import { Comment } from '@/entities/comment/ui/ui';

export const Feedback = () => {
    return (
        <div>
            <span className='text-xl text-black leading-5 font-extrabold mb-5'>Обратная связь</span>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </div>
    );
};
