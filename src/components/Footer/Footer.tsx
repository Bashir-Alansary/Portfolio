import React from 'react'
import "./Footer.scss"
import { media } from '../Contact/data'
import Logo from '../Logo/Logo'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="content flx">
                <div className="hide-mobile">
                    <Logo />
                </div>
                <ul className='media-icons flx'>
                    {
                        media.map(item => {
                            const {id, name, icon, link} = item;
                            return (
                                <li key={id}>
                                    <a href={link} target="_blank" className='flx-c'>{icon}</a>
                                </li>
                            )
                        })
                    }
                </ul>
                <p><span className="dot">©</span> 2024 Bashir Alansary.portfolio</p>
            </div>
        </div>
    </div>
  )
}

export default Footer