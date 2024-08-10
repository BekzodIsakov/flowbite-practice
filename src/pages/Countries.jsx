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
} from "flowbite-react";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);

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
        <Table striped>
          <TableHead>
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
                  <Button onClick={() => selectUnselectCountry(c)}>
                    Tanlash
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
