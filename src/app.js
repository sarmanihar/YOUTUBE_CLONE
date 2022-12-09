import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Box} from '@mui/material'
import {Navbar,Feed,VideoDetail,SearchDetail,Channel,Sidebar,Search,Videos} from './components'

const App = () => {
  return (
    <BrowserRouter>
    <Box style={{backgroundColor:'#000'}}>
        <Navbar></Navbar>
        <Routes>
            <Route path='/' exact element ={<Feed/>} />
            <Route path='/video/:id' element={<VideoDetail></VideoDetail>}></Route>
            <Route path='/Channel/:id' element={<Channel/>}></Route>
            <Route path='/Search/:searchTerm' element={<SearchDetail></SearchDetail>}></Route>
        </Routes>
    </Box>
    </BrowserRouter>
  )
}

export default App