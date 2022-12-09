import React from "react";
import { Stack, Box } from "@mui/material";

//import { ChannelCard,VideoCard } from "./";
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'
const Videos = ( videos) => {
  
//console.log(videos.videos[0].snippet.channelId);
console.log(videos)
if(videos.proof===1)
return (<Stack direction='row' flexWrap='wrap' justifyContent='start' gap={2}>

{videos.send.map((item,idx)=>(<Box key={idx}>
 
  {item.id.videoId && <VideoCard getvid={item}/>}
  {console.log(item)}


</Box>))}
</Stack>)
else
return (
  <Stack direction='row' flexWrap='wrap' justifyContent='start' gap={2}>
    {videos.videos.length!==0 && videos.videos[0].snippet.channelId===videos.videos[1].snippet.channelId && <ChannelCard channelDetail={videos.videos[0]}/>}
    {videos.videos.map((item,idx)=>(<Box key={idx}>
     
      {item.id.videoId && <VideoCard getvid={item}/>}
      {console.log(item)}


    </Box>))}
  </Stack>
)
  
}

/*if(videos.proof===1)
return (<Stack direction='row' flexWrap='wrap' justifyContent='start' gap={2}>

{videos.send.map((item,idx)=>(<Box key={idx}>
 
  {item.id.videoId && <VideoCard getvid={item}/>}
  {console.log(item)}


</Box>))}
</Stack>)
else
return (
  <Stack direction='row' flexWrap='wrap' justifyContent='start' gap={2}>
    {videos.length!==0 && videos[0].snippet.channelId===videos[1].snippet.channelId && <ChannelCard channelDetail={videos[0]}/>}
    {videos.map((item,idx)=>(<Box key={idx}>
     
      {item.id.videoId && <VideoCard getvid={item}/>}
      {console.log(item)}


    </Box>))}
  </Stack>
)
  
}
*/
export default Videos;

{/*

<Stack direction='row' flexWrap='wrap' justifyContent='start' gap={2}>
    {videos.length!==0 && videos[0].snippet.channelId===videos[1].snippet.channelId && <ChannelCard channelDetail={videos[0]}/>}
    {videos.map((item,idx)=>(<Box key={idx}>
     
      {item.id.videoId && <VideoCard getvid={item}/>}
      {console.log(item)}


    </Box>))}
  </Stack>
*/}