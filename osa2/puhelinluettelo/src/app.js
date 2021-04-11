import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./filter";
import Persons from "./persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filteredPersons, setFilteredPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newTel, setNewTel] = useState("");
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  useEffect(() => {
    // set filteredPersons when filterValue or persons change
    if (filterValue.length > 0) {
      const arr = persons.filter((person) =>
        person.name
          .toLocaleLowerCase()
          .includes(filterValue.toLocaleLowerCase())
      );
      setFilteredPersons(arr);
    } else {
      setFilteredPersons([...persons]);
    }
  }, [filterValue, persons]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons([...persons, { name: newName, tel: newTel }]);
    }

    setNewName("");
    setNewTel("");
  };
  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={onFormSubmit}>
        <h2>Add new</h2>
        <div>
          name:{" "}
          <input
            type="text"
            required
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div>
          phone:{" "}
          <input
            type="tel"
            required
            value={newTel}
            onChange={(e) => setNewTel(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Filter
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
      />
      <Persons persons={filteredPersons} />
    </div>
  );
};

export default App;
