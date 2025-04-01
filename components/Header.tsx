"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "@mui/material";

function Header() {
  return (
    <AppBar position="static" sx={{ bgcolor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <Link href="/" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
              <Image
                src="/videoplayerlogo.png"
                width={50}
                height={50}
                alt="Logo"
              />
              <Typography sx={{color: "black"}}>Mx Player</Typography>
            </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}></Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
          <Box sx={{ flexGrow: 0, display: "flex", gap: "20px" }}>
            <Tooltip title="User">
              <IconButton sx={{ p: 0 }}>
                <Avatar
                  alt="User"
                  src="https://picsum.photos/800/450?random=2"
                />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
