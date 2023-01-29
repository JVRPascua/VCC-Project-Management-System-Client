import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import tasks from '../../../../reducers/tasks';

const ProjectTask = ({id, task}) => {
    const classes = useStyles();

    const createdAt = new Date(task.start_date);
    const startDate = createdAt.toLocaleDateString('en-US');
    const endAt = new Date(task.end_date);
    const endDate = endAt.toLocaleDateString('en-US');

    return ( 
        <Card className={classes.card} elevation={6}>
            <CardMedia className={classes.media} title={task.project_name}/>
            <div className={classes.overlay}>
                <Typography variant="h6"> {task.task_name }</Typography>
                <div>
                <Typography variant="body">Start: {startDate}</Typography>
                </div>
                <div>
                <Typography variant="body">Deadline: {endDate} </Typography>
                </div>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" >
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div> 
            <ButtonBase component="span" className={classes.cardAction} >
            <CardContent>
            <div className={classes.details}>
            <Typography variant="body2" color="textSecondary">Description: {task.description}</Typography>
            </div>
            </CardContent> 
            </ButtonBase>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" >
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>  
        </Card>
     );
}
 
export default ProjectTask;