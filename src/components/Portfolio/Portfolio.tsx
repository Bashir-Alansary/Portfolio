import React, { useState } from 'react'
import "./Portfolio.scss"
import { projects } from '../AllProjects/data'; 
import Project from '../Project/Project';
import Filters from '../Filters/Filters';
import { Link } from 'react-router-dom';
import { scrollUp } from '../global/global';

const Portfolio = () => {
    const [items, setItems] = useState(projects);
  return (
    <div className='portfolio flw-hidden' id='Portfolio'>
        <div className="container">
            <div className="top flx">
                <h1 className='title'>See my portfolio <span className='dot'>!</span></h1>
                <Filters setItems = {setItems} />
            </div>
            <div className="projects">
                <div className="content flx-n">
                    {
                        items.map((project, index) => {
                            if (index < 6) {
                                return(
                                    <Project key={project.id} {...project}/>
                                )
                            }
                        })
                    }
                </div>
            </div>
            <div className="more flx-c">
                <Link to="/portfolio" className='more-btn btn-bg specail-btn'  onClick={scrollUp}>view more</Link>
            </div>
        </div>
    </div>
  )
}

export default Portfolio