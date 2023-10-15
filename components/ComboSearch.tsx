import { manufacturs } from "@/constants";
import { SearchComboProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import React from "react";

const ComboSearch = ({ selected, setSelected }: SearchComboProps) => {
  const [query, setQuery] = React.useState("");
  const filterManufacturs =
    query === ""
      ? manufacturs
      : manufacturs.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  return (
    <div className="w-full shadow-lg">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative w-full">
          <Combobox.Button className="bg-black text-white p-2 rounded">
            🚗
          </Combobox.Button>
          <Combobox.Input
            displayValue={(manufaktur: string) => manufaktur}
            className="absolute  p-2"
            placeholder="Search Car"
            name="manufaktur"
            onChange={(event) => setQuery(event.target.value)}
          />

          <Transition
            as={React.Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute z-20 w-full">
              {filterManufacturs.map((item) => (
                <Combobox.Option
                  key={item}
                  className={({ active }) =>
                    `relative w-full py-1 px-4 border ${
                      active
                        ? "bg-blue-500 text-white"
                        : "text-gray-900 bg-white"
                    }`
                  }
                  value={item}
                >
                  {item}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default ComboSearch;
