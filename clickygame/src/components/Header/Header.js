import React from "react";

const style = {
    height: "90px",
    backgroundColor:"#28B463"
}

const Header = () => (
  <nav className="navbar navbar-light sticky-top" style={style}>
    <span className="navbar-brand mb-0 h1">ClickyGame!</span>
    <span className="navbar-brand mb-0 h1">Guessed right</span>
    <span className="navbar-brand mb-0 h1">Score!</span>
  </nav>
);

export default Header;