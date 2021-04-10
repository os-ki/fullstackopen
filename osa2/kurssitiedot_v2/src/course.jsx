import React from "react";
import Header from "./header";
import Content from "./content";

const Course = ({ course }) => {
  const getExercisesCount = () =>
    course?.parts.reduce((a, c) => {
      return a + c.exercises;
    }, 0);

  return (
    <section className="course">
      <Header title={course?.name} hTag="h2" />
      <Content parts={course?.parts} />
      <p>
        <b>Total of {getExercisesCount()} exercises</b>
      </p>
    </section>
  );
};

export default Course;
