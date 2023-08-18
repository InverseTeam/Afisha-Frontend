import { Fragment, useState, FC } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import './ui.scss';
import { Category, Tags } from '@/shared/interfaces/event';

interface SmartSelectInputProps {
  value: string;
  setValue: () => void;
  placeholder: string;
  listVariant: { id: number; name: string, tags?: Tags[] }[];
}

export const SelectInput: FC<SmartSelectInputProps> = ({
  placeholder,
  value,
  setValue,
  listVariant,
}) => {
  // const [value, setValue] =useState<string> (listVariant[0])

  return (
    <div className="w-full h-full">
      <Listbox value={value} onChange={setValue}>
        <div className="relative mt-1 h-14">
          <Listbox.Button className="relative h-14 w-full cursor-default rounded-2xl bg-lightGray py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate w-full">
              {/* {value.length === 0 ? placeholder : value} */}
              {/* {value ? placeholder : value} */}
              {value}
            </span>
            {/* <div className="input-layout relative w-96 max-w-xl">
              <label
                className={({ value }) =>
                  `label text-lightGray text-xs ${value ? }
                  peer-focus:text-xs peer-placeholder-shown:text-lg peer-focus:px-1 peer-placeholder-shown:px-0 bg-transparent peer-focus:bg-transparent peer-placeholder-shown:bg-transparent m-0 my-1 peer-focus:my-1 peer-placeholder-shown:m-auto -translate-y-1/5 peer-focus:-translate-y-1/5 peer-placeholder-shown:translate-y-0`
                }>
                {placeholder}
              </label>
            </div> */}
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-2xl p-2 bg-lightGray py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
              {listVariant.map((item) => (
                <Listbox.Option
                  key={item.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 rounded-xl h-14 flex items-center ${
                      active ? 'bg-white' : 'text-gray-900'
                    }`
                  }
                  value={item.name}>
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate  font-base ${
                          selected ? 'bold' : 'font-normal'
                        }`}>
                        {item.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
