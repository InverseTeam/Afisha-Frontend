'use client';

import styles from './ui.module.scss';
import { FC, useEffect, useRef, useState } from 'react';
import UploadImg from '../../../../../public/uplodIcons/UploadIconFile.svg';
import UploadDisabled from '../../../../../public/btnAssets/PaperUpload.svg';
import Image from 'next/image';
import { useDispatch } from 'react-redux';

interface Props {
    title: string;
    text: string;
    setFile: (file: File) => void;
}

export const AddFileButton: FC<Props> = ({ title, text, setFile }) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const filePicker = useRef<HTMLInputElement | null>(null);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
            setFile(event.target.files[0])
        }
    };

    const handlePick = () => {
        if (filePicker.current) {
            filePicker.current.click();
        }
    };

    return (
        <>
            <div className={styles.wrap}>
                <div className={styles.icon}>
                    <div className={styles.inputFileWrap}>
                        {selectedFile ? (
                            <Image
                                className={styles.inputFile}
                                src={UploadImg}
                                width={52}
                                onClick={handlePick}
                                height={52}
                                alt="UploadIcon"
                            />
                        ) : (
                            <Image
                                className={styles.inputFile}
                                src={UploadDisabled}
                                width={52}
                                onClick={handlePick}
                                height={52}
                                alt="UploadIcon"
                            />
                        )}
                        {selectedFile ? (
                            <p className={styles.fileText}>Выбран файл</p>
                        ) : (
                            <p className={styles.fileText}>No files</p>
                        )}
                    </div>
                    <input
                        className={styles.inputHidden}
                        type="file"
                        ref={filePicker}
                        onChange={handleChange}
                        accept="image/*"
                    />
                </div>
                <div className={styles.infoText}>
                    <h2 className={styles.title}>{title}</h2>
                    <h4 className={styles.text}>{text}</h4>
                </div>
            </div>
        </>
    );
};
