import React from "react";

const Header = ({ title, hTag }) => {
  const Headline = hTag || "h2";
  return (
    <header className="header">
      <Headline>{title}</Headline>
    </header>
  );
};

export default Header;
