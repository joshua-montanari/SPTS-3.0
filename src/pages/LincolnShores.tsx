import { Checkbox, FormControlLabel } from "@mui/material";
import { useEffect, useState } from "react";
import { db } from "~/server/db/index";

export default function LincolnShores() {
  const [singlesChecked, setSinglesChecked] = useState(false);
  const [doublesChecked, setDoublesChecked] = useState(false);

  async function getPosts() {
    return await db.query.posts.findMany();
  }
  console.log(getPosts());

  return (
    <>
      <div>Lincoln Shores Tennis Series</div>
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
