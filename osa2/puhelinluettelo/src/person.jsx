import React from "react";

const Person = ({ person }) => (
  <p>
    {person.name}: {person.tel}
  </p>
);

export default Person;
