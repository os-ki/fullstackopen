import React from "react";
import Course from "./course";
import Header from "./header";

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
      ],
    },
    {
      name: "NodeJS",
      id: 2,
      parts: [
        {
          name: "Fundamentals of Node",
          exercises: 10,
          id: 1,
        },
        {
          name: "Routing",
          exercises: 4,
          id: 2,
        },
        {
          name: "Middleware",
          exercises: 2,
          id: 3,
        },
      ],
    },
  ];

  return (
    <div>
      <Header title="Web development curriculum" hTag="h1" />
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  );
};

export default App;
