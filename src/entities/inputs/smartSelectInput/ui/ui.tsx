import { Fragment, useState, FC, useEffect } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { getPlatforms } from '../model/model';
import { Platform } from '@/shared/interfaces/event';
import './ui.scss';

interface SmartSelectInputProps {
  value: Platform;
  setValue: () => void;
  placeholder: string;
}

//TODO: add get request for places

const people = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
];

export const SmartSelectInput: FC<SmartSelectInputProps> = ({ placeholder, value, setValue }) => {
  const [query, setQuery] = useState('');
  const [platforms, setPlatforms] = useState<Platform[]>([]);

  const fetchPlatforms = async () => {
    const fetchPlatformsData = await getPlatforms();

    setPlatforms(fetchPlatformsData);
  };

  useEffect(() => {
    fetchPlatforms();
  }, []);

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, '')),
        );

  return (
    <div className="w-full">
      <Combobox value={value} onChange={setValue}>
        <div className="relative h-14 border-none">
          <div className=" input-layout relative w-full border-none cursor-default overflow-hidden text-left  sm:text-sm">
            <Combobox.Input
              placeholder=" "
              className="input peer w-33 transition-all outline-none select-all box-border px-4 pr-6 text-base bold leading-5 text-black2 focus:outline-none focus: border focus: border-solid focus: border-borderColor bg-lightGray text-gray-900 focus: border-button"
              displayValue={(person: any) => person.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            {/* <input
                className="input peer transition-all outline-none select-all"
                type="text"
                placeholder=" "
              /> */}
            <label className="label text-lightGray text-xs peer-focus:text-xs peer-placeholder-shown:text-lg peer-focus:px-1 peer-placeholder-shown:px-0 bg-transparent peer-focus:bg-transparent peer-placeholder-shown:bg-transparent m-0 my-1 peer-focus:my-1 peer-placeholder-shown:m-auto -translate-y-1/5 peer-focus:-translate-y-1/5 peer-placeholder-shown:translate-y-0">
              {placeholder}
            </label>
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              {/* <i
                style={{ backgroundImage: `url(${IconArrowDown.src})` }}
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              /> */}
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}>
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-2xl p-2 bg-lightGray py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredPeople.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                platforms.map((person) => (
                  <Combobox.Option
                    key={person.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 rounded-xl h-14 flex items-center ${
                        active ? 'bg-white' : 'text-gray-900'
                      }`
                    }
                    value={person}>
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate font-base ${
                            selected ? 'bold' : 'font-normal'
                          }`}>
                          {person.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}>
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};
