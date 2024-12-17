import React from 'react'
import { Link } from 'react-router-dom'
import "./Logo.scss"
import { scrollUp } from '../global/global'

const Logo = () => {
  return (
    <Link to="/" className='logo' onClick={scrollUp}>
        <h1>
            <span className='name'>Bashir</span>
            <span className='dot'>.</span>
        </h1>
    </Link>
  )
}

export default Logo