import { Box, Stack } from "@mui/material";
import React from "react";
import { VideoCard, ChannelCard,VideoCardLoader } from "./";


const Videos = ({ videos, direction }) => {
  console.log(videos);

  if (!videos) return <VideoCardLoader />;
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos?.map((video, index) => (
        <Box key={index}>
          {video.id.videoId && <VideoCard video={video} />}
          {video.id.channelId && <ChannelCard channel={video} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
