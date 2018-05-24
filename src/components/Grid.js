import React from "react";
import Box from "./Box";

const Grid = props => {
  const gridcss = {
    display: "grid",
    gridTemplateColumns: `repeat(${props.cols}, 1fr)`,
    gridTemplateRows: `repeat(${props.rows}, 1fr)`,
    gridGap: "1px",
    maxWidth: "100vw",
    maxHeight: "100vh"
  };
  let boxClass = "";
  const rowsArr = props.gridFull.map((rowArr, rowIdx) =>
    rowArr.map((item, colIdx) => {
      const boxId = `${rowIdx}_${colIdx}`;

      boxClass = props.gridFull[rowIdx][colIdx] ? "box on" : "box off";
      return (
        <Box
          boxClass={boxClass}
          key={boxId}
          boxId={boxId}
          row={rowIdx}
          col={colIdx}
          selectBox={props.selectBox}
        />
      );
    })
  );

  return (
    <div className="grid" style={gridcss}>
      {rowsArr}
    </div>
  );
};

export default Grid;
