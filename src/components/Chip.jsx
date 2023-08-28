import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

export default function Chip({ label }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: `${theme.palette.primary.main}`,
        borderRadius: "8px",
        color: "white",
        width: "fit-content",
        py: "2px",
        px: "4px",
      }}
    >
      <Typography fontWeight={700}>{label}</Typography>
    </Box>
  );
}
