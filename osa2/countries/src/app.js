import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./filter";
import Countries from "./countries";

const App = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        setAllCountries(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    // set filteredCountries when filterValue or persons change
    if (filterValue.length > 0) {
      const arr = allCountries.filter((country) =>
        country.name
          .toLocaleLowerCase()
          .includes(filterValue.toLocaleLowerCase())
      );
      setFilteredCountries(arr);
    } else {
      setFilteredCountries([...allCountries]);
    }
  }, [filterValue, allCountries]);

  return (
    <div>
      <h2>Countries</h2>
      <Filter
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
      />
      <Countries countries={filteredCountries} setFilter={setFilterValue} />
    </div>
  );
};

export default App;
