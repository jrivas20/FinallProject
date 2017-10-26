import React from "react";

  const form = {
 	backgroundColor: "#a7cc49",
    float:"right",
  boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)"

  }

export const FormBtn = props =>
  <button {...props} style={form} className="btn btn-success">
    {props.children}
  </button>;
