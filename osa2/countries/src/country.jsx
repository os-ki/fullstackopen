import React from "react";

const Country = ({ country, onShowClick, extendInfo }) => (
  <li>
    {extendInfo ? (
      <div>
        <h2>{country.name}</h2>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <p>
          Languages:{" "}
          {country.languages.map(
            (lang, i) => `${i > 0 ? ", " : ""}${lang.name}`
          )}
        </p>
        <img
          style={{ width: "10rem" }}
          src={country.flag}
          alt={`${country.name} flag`}
        />
      </div>
    ) : (
      <div>
        {country.name} <button onClick={onShowClick}>Show</button>
      </div>
    )}
  </li>
);

export default Country;
