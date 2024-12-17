import React, { useState } from 'react'
import { projects } from './data'
import Project from '../Project/Project'
import "./AllProjects.scss"
import Filters from '../Filters/Filters'

const FullProjects = () => {
  const [items, setItems] = useState(projects);
  return (
    <div className='all-projects flw-hidden'>
        <div className='container'>
            <h1 className='title flx-c'>Portfolio <span className='dot'>!</span></h1>
            <Filters setItems={setItems} />
            <div className="content flx-n">
                {
                    items.map(project => <Project key={project.id} {...project}/>)
                }
            </div>
        </div>
    </div>
  )
}

export default FullProjects