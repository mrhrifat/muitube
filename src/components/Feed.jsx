import { Box, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Sidebar } from "./";

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sm: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sm: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sm: 0, md: 2 },
        }}
      >
        <Sidebar />
        <Typography
          variant="body2"
          className="copyright"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2022 Mrh Rifat
        </Typography>
      </Box>
    </Stack>
  );
};

export default Feed;
