import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider, Grid } from '@mui/material';
import CommentSection from './CommentSection.js';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { getTask } from '../../actions/tasks';
import useStyles from './styles';


const TaskDetails = () => {
    const { task } = useSelector((state) => state.task);
    const dispatch = useDispatch();
    const navigate = useNavigate();
//    const classes = useStyles();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getTask(id));
    }, [dispatch, id]);

    return ( 
        <Grid container margin="30px 0px 0px 300px">
            <Grid>
                <Paper style={{ borderRadius: '40px', height: '600px', width: '500px', margin: '30px 0px 0px 0px'}} elevation={6}>
                    <div>
                    <Typography gutterBottom variant="body">Start Date:  </Typography>
                    </div>
                    <Typography gutterBottom variant="body">End Date: </Typography>
                    <Typography gutterBottom variant="h3"></Typography>
                    <Typography gutterBottom variant="h5">Description</Typography>
                </Paper>
            </Grid>
            <Grid>
                <Paper style={{ borderRadius: '40px', height: "600px", width: '500px', margin: '30px 0px 0px 50px'}} elevation={6}>
                    <div>
                        <CommentSection task={task}/>
                    </div>
                </Paper>
            </Grid>
        </Grid>

     );
}
 
export default TaskDetails;