import React from "react";
import Header from "./Header";
import { Stack } from "@mui/material";
import Drawer from "./Drawer";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Stack direction="row" minHeight={"100vh"}>
        <Drawer />
        {children}
      </Stack>
      <Footer />
    </>
  );
}
