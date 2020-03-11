import React from "react";

const Handicape = props => {
  return (
    <div>
      <div>
        <div>{props.handicape}</div>
        <div>Home {props.percent * 100} %</div>
        <div>Away {(1 - props.percent) * 100} %</div>
      </div>
    </div>
  );
};

export default Handicape;
