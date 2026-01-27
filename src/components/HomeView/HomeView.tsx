import React, { memo } from "react";
import Typography from "@mui/material/Typography";

export const HomeView = memo(() => {
  return (
    <>
      <Typography gutterBottom variant="h1" component="h1" textAlign="center">
        Hello from home page
      </Typography>
        <iframe
            src="https://stage-bcr.infuse.com/"
            width="900"
            height="785"
            title="Iframe Example"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
        ></iframe>
    </>
  );
});
