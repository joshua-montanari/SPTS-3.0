import { Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";

export default function LincolnShores() {
  const [singlesChecked, setSinglesChecked] = useState(false);
  const [doublesChecked, setDoublesChecked] = useState(false);

  return (
    <>
      <div>Feather Sound Tennis Series (Coming Soon)</div>
      <div>
        <div>Filters:</div>
        <FormControlLabel
          control={
            <Checkbox
              disabled
              checked={singlesChecked}
              onChange={() => setSinglesChecked(!singlesChecked)}
            />
          }
          label="Singles"
        />
        <FormControlLabel
          control={
            <Checkbox
              disabled
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
