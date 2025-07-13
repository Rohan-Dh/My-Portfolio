import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import IntroView from '../../components/IntroView/IntroView'
import background from '../../assets/Background/IntroViewBackground.jpg'

const Home = () => {
  return (
    <div className='Home'>
      <div
      className='bg-cover bg-center'
      style={{backgroundImage: `url(${background})`}}
      >
        <Navbar/>
        <IntroView/>
      </div>
    </div>
  )
}

export default Home