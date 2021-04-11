import React from "react";
import Person from "./person";

const Persons = ({ persons }) => {
  return (
    <div className="persons">
      {persons.map((person) => (
        <Person key={person.name} person={person} />
      ))}
    </div>
  );
};

export default Persons;
