import { Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { getYear } from "../utils/date";

export default function Footer() {
  const theme = useTheme();
  return (
    <Stack
      alignItems={"center"}
      py={2}
      borderTop={`1px solid ${theme.palette.divider}`}
    >
      <Typography fontSize={"16px"} fontWeight={400}>
        Copyright © {`${getYear()}`} All Right Reserved | Indonesia National
        Single Window
      </Typography>
    </Stack>
  );
}
