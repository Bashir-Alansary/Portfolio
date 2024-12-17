import React from 'react'
import "./Contact.scss";
import { info } from './data';

const Contact = () => {
  return (
    <div className='contact' id='Contact'>
        <div className="container">
            <h1 className='title'>Contact With Me<span className='dot'>.</span></h1>
            <div className="content flx">
                <ul className="info">
                    {
                        info.map(item => {
                            const {id, title, val} = item;
                            return (
                                <li key={id}>
                                    <p className='dot'>{title}:</p>
                                    <h2>{val}</h2>
                                </li>
                            )
                        })
                    }
                </ul>
                <form>
                    <div className="input-content flx">
                        <input type="text" name="" id="" placeholder='your name' />
                        <input type="email" name="" id="" placeholder='your email' />
                    </div>
                    <div className="input-content">
                        <input type="text" name="" id="" placeholder='subject' />
                    </div>
                    <div className="input-content">
                        <textarea  placeholder='message'></textarea>
                    </div>
                    <div className="input-content">
                        <button className='send-btn btn-bg specail-btn'>Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact