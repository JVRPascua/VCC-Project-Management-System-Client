import React from 'react';
import { Grid, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import ProjectTask from './ProjectTask/ProjectTask.js';

import useStyles from './styles';

const ProjectTasks = () => {
    const projectTasks = useSelector((state) => state.tasks);
    const classes = useStyles();

    return ( 
        !projectTasks.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {projectTasks.map((task) => (
                    <Grid key={task.id} item xs={12} sm={6}>
                        <ProjectTask task={task}/>
                    </Grid>
                ))}
            </Grid>
        )
     );
}
 
export default ProjectTasks;