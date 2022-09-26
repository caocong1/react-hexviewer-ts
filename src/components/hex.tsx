import React, { FC } from "react";
import { Row } from "./row";

export const Hex: FC<{ startRow: number, rows: number[][][]; bytesper: number }> = (props) => {
  const { startRow, rows, bytesper } = props;
  const pad = "000000";

  const rowsNode = rows.map((row, i) => {
    let heading = `${i * bytesper + startRow}`;
    heading = pad.substring(0, pad.length - heading.length) + heading;
    const idx = i;
    return <Row key={`Row${idx}`} sets={row} heading={heading} />;
  });
  return (
    <div className="hexviewer">
      <div className="hex">{rowsNode}</div>
    </div>
  );
};
