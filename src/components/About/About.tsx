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
                    <h1 className='title'>Need a Creative Product <span className='dot'>?</span><br/>I can Help You <span className=''>!</span></h1>
                    <p className='desc'>
                    Hi! I’m Bashir Alansary, and I’m a developer who has passion for 
                    building clean web applications with intuitive functionality. 
                    I enjoy the process of turning ideas into reality using creative solutions. 
                    I’m always curious about learning new skills, tools, and concepts. 
                    In addition to working on various solo full stack projects, I have worked with creative teams,
                     which involves daily stand-ups and communications, source control, 
                     and project management.
                    </p>
                    <div className='btns'>
                        <a href='#' className='hire btn-bg specail-btn' onClick={(e)=>{e.preventDefault(); scrollToElement('Contact')}}>Hire me</a>
                        <DownloadCV />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About