import React, { FC } from 'react'
import { FaChevronRight } from "react-icons/fa6";
import "./Stats.scss"
import data from './data';
import { scrollToElement } from '../global/global';

const Stats:FC = () => {
  return (
    <div className='stats'>
        <div className="container">
            <div className="content flx">
                {
                    data.map(item => {
                        const {id, link, num, title, icon} = item;
                        return (
                            <a key={id} href="#" className="box flx" onClick={(e)=>{e.preventDefault(); scrollToElement(link)}}>
                                <div className="icon-bx">
                                    <img src={icon} />
                                </div>
                                <div className='text'>
                                    <h1 className='num dot'>{num}+</h1>
                                    <h4 className='title'>{title}</h4>
                                </div>
                                <div className="chevron-bx">
                                    <FaChevronRight />
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Stats