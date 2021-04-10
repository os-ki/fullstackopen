import React from "react";
import Header from "./header";
import Content from "./content";

const Course = ({ course }) => {
  return (
    <div className="course">
      <Header name={course?.name} />
      <Content parts={course?.parts} />
    </div>
  );
};

export default Course;
