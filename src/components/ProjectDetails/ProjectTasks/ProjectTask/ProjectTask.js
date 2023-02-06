import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase, Modal, Box } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../../../actions/tasks';
import FormTask from '../../../Form/FormTask';

import useStyles from './styles';
import tasks from '../../../../reducers/tasks';

const ProjectTask = ({id, task, setCurrentId, currentId, project}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const createdAt = new Date(task.start_date);
    const startDate = createdAt.toLocaleDateString('en-US');
    const endAt = new Date(task.end_date);
    const endDate = endAt.toLocaleDateString('en-US');
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const openTask = () => navigate(`/tasks/${task.tasks_id}`);
 
    let tPriority = Number(task.priority);
    let priorityLabel;

    if ((tPriority === 1)) {
        priorityLabel = "Critical Priority";
    }
    else if ((tPriority === 2)) {
        priorityLabel = "High Priority"
    }
    else if ((tPriority === 3)) {
        priorityLabel = "Medium Priority"
    } 
    else if ((tPriority === 4)) {
        priorityLabel = "Low Priority"
    }
    
    let priorityIcon;
    if ((tPriority === 1)){
       priorityIcon = <FiberManualRecordIcon sx={{ color: '#d50000' }} />
    }
    else if ((tPriority === 2)) {
        priorityIcon = <FiberManualRecordIcon sx={{ color: '#ff6d00' }} />
    }
    else if ((tPriority === 3)) {
        priorityIcon = <FiberManualRecordIcon sx={{ color: '#ffff00' }} />
    }
    else if ((tPriority === 4)){
        priorityIcon = <FiberManualRecordIcon sx={{ color: '#00c653' }} />
    }
    
    return ( 
        <Card className={classes.card} elevation={6}>
            <CardMedia className={classes.media} title={task.project_name}/>
            <div className={classes.overlay}>
                <Typography align="left" variant="h6"> {task.task_name }</Typography>
                <div>
                <Typography align="left" variant="body">Start: {startDate}</Typography>
                </div>
                <div>
                <Typography align="left" variant="body">Deadline: {endDate} </Typography>
                </div>
            </div>
            <div className={classes.overlay2}>
            <>
            <Button style={{color: 'white'}} size="small" onClick={() => { setCurrentId(task.tasks_id); handleOpen(); }}>
                <MoreHorizIcon fontSize="default" />
            </Button>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box className={classes.box}>
                    <FormTask currentId={currentId} setCurrentId={setCurrentId}/>
                </Box>
            </Modal>
            </>
            </div> 
            <ButtonBase component="span" className={classes.cardActions} onClick={openTask}>
            <CardContent>
            <div className={classes.details}>
            <Typography variant="body2"  color="textSecondary">Description: {task.description}</Typography>
            </div>
            <div className={classes.details}>
            <Typography variant="body2"  color="textSecondary"><div>{priorityIcon}{priorityLabel}</div></Typography>
            </div>
            </CardContent> 
            </ButtonBase>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(deleteTask(task.tasks_id))}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>  
        </Card>
     );
}
 
export default ProjectTask;