import './App.css';
import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom"
import Dashboard from "./components/Dashboard/Dashboard";
import Projects from "./components/Projects/Projects";
import Tasks from "./components/Tasks/Tasks";
import ActivityLog from "./components/ActivityLog/ActivityLog";
import LoginPage from "./components/LoginPage/LoginPage";
import ProjectDetails from './components/ProjectDetails/ProjectDetails';
import Sidebar from "./components/Sidebar/Sidebar";
import { red, grey } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: red[600],
    },
    secondary: {
      main: grey[700],
    }
  },
});

function App() {

  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('profile'));

  

  return (
    <ThemeProvider theme={theme}>
    <div className="App">

    {location.pathname !== '/loginpage' ?
      <Sidebar/>:null
    }
        <Routes>
          <Route path="/loginpage" element= {!user ? <LoginPage /> : <Navigate to="/" />} />
          <Route path="/" element= { <Dashboard /> } />
          <Route path="/projects" element= { <Projects /> } />
          <Route path="/tasks" element= { <Tasks /> } />
          <Route path="/activitylog" element= { <ActivityLog /> } />
          <Route path="/projects/search" element= {<Projects /> } />
          <Route path="/projects/:id" element= { <ProjectDetails /> } />
        </Routes>
    </div>
    </ThemeProvider>
  );
}

export default App;
