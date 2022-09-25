import { Box, Stack } from "@mui/material";
import React from "react";

const Videos = ({ videos }) => {
  console.log(videos);
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((video, index) => (
        <Box key={{ index }}>
          {video.id.videoId && <VideoCard video={video} />}
          {video.id.channelId && <ChannelCard channel={video} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
