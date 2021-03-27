import React from "react";
import Header from "./header";
import Content from "./content";
import Total from "./total";

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
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
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total
        total={course.parts
          .map((part) => part.exercises)
          .reduce((a, c) => a + c)}
      />
    </div>
  );
};

export default App;
