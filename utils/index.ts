// const axios = require('axios');

import { CarProps, FilterProps } from "@/types";

// const options = {
//   method: 'GET',
//   url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
//   params: {model: 'corolla'},
//   headers: {
//     'X-RapidAPI-Key': '7409477e5fmshf4175800b9365b9p1e7cfejsn835179dcf73b',
//     'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }
export default async function fetchCars(filters: FilterProps) {
  const { manufaktur, year, model, limit, fuel } = filters;
  const headers = {
    "X-RapidAPI-Key": "7409477e5fmshf4175800b9365b9p1e7cfejsn835179dcf73b",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufaktur}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );
  const result = await response.json();
  return result;
}
export const generateImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, year, model } = car;
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);
  return `${url}`;
};
