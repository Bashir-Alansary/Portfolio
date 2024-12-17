import React, { FC } from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

import "./Header.scss"
import { scrollToElement } from '../global/global';
import { media } from '../Contact/data';
import DownloadCV from '../DownloadCV/DownloadCV';

const Navbar:FC = () => {
  return (
    <div className='header'>
        <div className="container">
            <div className="content flx">
              <ul className='media flx-c hide-mobile'>
                {
                  media.map((item, index) => {
                    const {id, name, icon, link} = item;
                    if (index < 3) {
                      return (
                        <li key={id} className='media-icon'>
                          <a href={link} className='flx-c'>{icon}</a>
                          <span className='name flx-c'>{name}</span>
                        </li>
                      )
                    }
                  })
                }
                <li className='last media-icon'></li>
              </ul>
              <div className="info">
                  <div className='imgbx flx-c'>
                    <img src='images/bashir.png' />
                  </div>
                  <div className="text flx-c hide-mobile">
                    <div className='text-in'>
                      <h1>Fronte<span className="dot">nd De</span>veloper</h1>
                      <DownloadCV />
                    </div>
                  </div>
              </div>
              <ul className='media flx-c hide-mobile'>
                <li className='scroll-icon'><a href='#About' className='scroll'>Scroll</a></li>
                <li className='last media-icon'></li>
              </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar;