'use client';

// import { ToPublishButton } from '@/entities/buttons/toPublishButton';
import { LineParticipans } from '@/entities/lineParticipans';
import { Gapped } from '@/shared/gapped';
import { IUserData } from '@/shared/interfaces/user';
import { useEffect } from 'react';

export const ListPaticipants = () => {
    const MOCKDATA: IUserData = {
        id: 12,
        name: 'Иван',
        lastname: 'Иванов',
        age: '18',
        role: 'Турист',
        mail: 'ivan_ivanov@mail.ru',
    };

    const listUser: IUserData[] = [MOCKDATA, MOCKDATA, MOCKDATA];

    const fetchData = async () => {
        if (typeof window !== 'undefined') {
            const url = window.location.href;
            // const eventData = await getEvent(url.split('/')[5]);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    // TODO: change information
    // TODO: change style for text

    return (
        <div className="w-96 mb-28">
            <div className="flex flex-col mb-4">
                <span className="text-xl text-black leading-5 mt-5 font-extrabold mb-5">Участники</span>
                <span className="text-base text-lightGray">1000 человек</span>
            </div>
            {listUser.map((user, index) => (
                <LineParticipans {...user} key={index} />
            ))}
            <div className="mt-5 justify-center mb-6 flex">
                <span className="text-14 text-lightGray underline">Еще 980 человек</span>
            </div>
            {/* <div className="flex gap-2">
                <ToPublishButton height="large" width="fit-content">
                    В csv
                </ToPublishButton>
                <ToPublishButton height="large" width="fit-content">
                    В csv
                </ToPublishButton>
            </div> */}
        </div>
    );
};
