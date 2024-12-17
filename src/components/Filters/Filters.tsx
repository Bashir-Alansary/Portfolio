import React, { FC, useState } from 'react'
import { projects } from '../AllProjects/data';
import "./Filters.scss"
import { projectType } from '../global/global';

interface Props {
    setItems: React.Dispatch<React.SetStateAction<projectType[]>>
}

const Filters:FC<Props> = ({setItems}) => {
    const categories = ["all", ...Array.from(new Set(projects.map(project => project.category)))];
    console.log(categories);
    
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const filterProjects = (category: string, index: number): void => {
        if (category === "all") {
            setItems(projects);
        } else {
            const newItems = projects.filter(item => item.category === category);
            setItems(newItems);
        }
        setActiveIndex(index);
    }

  return (
    <ul className="filters flx">
        {
            categories.map((category, i) => {
                return (
                    <li key={i}>
                        <button 
                        className={i === activeIndex ? 'dot' : ''} 
                        onClick={()=> filterProjects(category, i)}
                        >
                        {category}
                        </button>
                    </li>
                )
            })
        }
    </ul>
  )
}

export default Filters