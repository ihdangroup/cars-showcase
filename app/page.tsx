"use client";
import * as React from "react";
import {
  CarCard,
  CustomFilter,
  Hero,
  SearchBar,
  ShowMore,
  Skeleton,
} from "@/components";
import Image from "next/image";
import fetchCars from "@/utils";
import { CarProps, IndexProps } from "@/types";
import { fuels, yearsOfProductions } from "@/constants";

export default function Home() {
  const [allCars, setAllCars] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [manufaktur, setManufaktur] = React.useState("");
  const [model, setModel] = React.useState("");
  const [fuel, setFuel] = React.useState("");
  const [year, setYear] = React.useState(2022);
  const [limit, setLimit] = React.useState(10);
  const getCars = async () => {
    setLoading(true);
    try {
      const result = await fetchCars({
        manufaktur: manufaktur || "",
        year: year || 2022,
        fuel: fuel || "",
        limit: limit || 10,
        model: model || "",
      });
      setAllCars(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    getCars();
  }, [manufaktur, model, year, fuel, limit]);
  return (
    <main className="p-10 py-24 lg:p-24">
      <Hero />
      <div className="w-full my-12 py-12">
        <h2 className="text-xl font-bold">Category Cars</h2>
        <p>Explore out cars you might like</p>
        <div className="flex flex-wrap my-4 w-full">
          <div className="w-full lg:w-1/2">
            <SearchBar setManufaktur={setManufaktur} setModel={setModel} />
          </div>
          <div className="w-full flex flex-wrap lg:w-1/2">
            <CustomFilter title="fuel" setFilter={setFuel} options={fuels} />
            <CustomFilter
              title="year"
              setFilter={setYear}
              options={yearsOfProductions}
            />
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-between">
          {allCars.length > 0 ? (
            loading ? (
              <>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </>
            ) : (
              allCars?.map((car: CarProps) => <CarCard car={car} />)
            )
          ) : (
            <div>oops no result</div>
          )}
          <ShowMore
            pageNumber={limit / 10}
            isNext={limit}
            setLimit={setLimit}
          />
        </div>
      </div>
    </main>
  );
}
