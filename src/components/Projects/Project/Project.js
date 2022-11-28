import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useDispatch } from 'react-redux';
import { deleteProject } from '../../../actions/projects';
import useStyles from './styles';

const Project = ({project, setCurrentId}) => {
    const createdAt = new Date(project.start_date);
    const startDate = createdAt.toLocaleDateString('en-US');
    const endAt = new Date(project.end_date);
    const endDate = endAt.toLocaleDateString('en-US');

    const classes = useStyles();
    const dispatch = useDispatch();

    return ( 
        <Card className={classes.card}>
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
                <Button style={{color: 'white'}} size="small" onClick={() => { setCurrentId(project.projects_id) }}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
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
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(deleteProject(project.projects_id))}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>      
        </Card>
        );
}
 
export default Project;