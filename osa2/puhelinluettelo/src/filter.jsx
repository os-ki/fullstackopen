import React from "react";

const Filter = ({ onChange, value }) => {
  return (
    <div className="filter">
      Filter: <input type="text" onChange={onChange} value={value} />
    </div>
  );
};

export default Filter;
