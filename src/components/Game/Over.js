import React from "react";

const Over = props => {
  return (
    <div>
      <div>Over {props.totalScore}</div>
      <div>{props.score * 100} %</div>
      <div>Under {props.totalScore}</div>
      {(1 - props.score) * 100} %
    </div>
  );
};

export default Over;
