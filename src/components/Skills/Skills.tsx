import React, { useEffect, useState } from 'react'
import "./Skills.scss";
import { skills, tools } from './data';
import { motion } from "framer-motion"
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
    const[items, setItems] = useState(skills);
    const [activeBtn, setActiveBtn] = useState(false); 
    const handleSkillsBtn = () => {
        setItems(skills);
        setActiveBtn(false);
    }
    const handleToolsBtn = () => {
        setItems(tools);
        setActiveBtn(true);
    }

    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);

  return (
    <div className='skills' id='Skills'>
        <div className="container">
            <div className="content flx">
                <div className="text">
                    <h1 className='title'>What My Programming<br/>Skills Included <span className='dot'>?</span></h1>
                    <p className='desc'>
                    I develop simple, intuitive and responsive user interface that helps users get things done 
                    with less effort and time with those technologies.
                    </p>
                    <div className='btns'>
                        <button className={ activeBtn? 'skills-btn' : 'skills-btn btn-bg'} onClick={handleSkillsBtn}>skills</button>
                        <button className={ activeBtn? 'tools-btn btn-bg' : 'tools-btn'} onClick={handleToolsBtn}>tools</button>
                    </div>
                </div>
                <ul className="items">
                    {
                        items.map(item => {
                            const {id, name, img} = item;
                            return (
                                <li key={id} className='item flx-c' data-aos="zoom-out-up">
                                    <span className='name flx-c'>{name}</span>
                                    <img src={img} />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Skills;