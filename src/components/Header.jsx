import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Avatar, Divider, Stack } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Drawer from "./Drawer";
import { LogoutOutlined } from "@mui/icons-material";
export default function Header() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" elevation={0} color="transparent">
          <Toolbar
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Box>
              <img src="insw-logo.png" alt="Logo insw" width={100} />
            </Box>
            <Stack direction={"row"} spacing={1}>
              <IconButton>
                <NotificationsNoneIcon />
              </IconButton>
              <IconButton>
                <LogoutOutlined />
              </IconButton>
            </Stack>
          </Toolbar>
        </AppBar>
        <Divider />
      </Box>
      <Drawer />
    </>
  );
}
