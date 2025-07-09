import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import IntroView from '../../components/IntroView/IntroView'

const Home = () => {
  return (
    <div className='Home'>
        <Navbar/>
        <IntroView/>
    </div>
  )
}

export default Home