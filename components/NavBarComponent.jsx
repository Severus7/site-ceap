import React, { useState } from "react";
import Link from "next/link";
import { AppBar, Box, Tabs, Tab, Toolbar, Typography } from "@mui/material";

const NavBarComponent = () => {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="inherit"
        sx={{ borderBottom: "1px solid #bdbdbd" }}
        elevation={0}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Project Core
          </Typography>
          <Tabs
            value={value}
            onChange={(event, value) => setValue(value)}
            sx={{ marginLeft: "auto" }}
            indicatorColor="inherit"
          >
            <Link href="/" passHref>
              <Tab label="Home" sx={{ textTransform: "none" }} />
            </Link>
            <Link href="/about" passHref>
              <Tab label="About" sx={{ textTransform: "none" }} />
            </Link>
            <Link href="/history" passHref>
              <Tab label="History" sx={{ textTransform: "none" }} />
            </Link>
            <Link href="/contact" passHref>
              <Tab label="Contact" sx={{ textTransform: "none" }} />
            </Link>
            <Link href="/courses" passHref>
              <Tab label="Courses" sx={{ textTransform: "none" }} />
            </Link>
          </Tabs>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBarComponent;
