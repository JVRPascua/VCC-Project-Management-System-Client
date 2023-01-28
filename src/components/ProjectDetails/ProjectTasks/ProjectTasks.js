import React from 'react';
import { useSelector } from 'react-redux';
import ProjectTask from './ProjectTask/ProjectTask.js';

const ProjectTasks = ({id}) => {
    const projectTasks = useSelector((state) => state.tasks);
    return ( 
        <>
        <div>ProjectTasks</div>
        <ProjectTask id={id} />
        </>
     );
}
 
export default ProjectTasks;