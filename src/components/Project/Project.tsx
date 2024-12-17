import React, { FC, useEffect } from 'react'
import { FaEye, FaGithub } from "react-icons/fa";
import "./Project.scss";
import { projectType } from '../global/global';
import AOS from "aos";
import "aos/dist/aos.css";

const Project:FC<projectType> = ({id, img, gitLink, viewLink}) => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  const handleDataAos = (): string => {
    if (id % 3 === 0) {
      return "zoom-in-left";
    } else if (id % 3 === 1) {
      return "zoom-in-right";
    }
    return "zoom-in";
  }

  return (
    <div className='project' data-aos={handleDataAos()}>
        <div className="imgbx">
            <img src={img} />
        </div>
        <div className="overlay">
            <div className="btns flx">
                <a href={viewLink} className='flx-c' target='_blank'><FaEye /></a>
                <a href={gitLink} className='flx-c' target='_blank'><FaGithub /></a>
            </div>
        </div>
    </div>
  )
}

export default Project