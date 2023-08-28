import { Avatar, Box, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import Chip from "./Chip";

export default function Drawer() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "298px",
        borderRight: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Stack
        p={2}
        direction={"row"}
        alignItems={"center"}
        spacing={2}
        borderBottom={`1px solid ${theme.palette.divider}`}
      >
        <Avatar sx={{ width: 48, height: 48 }}>A</Avatar>
        <Stack spacing={0.5} alignItems={"left"}>
          <Typography fontWeight={700}>Muhammad Iqbal</Typography>
          <Chip label={"Cargo Owner"} />
        </Stack>
      </Stack>
    </Box>
  );
}
