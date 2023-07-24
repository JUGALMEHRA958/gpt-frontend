import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
const Navbar = () => {
  const theme = useTheme("");
  return (
    <div>
      <Box
        width={"100%"}
        p="1rem 6%"
        textAlign={"center"}
        backgroundColor={theme.palette.background.alt}
        sx={{ boxShadow: 3, mb: 2 }}
      >
        <Typography variant="h1" color={"primary"} fontWeight={"bold"}>
          GPT project
        </Typography>
        <Link to="/register" p={1}>
          register
        </Link>
        <Link to="/login" p={1}>
          login
        </Link>
      </Box>
    </div>
  );
};

export default Navbar;
// <h1>Nav mane</h1>
