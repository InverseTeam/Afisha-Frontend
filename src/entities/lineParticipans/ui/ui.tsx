'use client';
import { UserData } from '@/shared/interfaces/interfaces';
import styles from './ui.module.scss';

//TODO: change style for text 
export const LineParticipans = (userData: UserData) => {
    return (
        <div className="flex align-middle my-4">
            <div className="flex flex-col">
                <span className="text-xl text-black leading-4">
                    {userData.name + ' ' + userData.lastname}
                </span>
                <span className="text-base text-lightGray">
                    {userData.age + ', ' + userData.role}
                </span>
            </div>
            <div className="flex items-center mx-6 ">
                <span className="text-base text-lightGreen underline ">{userData.mail}</span>
            </div>

        </div>
    );
};
