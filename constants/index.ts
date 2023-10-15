export const footerLinks = [
  {
    title: "About",
    links: [
      { title: "How It Works", url: "/" },
      { title: "Featured", url: "/" },
      { title: "Partnership", url: "/" },
      { title: "Bussines Relationship", url: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "Event", url: "/" },
      { title: "Featured", url: "/" },
      { title: "Partnership", url: "/" },
      { title: "Bussines Relationship", url: "/" },
    ],
  },
  {
    title: "Socials",
    links: [
      { title: "How It Works", url: "/" },
      { title: "Featured", url: "/" },
      { title: "Partnership", url: "/" },
      { title: "Bussines Relationship", url: "/" },
    ],
  },
];

export const manufacturs = [
  "Acura",
  "Alfa Romeo",
  "Aston Martin",
  "Audi",
  "Bantley",
  "BMW",
  "Buick",
  "Cadillac",
  "Chevrolet",
  "Chrysler",
  "Citroen",
  "Dodge",
  "Ferrari",
  "Fiat",
  "Ford",
  "GMC",
  "Honda",
  "Hyundai",
  "Infiniti",
  "Jaguar",
  "Jeap",
  "Kia",
  "Lamborghini",
  "Land Rover",
  "Lexus",
  "Lincoln",
  "Maserati",
  "Mazda",
  "McLaren",
  "Marcedes-Benz",
  "MINI",
  "Mitsubishi",
  "Nissan",
  "Porsche",
  "Ram",
  "Rolls-Royce",
  "Subaru",
  "Tesla",
  "Toyota",
  "Volkswagen",
  "Volvo",
];

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;
  const miliageFactor = 0.1;
  const ageFactor = 0.05;
  const miliageRate = city_mpg * miliageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;
  const rentalRatePerDay = basePricePerDay + miliageRate + ageRate;
  return rentalRatePerDay.toFixed(0);
};

export const yearsOfProductions = [
  { title: "Year", value: "" },
  { title: "2015", value: "2015" },
  { title: "2016", value: "2016" },
  { title: "2017", value: "2017" },
  { title: "2018", value: "2018" },
  { title: "2019", value: "2019" },
  { title: "2020", value: "2020" },
  { title: "2021", value: "2021" },
  { title: "2022", value: "2022" },
  { title: "2023", value: "2023" },
];

export const fuels = [
  { title: "Fuel", value: "" },
  { title: "Gas", value: "Gas" },
  { title: "Electricity", value: "Electricity" },
];

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathname;
};
