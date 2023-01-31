import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { getTask } from '../../actions/tasks';
import useStyles from './styles';


const TaskDetails = () => {
    const { task, tasks } = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    const navigate = useNavigate();
 //   const classes = useStyles();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getTask(id));
    }, [id]);

    return ( 
        <h1>Taskdetails</h1>
        
     );
}
 
export default TaskDetails;