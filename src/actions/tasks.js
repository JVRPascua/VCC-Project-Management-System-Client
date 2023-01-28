import * as api from '../api';

export const getProjectTasks = () => async (dispatch) => {

    try {
        const { data } = await api.fetchProjectTasks();
        dispatch({ type: 'FETCH_PROJECT_TASKS', payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const createTask = (task) => async (dispatch) => {

    try {
        const { data } = await api.createTask(task);
        dispatch({ type: 'CREATE_TASK', payload: data});
    } catch (error) {
        console.log(error);
    }
}


