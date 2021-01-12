/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./Button.css";

export default (props) => {
  return (
    <button
      className={`
        button 
        ${props.operation ? "operation" : ""}
        ${props.double ? "double" : ""}
        ${props.triple ? "triple" : ""}
        `}
      onClick={(_) => props.click && props.click(props.label)}
    >
      {props.label}
    </button>
  );
};
