import React from 'react'
import { useState,useEffect } from 'react';
import {Box,Typography} from '@mui/material';
import { useParams } from 'react-router-dom';
import Videos from './Videos'
import { fetchFromApi } from '../utils/fetchFromApi';
//let boolean=false;
//import {Videos,Sidebar} from './components'
const SearchFeed = () => {
  const {searchTerm}=useParams();
  const [videos,setVideos]=useState([]);
  useEffect(()=>{
    //setVideos(null);
    //console.log('useeffect called');
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data)=>setVideos(data.items))
  },[searchTerm]);
  return (
    <Box p={2} sx={{overflowY:'auto',height:'90vh' ,flex:2}}>
    <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}}>
      Search Results For <span style={{color:'#F31503'}}>{searchTerm}</span>videos
    </Typography>
   <Videos videos={videos} />
  </Box>
  )
}

export default SearchFeed
