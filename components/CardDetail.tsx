"use client";
import { CarProps } from "@/types";
import { generateImageUrl } from "@/utils";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { Fragment } from "react";

type CardDetailProps = {
  isOpen: boolean;
  close: () => void;
  car: CarProps;
};
const CardDetail = ({ isOpen, close, car }: CardDetailProps) => {
  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={close}>
          <Transition.Child
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            as={Fragment}
            enter="ease-out duration-300"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                as={Fragment}
                enter="ease-out duration-300"
              >
                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] p-6 overflow-y-auto transform rounded-2xl bg-white">
                  <button type="button" onClick={close}>
                    Close
                  </button>
                  <div className="flex-1 flex flex-col gap-3">
                    <div className="relative w-full h-40 items-center flex bg-blue-600 bg-cover bg-center rounded-lg">
                      <Image
                        src={`${generateImageUrl(car, "angle")}`}
                        fill
                        className="mx-auto py-4 object-contain"
                        alt="next_image"
                        priority
                      />
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-1 relative w-full h-24 bg-blue-200 rounded-lg">
                        <Image
                          src={`${generateImageUrl(car, "29")}`}
                          fill
                          className="mx-auto object-contain"
                          alt="next_image"
                          priority
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-blue-200 rounded-lg">
                        <Image
                          src={`${generateImageUrl(car, "33")}`}
                          fill
                          className="mx-auto  object-contain"
                          alt="next_image"
                          priority
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-blue-200 rounded-lg">
                        <Image
                          src={`${generateImageUrl(car, "13")}`}
                          fill
                          className="mx-auto  object-contain"
                          alt="next_image"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <h2 className="font-semibold text-xl capitalize">
                      {car.make} {car.model}
                    </h2>
                    <div className="flex flex-wrap gap-4 mt-3">
                      {Object.entries(car).map(([key, value]) => (
                        <div
                          className="flex justify-between gap-5 w-full text-right"
                          key={key.split("_").join(" ")}
                        >
                          <h4 className="text-gray capitalize">{key}</h4>
                          <p className="text-black-100 font-semibold">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default CardDetail;
