'use client';

import styles from './ui.module.scss';
import { FC, useState, FormEvent, useEffect } from 'react';
// import ArrowDown from '../../../../../public/dataInput/ic_arrowdown.svg';
// import ArrowDownHover from '../../../../../public/dataInput/ic_arrowdownHover.svg';
import cancel from '../../../../../public/icon/ic-cancel.svg';
import axios from 'axios';
import { parse } from 'cookie';
import { getTags } from '../model';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';

interface Tag {
  id: number;
  name: string;
}

interface DataInputProps {
  inputTypes?: string;
  inputPlaceholder: string;
  inputId: string;
  inputName: string;
  setText: (inputText: string) => void;
  inputValue: string;
  inputDropDown?: boolean;
  inputWidth?: 'large' | 'fit-content';
  inputStyle?: object;
  inputMaxLength?: number;
  fetchUrl?: string;
}

interface inputDropDownItems {
  id: number;
  name: string;
}

export const TagsInput: FC<DataInputProps> = ({
  inputTypes = 'text',
  inputPlaceholder = '',
  inputId,
  inputName,
  inputValue,
  inputDropDown = 'false',
  inputWidth,
  inputStyle,
  inputMaxLength = 100,
  fetchUrl = '',
  setText,
}) => {
  const [inputType, setInputType] = useState<'text' | 'tel' | 'number' | 'date' | 'time'>(
    inputTypes === 'text'
      ? 'text'
      : inputTypes === 'tel'
      ? 'tel'
      : inputTypes === 'number'
      ? 'number'
      : inputTypes === 'date'
      ? 'date'
      : 'time',
  );
  const [inputFocus, setInputFocus] = useState<boolean>(false);
  const [dropDownIconsIsHover, setDropDownIconsHover] = useState<boolean>(false);
  const [isDropDownClick, setIsDropDownClick] = useState<boolean>(false);
  const [inputDropDownItems, setInputDropDownItems] = useState<inputDropDownItems[]>([]);
  const [selectedItem, setSelectedItem] = useState<string | null>('');
  const [token, setToken] = useState<string>('');
  const [isItemSelected, setIsItemSelected] = useState<boolean>(false);
  const [isFetch, setIsFetch] = useState<boolean>(false);

  //TODO: delete mockdata

  const MOCKData = [
    {
      id: 1,
      name: 'Футбол',
    },
    {
      id: 2,
      name: 'Баскетбол',
    },
    {
      id: 3,
      name: 'Бокс',
    },
    {
      id: 4,
      name: 'Хоккей',
    },
  ];

  const style = {
    icon: {
      // backgroundImage:
      //     inputDropDown && dropDownIconsIsHover
      //         ? `url(${ArrowDownHover.src})`
      //         : inputDropDown && !isDropDownClick
      //         ? `url(${ArrowDown.src})`
      //         : inputDropDown && isDropDownClick
      //         ? `url(${ArrowDown.src})`
      //         : '',
    },
    input: {
      width: '100%',
      backgroundColor: inputFocus ? '#F8F8FA' : '#F8F8FA',
      borderRadius: inputDropDown === 'false' ? '15px 15px 15px 15px' : 'none',
      border: inputFocus ? '1px solid #EBEBEB' : 'none',
      borderRight: inputFocus && inputDropDown ? '1px solid #EBEBEB' : 'none',
      borderTopRightRadius: inputDropDown ? '0' : '15px',
      borderBottomRightRadius: inputDropDown ? '0' : '15px',
      ...inputStyle,
    },
    wrap: {
      width:
        inputWidth === 'large' ? '438px' : inputWidth === 'fit-content' ? 'fit-content' : '100%',
    },
    iconWrap: {
      display: inputDropDown ? 'flex' : 'none',
      borderTop: inputFocus ? '1px solid #EBEBEB' : 'none',
      borderBottom: inputFocus ? '1px solid #EBEBEB' : 'none',
      borderRight: inputFocus ? '1px solid #EBEBEB' : 'none',
    },
    item: {
      width: '100%',
    },
    iconCancel: {
      backgroundImage: `url(${cancel.src})`,
    },
    ul: {
      border: inputFocus ? '1px solid #EBEBEB' : 'none',
    },
  };

  const iconOnClick = () => {
    setInputFocus(!inputFocus);
    setIsDropDownClick(!isDropDownClick);
  };

  const handleItemClick = (name: string, id: number) => {
    setSelectedItem(name);
    setIsItemSelected(true);
    // localStorage.setItem(`${inputName}`, id);
    // setText(name);
    setSelectedItem(null);
    setIsItemSelected(false);

    addTag(name, id);
  };

  const fetchTags = async () => {
    const fetchTagsData = await getTags();
    setInputDropDownItems(fetchTagsData);
  };

  useEffect(() => {
    fetchTags();
  }, []);

  const [tags, setTags] = useState<Tag[]>([]);

  const removeTags = (name: string, id: number) => {
    const newTag = {
      id,
      name,
    };
    setTags([...tags.filter((tag) => tag.id !== id)]);
    setInputDropDownItems([newTag, ...inputDropDownItems]);
    // TODO: add sort by id in queue InputDropDownItems
  };

  const addTag = (name: string, id: number) => {
    const newTag = {
      id,
      name,
    };
    setTags([...tags, newTag]);
    setInputDropDownItems([...inputDropDownItems.filter((tag) => tag.id !== id)]);
  };

  return (
    <>
      <div style={{ width: '100%' }} className={styles.wrap}>
        <div style={style.wrap} className={styles.inputWrap}>
          {/* <input
                        name={inputName}
                        type={inputType}
                        className={styles.input}
                        placeholder={inputPlaceholder}
                        id={inputId}
                        value={selectedItem ? selectedItem : inputValue}
                        style={style.input}
                        onInput={(event: FormEvent<HTMLInputElement>) => handleInput(event)}
                        onFocus={() => handleFocus()}
                        onBlur={(event: FormEvent<HTMLInputElement>) => handleBlur(event)}
                        maxLength={inputMaxLength}
                    /> */}

          <ul id="tags" style={style.ul} className={styles.ul}>
            {tags.length === 0 && <span className={styles.placeholder}>что то</span>}
            {tags.map((tag) => (
              <li key={tag.id} className={styles.tag}>
                <span className={styles.tag_title}>{tag.name}</span>
                <i
                  style={style.iconCancel}
                  className={styles.tag_close_icon}
                  onClick={() => removeTags(tag.name, tag.id)}
                />
              </li>
            ))}
          </ul>
          <div style={style.iconWrap} className={styles.iconWrap}>
            <ChevronUpDownIcon
              id={inputId}
              onMouseLeave={() => setDropDownIconsHover(!dropDownIconsIsHover)}
              onMouseEnter={() => setDropDownIconsHover(!dropDownIconsIsHover)}
              onClick={iconOnClick}
              className="h-5 w-5 text-gray-400"
              style={style.icon}
            />
          </div>
        </div>

        {isDropDownClick && (
          <ul id={inputId} className={styles.dropDownItems}>
            {inputDropDownItems.map((data: any) => (
              <li
                style={style.item}
                onClick={() => handleItemClick(data.name, data.id)}
                key={data.id}
                className={styles.dropDownItem}>
                {data.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
