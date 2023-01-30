import React, {useState} from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase, Modal, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../../../actions/tasks';
import FormTask from '../../../Form/FormTask';

import useStyles from './styles';

const ProjectTask = ({id, task, setCurrentId, currentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const today = new Date();
    const createdAt = new Date(task.start_date);
    const startDate = createdAt.toLocaleDateString('en-US');
    const endAt = new Date(task.end_date);
    const endDate = endAt.toLocaleDateString('en-US');
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
            <ButtonBase component="span" className={classes.cardAction} >
            <CardContent>
            <div className={classes.details}>
            <Typography variant="body2" color="textSecondary">Description: {task.description}</Typography>
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