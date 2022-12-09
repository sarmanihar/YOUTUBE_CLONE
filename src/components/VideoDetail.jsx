import React from 'react'
import { useState,useEfect } from 'react'
import {Link,useParams} from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography,Box,Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import {Video} from './'
import { fetchFromApi } from '../utils/fetchFromApi'
const VideoDetail = () => {
  const {id}=useParams()
  const [videodetail,setvideodetail]=useState(null)
  useEfect(()=>{fetchFromApi(`videos?part=snippet,statics&id=${id}`).then((data)=>setvideodetail(data.items[0]))},[id])
  return (
    <Box minHeight='95vh'> <Stack direction={{xs:'column',md:'row'}}>
      <Box flex={1}>
        <Box sx={{width:'100%',position:'sticky',top:'86px'}}>
          <ReactPlayer url={`https://www.youtube.com/watch?=${id}`}/>
        </Box>
      </Box>
      </Stack></Box>
  )
}

export default VideoDetail