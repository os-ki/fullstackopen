import React from "react";
import Header from "./header";
import Content from "./content";

const Course = ({ course }) => {
  const getExercisesCount = () =>
    course?.parts.reduce((a, c) => {
      return a + c.exercises;
    }, 0);

  return (
    <div className="course">
      <Header name={course?.name} />
      <Content parts={course?.parts} />
      <p>
        <b>Total of {getExercisesCount()} exercises</b>
      </p>
    </div>
  );
};

export default Course;
