import React from 'react'
import Header from '../Header/Header'
import Stats from '../Statistics/Stats'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Portfolio from '../Portfolio/Portfolio'
import ScrollToUp from '../ScrollToUp/ScrollToUp'

const Home = () => {
  return (
    <div className='home'>
        <Header />
        <Stats />
        <About />
        <Skills />
        <Portfolio />
    </div>
  )
}

export default Home