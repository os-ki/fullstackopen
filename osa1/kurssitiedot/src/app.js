import React from "react";
import Header from "./header";
import Content from "./content";
import Total from "./total";

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total
        total={parts.map((part) => part.exercises).reduce((a, c) => a + c)}
      />
    </div>
  );
};

export default App;
