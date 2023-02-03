import React, { useEffect } from 'react';
import { Paper, Typography, Divider, Grid, Button } from '@mui/material';
import CommentSection from './CommentSection.js';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getTask } from '../../actions/tasks';
import useStyles from './styles';


const TaskDetails = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getTask(id));
    }, [dispatch, id]);

    const { task } = useSelector((state) => state?.task);
    const createdAt = new Date(task[0]?.start_date);
    const startDate = createdAt.toLocaleDateString('en-US');
    const endAt = new Date(task[0]?.end_date);
    const endDate = endAt.toLocaleDateString('en-US');


    return ( 
        <Grid container margin="30px 0px 0px 300px">
            <Grid>
                <Paper style={{ borderRadius: '40px', height: '600px', width: '500px', margin: '30px 0px 0px 0px'}} elevation={6}>
                    <div>
                    <Typography gutterBottom variant="h4">{task[0]?.task_name}</Typography>
                    </div>
                    <Divider />
                    <div>
                    <Typography gutterBottom variant="body">Start Date: {startDate} </Typography>
                    </div>
                    <Typography gutterBottom variant="body">End Date: {endDate} </Typography>
                    <Typography gutterBottom variant="h6">Description</Typography>
                    <Typography gutterBottom variant="body">{task[0]?.description}</Typography>
                    <div>
                    <Button>Done</Button>
                    </div>
                </Paper>
            </Grid>
            <Grid>
                <Paper style={{ borderRadius: '40px', height: "600px", width: '500px', margin: '30px 0px 0px 50px'}} elevation={6} sx={{ overflowY: "scroll"}}>
                    <div>
                        <CommentSection task={task}/>
                    </div>
                </Paper>
            </Grid>
        </Grid>

     );
}
 
export default TaskDetails;