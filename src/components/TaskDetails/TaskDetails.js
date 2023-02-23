import React, { useEffect, useState } from 'react';
import { Paper, Typography, Divider, Grid, Button } from '@mui/material';
import CommentSection from './CommentSection.js';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getTask, taskDone } from '../../actions/tasks';
import useStyles from './styles';


const TaskDetails = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const { id } = useParams();
    const { task } = useSelector((state) => state?.task);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const createdAt = new Date(task[0]?.start_date);
    const startDate = createdAt.toLocaleDateString('en-US');
    const endAt = new Date(task[0]?.end_date);
    const endDate = endAt.toLocaleDateString('en-US');
    const doneTask = task[0]?.task_done===true;
    useEffect(() => {
        dispatch(getTask(id));
    }, [dispatch, id]);

    const handleDone = () => {
        dispatch(taskDone(task[0]?.tasks_id));
        window.location.reload(false);
    }

    useEffect(() => {
        if (task[0]?.is_done === true) {
            setIsButtonDisabled(true);
        }
        else {
            setIsButtonDisabled(false);
        }
     }, [task[0]?.is_done]);

     let tPriority = task[0]?.priority;
    let priorityLabel;
    let priorityIcon;
    if ((tPriority === 1)) {
        priorityLabel = "Critical Priority";
        priorityIcon = <FiberManualRecordIcon sx={{ color: '#d50000' }} />
    }
    else if ((tPriority === 2)) {
        priorityLabel = "High Priority"
        priorityIcon = <FiberManualRecordIcon sx={{ color: '#ff6d00' }} />
    }
    else if ((tPriority === 3)) {
        priorityLabel = "Medium Priority"
        priorityIcon = <FiberManualRecordIcon sx={{ color: '#ffff00' }} />
    } 
    else if ((tPriority === 4)) {
        priorityLabel = "Low Priority"
        priorityIcon = <FiberManualRecordIcon sx={{ color: '#00c653' }} />
    }
    return ( 
        <Grid container margin="30px 0px 0px 0px">
            <Grid>
                <Paper style={{ borderRadius: '20px', height: '450px', width: '500px', margin: '30px 0px 0px 270px'}} elevation={6}>
                    <div>
                    <Typography gutterBottom marginTop marginLeft variant="h6"><strong>{task[0]?.task_name}</strong></Typography>
                    </div>
                    <Divider />
                    <div>
                    <Typography align="left" marginLeft gutterBottom variant="subtitle2"><strong>Start Date: </strong>{startDate} </Typography>
                    </div>
                    <Typography align="left" marginLeft gutterBottom variant="subtitle2"><strong>End Date: </strong>{endDate} </Typography>
                    <Typography align="left" marginLeft gutterBottom variant="h6"><strong>Description</strong></Typography>
                    <Typography marginLeft gutterBottom variant="subtitle2">{task[0]?.description}</Typography>
                    <Typography marginLeft gutterBottom variant="subtitle2">{priorityIcon}<strong>{priorityLabel}</strong></Typography>
                    <div>
                    <Button style={{margin: '175px'}}  variant="contained" disabled={isButtonDisabled} onClick={() => {if(window.confirm('Mark as done?')){handleDone()};}}>Mark as Done</Button>
                    </div>
                </Paper>
            </Grid>
            <Grid>
                <Paper style={{ borderRadius: '20px', height: "600px", width: '500px', margin: '30px 0px 0px 50px'}} elevation={6} sx={{ overflowY: "scroll"}}>
                    <div>
                        <CommentSection task={task}/>
                    </div>
                </Paper>
            </Grid>
        </Grid>

     );
}
 
export default TaskDetails;