"use client";
import { updateSearchParams } from "@/constants";
import { CustomFilterProps } from "@/types";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as React from "react";

const CustomFilter = ({ title, options, setFilter }: CustomFilterProps) => {
  const [selected, setSelected] = React.useState(options[0]);

  return (
    <div className="w-1/2 rounded shadow-lg px-3 flex items-center bg-white">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          setFilter(e.value);
        }}
      >
        <div className="relative w-full py-2 lg:py-0 w-fit z-10">
          <Listbox.Button className="flex w-full justify-between items-center">
            <span className="block truncate">{selected.title}</span>
            <span>📁</span>
          </Listbox.Button>
          <Transition
            as={React.Fragment}
            leave="transition case-in duration-10"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute bg-white w-full">
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-2 ${
                      active ? "bg-blue-500 text-white" : "text-gray-800"
                    }`
                  }
                >
                  {({ selected }) => <span>{option.title}</span>}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
