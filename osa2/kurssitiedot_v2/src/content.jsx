import React from "react";
import Part from "./part";

const Content = ({ parts }) => {
  return (
    <div className="content">
      {parts?.map((part) => <Part key={part.id} {...part} />)}
    </div>
  );
};

export default Content;
