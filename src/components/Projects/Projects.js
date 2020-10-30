import React from 'react';
import allProjectList from '../../Data/AllProjectList';
import SingleProjectPart from '../SingleProjectPart/SingleProjectPart';
import './Projects.css';

const Projects = () => {
    const projects = allProjectList;
    // console.log(projects);
    return (
        <div className="container project-page">
            <div className="text-center section-header">
                <h1>Projects -</h1>
            </div>
            {
                projects.map(project => <SingleProjectPart key={project.id} project ={project}></SingleProjectPart>)
            }
        </div>
    );
};

export default Projects;