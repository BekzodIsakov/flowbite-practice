import { useEffect, useState } from "react";
import { BsEye } from "react-icons/bs";

import HeroSection from "../components/HeroSection";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Button,
  Flowbite,
} from "flowbite-react";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);

  const customTheme = {
    root: {
      base: "w-full text-left text-sm dark:text-gray-400",
      shadow:
        "absolute left-0 top-0 -z-10 h-full w-full rounded-lg bg-white drop-shadow-md dark:bg-black",
      wrapper: "relative",
    },
    body: {
      base: "group/body",
      cell: {
        base: "px-6 py-4 group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg",
      },
    },
    head: {
      base: "group/head text-xs p-8 uppercase dark:text-gray-400 bg-orange-400",
      cell: {
        base: "border-none p-16 bg-blue-500 group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg dark:bg-gray-700",
      },
    },
    row: {
      base: "group/row",
      hovered: "hover:bg-gray-50 dark:hover:bg-gray-600",
      striped:
        "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700",
    },
  };

  useEffect(() => {
    async function fetchCountries() {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries(data.slice(0, 10));
    }

    fetchCountries();
  }, []);

  const selectUnselectCountry = (country) => {
    const {
      name: { common },
      population,
      flags: { png: flagUrl },
    } = country;

    setSelectedCountries([
      { common, population, flagUrl },
      ...selectedCountries,
    ]);
  };

  return (
    <div>
      <HeroSection carouselElements={countries.slice(0, 8)} />

      <div className='max-w-[1140px] mx-auto mt-4'>
        <Table striped theme={customTheme}>
          <TableHead className='bg-slate-400'>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Population</TableHeadCell>
            <TableHeadCell>Capital</TableHeadCell>
            <TableHeadCell>
              <span className='sr-only'>Edit</span>
            </TableHeadCell>
          </TableHead>
          <TableBody className='divide-y'>
            {countries.map((c) => (
              <TableRow
                key={c.id}
                className='bg-white dark:border-gray-700 dark:bg-gray-800'
              >
                <TableCell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                  {c.name.common}
                </TableCell>
                <TableCell>{c.population}</TableCell>
                <TableCell>{c.capital}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => selectUnselectCountry(c)}
                    className='bg-transparent enabled:hover:bg-transparent focus:ring-0 w-7 h-6 p-0 focus-visible:bg-transparent focus:bg-transparent'
                  >
                    <BsEye color={"black"} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
