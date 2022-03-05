import React from "react";
import "../styles/square.css";

function Square(props) {
  const classes = props.className ? `${props.className} square` : `square`;
  return (
    <div
      className={classes + (props.state === "X" ? ` red` : ` greenish`)}
      onClick={props.onClick}
    >
      {props.state}
    </div>
  );
}

export default Square;
