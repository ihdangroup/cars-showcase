"use client";
import { Combobox } from "@headlessui/react";
import { useRouter } from "next/navigation";
import * as React from "react";
import ComboSearch from "./ComboSearch";

const SearchBar = ({ setManufaktur, setModel }) => {
  const [searchManufaktur, setSearchManufaktur] = React.useState("");
  const [searchModel, setSearchModel] = React.useState("");
  const router = useRouter();
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (searchManufaktur === "" && searchModel === "") {
      return alert("please fill in search bar");
    }
    setManufaktur(searchManufaktur);
    setModel(searchModel);
  }
  return (
    <form onSubmit={handleSubmit} className="flex  flex-wrap">
      <div className="flex w-full lg:w-1/2">
        <ComboSearch
          selected={searchManufaktur}
          setSelected={setSearchManufaktur}
        />
        <button type="submit" className="px-3 lg:hidden bg-gray-400">
          🔍
        </button>
      </div>
      <div className="flex w-full shadow-lg lg:my-0 my-2 lg:w-1/2 justify-between">
        <div className="flex w-full bg-white">
          <span className="bg-black py-2 lg:py-0 flex items-center px-3 rounded-lg">
            🚓
          </span>
          <input
            type="text"
            name="model"
            value={searchModel}
            placeholder="Search Model"
            onChange={(e) => setSearchModel(e.target.value)}
          />
        </div>

        <button type="submit" className="px-3 lg:hidden bg-gray-400">
          🔍
        </button>
        <button
          type="submit"
          className="px-3 hidden lg:flex items-center bg-gray-400"
        >
          🔎
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
