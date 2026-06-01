import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";

type Props<T extends string> = {
  options: T[];
  selectedValues: T[];
  onChange: (value: T[]) => void;
  label?: string;
};

export function MultiSelectField<T extends string>({
  options,
  selectedValues,
  onChange,
  label,
}: Props<T>) {
  return (
    <div className="flex min-w-0 flex-col gap-2">
      {label && (
        <label
          htmlFor="medium-range"
          className="block text-xs font-semibold tracking-normal text-neutral-300"
        >
          {label}
        </label>
      )}
      <Listbox value={selectedValues} onChange={onChange} multiple>
        <div className="relative">
          <Listbox.Button className="relative h-11 w-full cursor-default rounded-md border border-white/10 bg-neutral-900 px-3 py-2 pr-10 text-left shadow-inner shadow-black/20 transition hover:border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400">
            <span className="block truncate text-sm font-semibold text-white">
              {selectedValues.map((value) => value).join(", ")}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-neutral-400"
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
              className={
                "absolute z-20 mt-2 max-h-60 w-full overflow-auto rounded-md border border-white/10 bg-neutral-950 py-1 text-sm shadow-2xl shadow-black/40 focus:outline-none"
              }
            >
              {options.map((option) => (
                <Listbox.Option
                  key={option}
                  value={option}
                  className={({ active }) =>
                    `relative cursor-default py-2 pr-4 pl-10 select-none ${
                      active
                        ? "bg-neutral-200 text-neutral-950"
                        : "text-neutral-200"
                    }`
                  }
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {option}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-300">
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
}
