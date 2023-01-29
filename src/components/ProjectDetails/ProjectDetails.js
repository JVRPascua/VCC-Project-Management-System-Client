import React, { useEffect, useState } from 'react';
import { Paper, Typography, CircularProgress, Divider, Container, Grow, Grid, AppBar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getProject } from '../../actions/projects';
import { getProjectTasks } from '../../actions/tasks';
import ProjectTasks from './ProjectTasks/ProjectTasks';
import FormTask from '../Form/FormTask';
import useStyles from "./styles.js";

const ProjectDetails = () => {
    const classes = useStyles();
    const [currentId, setCurrentId] = useState(null);
    const { project, projects, isLoading } = useSelector((state) => state.projects);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();
    
    useEffect(() => {
        dispatch(getProject(id));
    }, [dispatch, id]);

    useEffect(() => {
        dispatch(getProjectTasks(id, currentId));
    }, [dispatch, id, currentId]);

    if(!project) return null;

    if (isLoading) {
        return (
          <Paper elevation={6} className={classes.loadingPaper}>
            <CircularProgress size="7em" />
          </Paper>
        );
      }
    
    return ( 
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h4" align="left">{project[0].project_name} </Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" justifyContent="flex-end" alignItems="stretch" spacing={3} className={classes}>
                        <Grid item xs={12} sm={7}>
                            <ProjectTasks id={id} setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormTask id={id} currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
     );
}
 
export default ProjectDetails;