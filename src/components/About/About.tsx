import React, { FC } from 'react'
import "./About.scss";
import { scrollToElement } from '../global/global';
import DownloadCV from '../DownloadCV/DownloadCV';

const About:FC = () => {
  return (
    <div className='about' id='About'>
        <div className="container">
            <div className="content flx">
                <div className="imgbx">
                    <img src="images/about.png" />
                </div>
                <div className="text">
                    <h1 className='title'>
                        Need a Scalable Web App <span className='dot'>?</span>
                        <br/>
                        I Can Build That For You <span className=''>!</span>
                    </h1>
                    <p className='desc'>
                    Hi! I’m Bashir Alansary, a Computer Engineer and ITI Scholar specializing in Frontend Development. 
                    I craft high-performance, responsive web applications using React.js, Next.js, and TypeScript.
                    With a strong focus on clean architecture and maintainable code (BEM), I bridge the gap between creative 
                    design and technical implementation. Beyond solo full-stack projects, I thrive in agile 
                    environments—navigating daily stand-ups, version control, and collaborative project management to turn 
                    complex ideas into seamless reality
                    </p>
                    <div className='btns'>
                        <a href='https://wa.me/201501904932?text=Hi%20Bashir,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.'target='_blank' className='hire btn-bg specail-btn'>Hire me</a>
                        <DownloadCV />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About