import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  customStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
export type SearchComboProps = {
  selected: string;
  setSelected: (manufaktur: string) => void;
};
export type IndexProps = {
  index: number;
};
export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: 24;
  cylinders: number;
  displacement: string;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
export interface FilterProps {
  manufaktur: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}
export interface OptionProps {
  title: string;
  value: string;
}
export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}
export interface ShowMoreProps {
  pageNumber: number;
  isNext: number | boolean;
}
