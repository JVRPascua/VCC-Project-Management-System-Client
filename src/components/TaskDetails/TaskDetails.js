import React, { useEffect, useState } from 'react';
import { Paper, Typography, Divider, Grid, Button } from '@mui/material';
import CommentSection from './CommentSection.js';
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


    return ( 
        <Grid container margin="30px 0px 0px 300px">
            <Grid>
                <Paper style={{ borderRadius: '0px', height: '400px', width: '500px', margin: '30px 0px 0px 0px'}} elevation={6}>
                    <div>
                    <Typography gutterBottom variant="h5"><strong>{task[0]?.task_name}</strong></Typography>
                    </div>
                    <Divider />
                    <div>
                    <Typography align="left" gutterBottom variant="body"><strong>Start Date: </strong>{startDate} </Typography>
                    </div>
                    <Typography align="left" gutterBottom variant="body"><strong>End Date: </strong>{endDate} </Typography>
                    <Typography align="left" marginLeft gutterBottom variant="h6"><strong>Description</strong></Typography>
                    <Typography gutterBottom variant="body">{task[0]?.description}</Typography>
                    <div>
                    <Button style={{marginTop: '200px'}} variant="contained" disabled={isButtonDisabled} onClick={handleDone}>Mark as Done</Button>
                    </div>
                </Paper>
            </Grid>
            <Grid>
                <Paper style={{ borderRadius: '0px', height: "600px", width: '500px', margin: '30px 0px 0px 50px'}} elevation={6} sx={{ overflowY: "scroll"}}>
                    <div>
                        <CommentSection task={task}/>
                    </div>
                </Paper>
            </Grid>
        </Grid>

     );
}
 
export default TaskDetails;