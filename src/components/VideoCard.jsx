import React from 'react'
import {Link} from 'react-router-dom'
import { Typography,Card,CardContent,CardMedia } from '@mui/material'
import {CheckCircle} from '@mui/icons-material'
import { demoThumbnailUrl,demoVideoUrl,demoVideoTitle,demoChannelUrl,demoChannelTitle } from '../utils/constants'
//const VideoCard = ({video:{id:{videoId},snippet}})
const VideoCard = (video) => {
    console.log(video)
  return (
<Card sx={{width:{md:'320px',xs:'100%'},boxShadow:'none',borderRadius:0}}>
    <Link to={video.getvid.id.videoId?`/video/${video.getvid.id.videoId}`:demoVideoUrl}>
    <CardMedia image={video.getvid.snippet?.thumbnails?.high?.url} alt={video.getvid.snippet?.title} sx={{width:358,height:180}}/>
    </Link>
    <CardContent sx={{backgroundColor:'#1e1e1e',height:'106px'}}>
        <Link to={video.getvid.id.videoId?`/video/${video.getvid.id.videoId}`:demoVideoUrl}>
            <Typography variant='subtitle1' fontWeight='bold' color='#FFF'>{video.getvid.snippet?.title?.slice(0,60) || demoVideoTitle.slice(0,60)}</Typography>
        </Link>
        <Link to={video.getvid.snippet?.channelId?`/channel/${video.getvid.snippet?.channelId}`:demoChannelUrl}>
            <Typography variant='subtitle2' fontWeight='gray' color='#FFF'>{video.getvid.snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{fontSize:12,color:'gray',ml:'5px'}}/>
            </Typography>
        </Link>
    </CardContent>
</Card>
  )
  return (<div>hi</div>)
}

export default VideoCard


{/*
<Card sx={{width:{md:'320px',xs:'100%'},boxShadow:'none',borderRadius:0}}>
      <Link to={video.getvid.id.videoId?`/video/${video.getvid.id.videoId}`:demoVideoUrl}>
      <CardMedia image={video.getvid.snippet?.thumbnails?.high?.url} alt={video.getvid.snippet?.title} sx={{width:358,height:180}}/>
      </Link>
      <CardContent sx={{backgroundColor:'#1e1e1e',height:'106px'}}>
          <Link to={video.getvid.id.videoId?`/video/${video.getvid.id.videoId}`:demoVideoUrl}>
              <Typography variant='subtitle1' fontWeight='bold' color='#FFF'>{video.getvid.snippet?.title?.slice(0,60) || demoVideoTitle.slice(0,60)}</Typography>
          </Link>
          <Link to={video.getvid.snippet?.channelId?`/channel/${video.getvid.snippet?.channelId}`:demoChannelUrl}>
              <Typography variant='subtitle2' fontWeight='gray' color='#FFF'>{video.getvid.snippet?.channelTitle || demoChannelTitle}
              <CheckCircle sx={{fontSize:12,color:'gray',ml:'5px'}}/>
              </Typography>
          </Link>
      </CardContent>
  </Card>
*/}






    /*<Card sx={{width:{md:'320px',xs:'100%'},boxShadow:'none',borderRadius:0}}>
    <Link to={video.getvid.id.videoId?`/video/${video.getvid.id.videoId}`:demoVideoUrl}>
    <CardMedia image={video.getvid.snippet?.thumbnails?.high?.url} alt={video.getvid.snippet?.title} sx={{width:358,height:180}}/>
    </Link>
    <CardContent sx={{backgroundColor:'#1e1e1e',height:'106px'}}>
        <Link to={video.getvid.id.videoId?`/video/${video.getvid.id.videoId}`:demoVideoUrl}>
            <Typography variant='subtitle1' fontWeight='bold' color='#FFF'>{video.getvid.snippet?.title?.slice(0,60) || demoVideoTitle.slice(0,60)}</Typography>
        </Link>
        <Link to={video.getvid.snippet?.channelId?`/channel/${video.getvid.snippet?.channelId}`:demoChannelUrl}>
            <Typography variant='subtitle2' fontWeight='gray' color='#FFF'>{video.getvid.snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{fontSize:12,color:'gray',ml:'5px'}}/>
            </Typography>
        </Link>
    </CardContent>
</Card>*/