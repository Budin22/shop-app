import React from "react";
import { Box, Typography } from "@mui/material";

export const AboutView = () => {
  return (
    <Box>
      <Typography variant="h2" component="h3">
        About page with content
      </Typography>
        <iframe
            src="https://bcr.infuse.com"
            width="900"
            height="785"
            title="Iframe Example"
        ></iframe>
    </Box>
  );
};
