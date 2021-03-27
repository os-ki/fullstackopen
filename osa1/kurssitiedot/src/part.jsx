import React from "react";

const Part = ({ name, exerciseCount }) => {
  return (
    <p className="part">
      {name} {exerciseCount}
    </p>
  );
};

export default Part;
