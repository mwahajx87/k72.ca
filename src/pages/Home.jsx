import React from 'react'
import Video from '../Components/Home/Video'
import HomeTopText from '../Components/Home/HomeTopText'
import HomeBottomText from '../Components/Home/HomeBottomText'
import Navbar from '../Navbar/Navbar'

const Home = () => {
  return (

    <div className='relative text-white w-screen h-screen overflow-hidden'>
      <Navbar />
      <div className='w-full h-screen  fixed'>
        <Video />
      </div>
      <div className='relative w-screen h-screen flex flex-col justify-between '>
        <HomeTopText />
        <HomeBottomText />
      </div>
    </div>
  )
}

export default Home