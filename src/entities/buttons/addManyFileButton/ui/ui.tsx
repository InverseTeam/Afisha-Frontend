'use client';

import styles from './ui.module.scss';
import { FC, useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import UploadButtonDisabled from '../../../../../public/btnAssets/teenyicons_jpg-solid.svg';
import UploadButtonActive from '../../../../../public/btnAssets/jpgActive.svg';
import { useDispatch } from 'react-redux';
import { addFormData } from '@/store/features/multiplyFileButton-slice';
import { AppDispatch } from '@/store/store';

interface Props {
    title: string;
    text: string;
}

export const AddManyFileButton: FC<Props> = ({ title, text }) => {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const dispatch = useDispatch<AppDispatch>();
    const filePicker = useRef<HTMLInputElement | null>(null);
    const [countImg, setCountImg] = useState<number>(0);
    const [renderCount, setRenderCount] = useState<number>(0);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const newFiles = Array.from(event.target.files);
            if (selectedFiles.length + newFiles.length <= 5) {
                setSelectedFiles([...selectedFiles, ...newFiles]);
                newFiles.forEach((file) => {
                    dispatch(addFormData(file));
                });
            } else {
                alert('Максимум можно импортировать 5 файлов');
            }
        }
    };
    useEffect(() => {
        if (selectedFiles.length === 1) {
            setCountImg(1);
        } else if (selectedFiles.length === 2) {
            setCountImg(2);
        } else if (selectedFiles.length === 3) {
            setCountImg(3);
        } else if (selectedFiles.length === 4) {
            setCountImg(4);
            setRenderCount(1);
        } else if (selectedFiles.length === 5) {
            setCountImg(5);
            setRenderCount(2);
        }
    }, [selectedFiles]);
    const handlePick = () => {
        if (filePicker.current) {
            filePicker.current.click();
        }
    };

    return (
        <>
            <div className={styles.wrap}>
                <div className={styles.icon}>
                    <div className={styles.filesWrap}>
                        <div className={styles.RowWrap}>
                            <Image
                                className={styles.inputFile}
                                src={countImg >= 1 ? UploadButtonActive : UploadButtonDisabled}
                                width={20}
                                onClick={handlePick}
                                height={20}
                                alt="UploadIcon"
                            />
                            <Image
                                className={styles.inputFile}
                                src={countImg >= 2 ? UploadButtonActive : UploadButtonDisabled}
                                width={20}
                                onClick={handlePick}
                                height={20}
                                alt="UploadIcon"
                            />
                        </div>
                        <div className={styles.RowWrap}>
                            <Image
                                className={styles.inputFile}
                                src={countImg >= 3 ? UploadButtonActive : UploadButtonDisabled}
                                width={20}
                                onClick={handlePick}
                                height={20}
                                alt="UploadIcon"
                            />
                            {countImg >= 4 ? (
                                <p
                                    onClick={handlePick}
                                    className={styles.inputFile}>{`+ ${renderCount}`}</p>
                            ) : (
                                <Image
                                    className={styles.inputFile}
                                    src={UploadButtonDisabled}
                                    width={20}
                                    onClick={handlePick}
                                    height={20}
                                    alt="UploadIcon"
                                />
                            )}
                        </div>
                    </div>
                    <input
                        className={styles.inputHidden}
                        type="file"
                        ref={filePicker}
                        onChange={handleChange}
                        accept="image/*"
                        multiple
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
