import { Box, Card, Skeleton, Stack } from "@mui/material";
import React from "react";

const videos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const VideoCardLoader = () => {
  return (
    <Stack direction="row" gap={2} flexWrap="wrap">
      {videos.map((video) => (
        <Box sx={{ padding: 1 }} key={video}>
          <Skeleton width={320} height={280} />
          <Skeleton variant="text" />
          <Skeleton variant="text" width="50%" />
        </Box>
      ))}
    </Stack>
  );
};

export default VideoCardLoader;
