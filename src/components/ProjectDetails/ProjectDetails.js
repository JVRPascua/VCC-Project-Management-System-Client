import React, { useEffect, useState } from 'react';
import { Paper, Typography, CircularProgress, Divider, Container, Grow, Grid, AppBar, Button, Modal, Box } from '@mui/material';
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
    const { isLoading } = useSelector((state) => state?.projects);
    const dispatch = useDispatch();
    const project = useSelector((state) => state?.project);
    const navigate = useNavigate();
    const {id} = useParams();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const projectName = project.project[0]?.project_name
    const projectManager = project.project[0]?.project_manager
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
            <Paper className={classes.heading} elevation={6}>
            {projectName}
            </Paper>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" margin='15px 25px 10px 15px' justifyContent="flex-end" alignItems="stretch" spacing={3}>
                    <>
                    <Button onClick={handleOpen} variant="contained" color="primary">Add Task</Button>
                    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                    <Box className={classes.box}>
                      <FormTask projectManager={projectManager} id={id}/>
                    </Box>
                    </Modal>
                    </>
                    </Grid>
                    <Grid container justify="space-between" justifyContent="center" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={15}>
                            <ProjectTasks id={id} project={project} currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
     );
}
 
export default ProjectDetails;