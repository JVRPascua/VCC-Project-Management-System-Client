import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export default (projects  = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...projects, action.payload];
        case UPDATE:
            return projects.map((project) => project.projects_id === action.payload.projects_id ? action.payload : project);
        case DELETE:
            return projects.filter((project) => project.projects_id !== action.payload)
        default:
            return projects;
    }
}