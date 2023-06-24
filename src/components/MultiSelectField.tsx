import {Listbox, Transition} from '@headlessui/react'
import {CheckIcon, ChevronUpDownIcon} from "@heroicons/react/20/solid";
import {Fragment} from "react";


type Props<T extends string> = {
    options: T[]
    selectedValues: T[]
    onChange: (value: T[]) => void;
}

export function MultiSelectField<T extends string>({
                                                       options,
                                                       selectedValues,
                                                       onChange
                                                   }: Props<T>) {

    return (
        <div className="fixed top-16 w-72">
            <Listbox value={selectedValues} onChange={onChange} multiple>
                <div className="relative mt-1">
                    <Listbox.Button>
                        <span
                            className="block truncate">{selectedValues.map((value) => value).join(', ')}</span>
                        <span
                            className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
              />
            </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options
                            className={"absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"}>
                            {options.map((option) => (
                                <Listbox.Option key={option} value={option}
                                                className={({active}) =>
                                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                        active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                    }`
                                                }>
                                    {({selected}) => (
                                        <>
                      <span
                          className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                          }`}
                      >
                        {option}
                      </span>
                                            {selected ? (
                                                <span
                                                    className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true"/>
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
    )
}