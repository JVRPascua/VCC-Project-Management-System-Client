import React from 'react';
import { Grid, CircularProgress, Paper, Typography, AppBar } from '@mui/material';
import { useSelector } from 'react-redux';
import ProjectTask from './ProjectTask/ProjectTask.js';

import useStyles from './styles';

const ProjectTasks = ({ setCurrentId, currentId }) => {
    const projectTasks = useSelector((state) => state.tasks);
    
    const classes = useStyles();

    const projectTasksBacklogs = projectTasks.filter(task=>{
        const date = new Date(task.end_date)
        const timestamp = date.getTime()
        return timestamp < Date.now()
        });

    const projectTasksActive = projectTasks.filter(task=>{
        const date = new Date(task.end_date)
        const timestamp = date.getTime()
        return timestamp > Date.now()
        });
    
    const projectTasksDone = projectTasks.filter(task=>{
        const done = task.is_done=false;
        return done;
        });

    
//    const createdAt = new Date(task.start_date);
//    const startDate = createdAt.toLocaleDateString('en-US');
//    const endAt = new Date(task.end_date);
//    const endDate = endAt.toLocaleDateString('en-US');
//    const today = new Date();
//    const backlogProjectTasks = 
//    if(today > endAt) {
//        console.log("Backlog")
//    }else{
//        console.log("Ongoing")
//    }

//     task.is_done = true ? "Done Task" : "onogo"
//<Grid className={classes.container} container alignItems="stretch" spacing={3}>
//{projectTasks.map((task) => (
//    <Grid key={task.id} item xs={12} sm={6}>
//        <ProjectTask task={task} setCurrentId={setCurrentId}/>
//    </Grid>
//))}
// </Grid>

    return ( 
            <>
            <Grid container justify="center" margin='-10px 0px 0px 25px'spacing={3}>
                {/*Render 3 empty black boxes as items of this container*/}
            <Grid key={1} item >
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography className={classes.heading} variant="h4" align="left">Backlogs</Typography>
                </AppBar>
              <Paper className={classes.paper} elevation={6} sx={{ overflowY: "scroll"}}>
              {projectTasksBacklogs.map((task) => (
                    <Grid key={task.id} item xs={12} sm={15} >
                        <ProjectTask task={task} currentId={currentId} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
              </Paper>
            </Grid>
            <Grid key={2} item>
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography className={classes.heading} variant="h4" align="left">Active Tasks</Typography>
                </AppBar>
              <Paper className={classes.paper} elevation={6} sx={{ overflowY: "scroll"}}>
              {projectTasksActive.map((task) => (
                    <Grid key={task.id} item xs={12} sm={15} >
                        <ProjectTask task={task} currentId={currentId} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
                </Paper>
            </Grid>
            <Grid key={3} item>
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography className={classes.heading} variant="h4" align="left">Done Tasks</Typography>
                </AppBar>
              <Paper className={classes.paper} elevation={6} sx={{ overflowY: "scroll"}}>
              {projectTasksDone.map((task) => (
                    <Grid key={task.id} item xs={12} sm={15} >
                        <ProjectTask task={task} currentId={currentId} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
                </Paper>
            </Grid>
            </Grid>
            </>
     );
}
 
export default ProjectTasks;