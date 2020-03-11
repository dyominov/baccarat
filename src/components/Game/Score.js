import React from "react";

const Score = props => {
  return (
    <div>
      <div>
        <div>Over {props.percent * 100} %</div>
        <div>Under {(1 - props.percent) * 100} %</div>
      </div>
    </div>
  );
};

export default Score;
