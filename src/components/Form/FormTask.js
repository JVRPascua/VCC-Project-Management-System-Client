import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper} from "@mui/material"
import { useDispatch, useSelector } from 'react-redux';
import {createTask} from '../../actions/tasks';

import useStyles from './styles';

const FormTask = ({ id }) => {
    const [taskData, setTaskData] = useState({ task_name: '', start_date: '', end_date: '', description: '', project: id});
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    const userId = user?.result?.rows[0]?.users_id;

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(createTask(taskData))
    }
    const clear = () => {
      
    }

    return ( 
        <Paper className={classes.paper} elevation={6}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">Add a Task</Typography>
            <TextField required name="task_name" variant="outlined" label="Task Name" fullWidth="true" 
            value={taskData.task_name} onChange={(e) => setTaskData({ ...taskData, task_name: e.target.value })}/>
            <TextField required name="start_date" variant="outlined" label="Start Date" InputLabelProps={{ shrink: true, required: true }} type="date" fullwidth="true" value={taskData.start_date} onChange={(e) => setTaskData({ ...taskData, start_date: e.target.value })}/>
            <TextField required name="end_date" variant="outlined" label="Deadline" InputLabelProps={{ shrink: true, required: true }} type="date" fullwidth="true" value={taskData.end_date} onChange={(e) => setTaskData({ ...taskData, end_date: e.target.value })}/>
            <TextField required name="description" variant="outlined" label="Description" 
            fullWidth="true" value={taskData.description} onChange={(e) => setTaskData({ ...taskData, description: e.target.value })}/>
            <Button className={classes.buttonSubmit} color="primary" size="large" type="submit" fullWidth="true">Submit</Button>
            <Button color="secondary" size="small" onClick={clear} fullWidth="true">Clear</Button>
            </form>
        </Paper>      
     );
}
 
export default FormTask;