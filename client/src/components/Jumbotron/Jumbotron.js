import React from "react";

  const background = {
    fontFamily: "Mukta Malar",
    backgroundColor: "#a7cc49"

  }

const Jumbotron = ({ children }) =>
  <div style={background} className="jumbotron">
    {children}
  </div>;

export default Jumbotron;
