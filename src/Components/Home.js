import React from 'react'
import Banner from './Banner'
import Body from './Body'

const Home = () => {
  return (
    <div className='w-3/4 flex flex-col justify-center items-center mx-auto'>
    <Banner/>
    <Body/>
   </div>
  )
}

export default Home
