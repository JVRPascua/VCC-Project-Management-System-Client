import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useDispatch } from 'react-redux';
import { deleteProject } from '../../../actions/projects';
import { useNavigate } from 'react-router-dom';
import useStyles from './styles';

const Project = ({project, setCurrentId}) => {
    const createdAt = new Date(project.start_date);
    const startDate = createdAt.toLocaleDateString('en-US');
    const endAt = new Date(project.end_date);
    const endDate = endAt.toLocaleDateString('en-US');
    const user = JSON.parse(localStorage.getItem('profile'));
    const userId = user?.result?.rows[0]?.users_id;

    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const openProject = () => {
        navigate(`/projects/${project.projects_id}`)
    };

    return ( 
        <Card className={classes.card} elevation={6}>
            <ButtonBase className={classes.cardAction} onClick={openProject}>
            <CardMedia className={classes.media} title={project.project_name}/>
            <div className={classes.overlay}>
                <Typography variant="h6">Project {project.project_name }</Typography>
                <div>
                <Typography variant="body">Project Start: {startDate}</Typography>
                </div>
                <div>
                <Typography variant="body">Deadline: {endDate} </Typography>
                </div>
            </div>
            <div className={classes.overlay2}>
            {(userId === 1) && (
                <Button style={{color: 'white'}} size="small" onClick={() => { setCurrentId(project.projects_id) }}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
                )}
            </div> 
            <CardContent>
            <div className={classes.details}>
            <Typography variant="body2" color="textSecondary">Project Manager {project.project_manager-1}</Typography>
            </div>
            <div className={classes.details}>
            <Typography variant="body2" color="textSecondary">Budget: {project.budget}</Typography>
            </div>
            <div className={classes.details}>
            <Typography variant="body2" color="textSecondary">Description: {project.description}</Typography>
            </div>
            </CardContent> 
            </ButtonBase>
            <CardActions className={classes.cardActions}>
            {(userId === 1) && (
                <Button size="small" color="primary" onClick={() => dispatch(deleteProject(project.projects_id))}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
                )}
            </CardActions>    
        </Card>
        );
}
 
export default Project;