import React, { FC, useEffect, useState } from 'react'
import "./Navbar.scss"
import navLinks from './data';
import { Link, useLocation } from 'react-router-dom';
import { scrollToElement, scrollUp } from '../global/global';
import Logo from '../Logo/Logo';

const Navbar:FC = () => {
  const location = useLocation();
  console.log(location);
  
  const [activeNav, setActiveNav] = useState<boolean>(false);
  const [activeToggle, setActiveToggle] = useState<boolean>(false);

  const handleAnchor = (): void => {
    if (activeToggle === true) {
      setActiveToggle(false);
    }
  }

  const handleToggleBtn = () => {
    setActiveToggle(!activeToggle);
  }

  const handleLinks = () => {
    scrollUp();
    setActiveToggle(false);
  }

  useEffect(()=> {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 90) {
        setActiveNav(true);
      } else {
        setActiveNav(false);
      }
    })
  })
  
  return (
    <div className={activeNav || location.pathname !== "/" ? 'navbar active' : 'navbar'}>
        <div className="container">
            <div className="content flx">
              <div className="band flx">
                <Logo />
                <button className={activeToggle? "toggle-btn hide-pc active" : "toggle-btn hide-pc"} onClick={handleToggleBtn}>
                  <span className="top"></span>
                  <span className="middle"></span>
                  <span className="bottom"></span>
                </button>
              </div>
              <ul className={activeToggle? 'links flx' : 'links flx active'}>
                <li><Link to="/" className='link' onClick={handleLinks}>Home<span className='dot'>.</span></Link></li>
                  { location.pathname === "/"?
                    navLinks.map(item => {
                      const {id, link, name} = item;
                      return(
                        <li key={id} className={name === "Contact" ? 'hide-pc cont' : ''}><a href={link} onClick={handleAnchor}>{name}<span className='dot'>.</span></a></li>
                      )
                    }) : null
                  }
                  <li><Link to="/portfolio" className='link' onClick={handleLinks}>Portfolio<span className='dot'>.</span></Link></li>
              </ul>
              <div className='contact-btn hide-mobile'>
                <a href='#Contact' className='btn-bg specail-btn' onClick={handleAnchor}>contact</a>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;