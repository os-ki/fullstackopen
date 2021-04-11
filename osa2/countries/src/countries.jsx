import React from "react";
import Country from "./country";

const Countries = ({ countries, setFilter }) => {
  const renderContent = () => {
    if (countries.length > 10) {
      return <p>Too many matches ({countries.length}), specify search</p>;
    } else if (countries.length < 1) {
      return <p>No matches found :(</p>;
    }
    return countries.map((country) => (
      <Country
        extendInfo={countries.length === 1}
        key={country.name}
        country={country}
        onShowClick={() => setFilter(country.name)}
      />
    ));
  };
  return <ul className="countries">{renderContent()}</ul>;
};

export default Countries;
