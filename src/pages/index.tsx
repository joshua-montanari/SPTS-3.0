import { Button, Checkbox, FormControlLabel } from "@mui/material";
import Head from "next/head";
import { useState } from "react";
import LincolnShores from "./LincolnShores";
import FeatherSound from "./FeatherSound";

export default function Home() {
  const [lstsChecked, setLstsChecked] = useState(true);
  const [fstsChecked, setFstsChecked] = useState(false);

  function handleButtonClick(click: string) {
    if (click === "lsts") {
      setFstsChecked(false);
      setLstsChecked(true);
    } else {
      setLstsChecked(false);
      setFstsChecked(true);
    }
  }

  return (
    <>
      <Head>
        <title>St Pete Tennis Series</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <Button
          variant="outlined"
          sx={{ margin: "10px" }}
          onClick={() => handleButtonClick("lsts")}
          color={lstsChecked ? "success" : "primary"}
        >
          LSTS
        </Button>
        <Button
          variant="outlined"
          sx={{ margin: "10px" }}
          onClick={() => handleButtonClick("spts")}
          color={fstsChecked ? "success" : "primary"}
        >
          FSTS
        </Button>
      </div>
      {lstsChecked && <LincolnShores />}
      {fstsChecked && <FeatherSound />}
    </>
  );
}
