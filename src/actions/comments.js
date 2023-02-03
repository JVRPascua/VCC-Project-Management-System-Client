import * as api from "../api";

export const commentTask = (value, id, userId) => async (dispatch) => {
    try {
        const {data} = await api.comment(value, id, userId);
        dispatch({ type: 'COMMENT', payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const getTaskComments = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchTaskComments(id);
        dispatch({ type: 'FETCH_COMMENT_TASKS', payload: data });
    } catch (error) {
        console.log(error);
    }
}