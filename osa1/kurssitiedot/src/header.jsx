import React from "react";

const Header = ({ course }) => {
  return (
    <header className="header">
      <h1>{course}</h1>
    </header>
  );
};

export default Header;
