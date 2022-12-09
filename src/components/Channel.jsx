import React from 'react'
import { useEffect,useState } from 'react'
import {useParams} from 'react-router-dom';
import {Box} from '@mui/material'
//import {Videos,ChannelCard} from './'
import ChannelCard from './ChannelCard'
import Videos from './Videos'
import { fetchFromApi } from '../utils/fetchFromApi';
const Channel = () => {
  const {id}=useParams()
  console.log(id)
  const [chan,setcChan]=useState(null)
  const[videos,setVideos]=useState([])
 

  console.log(chan);

  console.log(videos);
  useEffect(()=>{fetchFromApi(`channels?part=snippet&id=${id}`).then((data)=>setcChan(data?.items[0]));
  fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then((data)=>setVideos(data?.items))},[id]);
  return (
    <Box minHeight='95vh'>
      <Box>
      <div style={{background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(113,9,121,1) 97%, rgba(0,212,255,1) 100%)',zIndex:10,height:'300px'}}/>
      {<ChannelCard channelDetail={chan} marginTop='-110px'/>}
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{mr:{sm:'100px'}}}/>
      {<Videos send={videos} proof={1}/>}
      </Box>
    
    </Box>
  )
  return <div>hi</div>
}

export default Channel
