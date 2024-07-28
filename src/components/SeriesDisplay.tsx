import { Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";

type series = "lsts" | "fsts";

interface SeriesDisplayProps {
  type: series;
}

export default function SeriesDisplay({ type }: SeriesDisplayProps) {
  let title;
  switch (type) {
    case "lsts":
      title = "Lincoln Shores Tennis Series";
      break;
    case "fsts":
      title = "Feather Sound Tennis Series";
      break;
    default:
      title = "";
  }

  const [singlesChecked, setSinglesChecked] = useState(false);
  const [doublesChecked, setDoublesChecked] = useState(false);

  return (
    <>
      {title && <div>{title}</div>}
      <div>
        <div>Filters:</div>
        <FormControlLabel
          control={
            <Checkbox
              checked={singlesChecked}
              onChange={() => setSinglesChecked(!singlesChecked)}
            />
          }
          label="Singles"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={doublesChecked}
              onChange={() => setDoublesChecked(!doublesChecked)}
            />
          }
          label="Doubles"
        />
      </div>
    </>
  );
}
