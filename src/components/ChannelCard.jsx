import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ( channelDetail) =>{ 
 
  console.log(typeof channelDetail.marginTop)
if(channelDetail.marginTop==='-110px'){
  
     return (<Box sx={{borerShadow:'none',borderRadius:'20px',dispaly:'flex',justifyContent:'center',width:{xs:'356px',md:'320px',},height:'326px',margin:'auto',marginTop:channelDetail.marginTop}}>

     <CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center',color:'#fff'}}>
     <CardMedia
             image={channelDetail.channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
             alt={channelDetail.channelDetail?.snippet?.title}
             sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
           />
   
           <Typography variant='h6'>
           {channelDetail.channelDetail?.snippet?.title}
           <CheckCircleIcon sx={{fontSize:14,color:'gray',ml:'5px'}}/>
           </Typography>
           {channelDetail.channelDetail?.statistics?.subscriberCount && (
             <Typography>{parseInt(channelDetail.channelDetail?.statistics?.subscriberCount).toLocaleString()}Subscribers</Typography>
           )}
     </CardContent>
   
   
           </Box>);}
    
    else return(<Box sx={{borerShadow:'none',borderRadius:'20px',dispaly:'flex',justifyContent:'center',width:{xs:'356px',md:'320px',},height:'326px',margin:'auto',}}>
    <Link to={`/channel/${channelDetail.channelDetail.id.channelId}`}>
      <CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center',color:'#fff'}}>
      <CardMedia
              image={channelDetail.channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
              alt={channelDetail.channelDetail?.snippet?.title}
              sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
            />
    
            <Typography variant='h6'>
            {channelDetail.channelDetail?.snippet?.title}
            <CheckCircleIcon sx={{fontSize:14,color:'gray',ml:'5px'}}/>
            </Typography>
            {channelDetail.channelDetail?.statistics?.subscribersCount && (
              <Typography>{parseInt(channelDetail.channelDetail?.statistics?.subscribersCount).toLocaleString()}Subscribers</Typography>
            )}
      </CardContent>
    </Link>
    
            </Box>);}
export default ChannelCard;


{/*<Box sx={{borerShadow:'none',borderRadius:'20px',dispaly:'flex',justifyContent:'center',width:{xs:'356px',md:'320px',},height:'326px',margin:'auto',marginTop:marginTop,}}>
<Link to={`/channel/${channelDetail.channelDetail.id.channelId}`}>
  <CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center',color:'#fff'}}>
  <CardMedia
          image={channelDetail.channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail.channelDetail?.snippet?.title}
          sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
        />

        <Typography variant='h6'>
        {channelDetail.channelDetail?.snippet?.title}
        <CheckCircleIcon sx={{fontSize:14,color:'gray',ml:'5px'}}/>
        </Typography>
        {channelDetail.channelDetail?.statistics?.subscribersCount && (
          <Typography>{parseInt(channelDetail.channelDetail?.statistics?.subscribersCount).toLocaleString()}Subscribers</Typography>
        )}
  </CardContent>
</Link>

        </Box>*/}

 {/*  if(channelDetail.marginTop==='-93px')
 return (<Box sx={{borerShadow:'none',borderRadius:'20px',dispaly:'flex',justifyContent:'center',width:{xs:'356px',md:'320px',},height:'326px',margin:'auto'}}>
 <Link to={`/channel/${channelDetail.channelDetail.id.channelId}`}>
   <CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center',color:'#fff'}}>
   <CardMedia
           image={channelDetail.channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
           alt={channelDetail.channelDetail?.snippet?.title}
           sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
         />

         <Typography variant='h6'>
         {channelDetail.channelDetail?.snippet?.title}
         <CheckCircleIcon sx={{fontSize:14,color:'gray',ml:'5px'}}/>
         </Typography>
         {channelDetail.channelDetail?.statistics?.subscribersCount && (
           <Typography>{parseInt(channelDetail.channelDetail?.statistics?.subscribersCount).toLocaleString()}Subscribers</Typography>
         )}
   </CardContent>
 </Link>
 
         </Box>)
  

  return (
<Box sx={{borerShadow:'none',borderRadius:'20px',dispaly:'flex',justifyContent:'center',width:{xs:'356px',md:'320px',},height:'326px',margin:'auto'}}>

  <CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center',color:'#fff'}}>
  <CardMedia
          image={channelDetail.channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail.channelDetail?.snippet?.title}
          sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
        />

        <Typography variant='h6'>
        {channelDetail.channelDetail?.snippet?.title}
        <CheckCircleIcon sx={{fontSize:14,color:'gray',ml:'5px'}}/>
        </Typography>
        {channelDetail.channelDetail?.statistics?.subscribersCount && (
          <Typography>{parseInt(channelDetail.channelDetail?.statistics?.subscribersCount).toLocaleString()}Subscribers</Typography>
        )}
  </CardContent>


        </Box>
)}
 */}