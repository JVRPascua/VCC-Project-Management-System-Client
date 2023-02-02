import { combineReducers } from "redux";

import projects from "./projects";
import tasks from "./tasks";
import task from "./task";
import auth from "./auth";

export default combineReducers({ projects, auth, task, tasks });