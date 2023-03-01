import React from 'react';
import './WorkCard.css';
import pro1 from '../assets/project1.jpeg';
import pro2 from '../assets/project2.png';
import pro3 from '../assets/project3.png';
import { NavLink } from 'react-router-dom';

export const WorkCard = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Project.</h1>
            <div className="project-container">
                <div className="project-card">
                    <img src={pro1} alt="project" />
                    <h2 className='project-title'>Project-TItle</h2>
                    <div className="project-details">
                        <p>detalies project</p>
                    </div>
                    <div className="project-btns">
                        <NavLink to="url.com" className='btn'>View</NavLink>
                        <NavLink to="url.com" className="btn">Source</NavLink>
                    </div>
                </div>
                <div className="project-card">
                    <img src={pro2} alt="project" />
                    <h2 className='project-title'>Project-TItle</h2>
                    <div className="project-details">
                        <p>detalies project</p>
                    </div>
                    <div className="project-btns">
                        <NavLink to="url.com" className='btn'>View</NavLink>
                        <NavLink to="url.com" className="btn">Source</NavLink>
                    </div>
                </div>
                <div className="project-card">
                    <img src={pro3} alt="project" />
                    <h2 className='project-title'>Project-TItle</h2>
                    <div className="project-details">
                        <p>detalies project</p>
                    </div>
                    <div className="project-btns">
                        <NavLink to="url.com" className='btn'>View</NavLink>
                        <NavLink to="url.com" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
        </div>
  )
}
