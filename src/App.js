import './App.css';
import { Routes, Route } from "react-router-dom"
import Dashboard from "./components/Dashboard/Dashboard";
import Projects from "./components/Projects/Projects";
import Tasks from "./components/Tasks/Tasks";
import ActivityLog from "./components/ActivityLog/ActivityLog";
import LoginPage from "./components/LoginPage/LoginPage";
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
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Sidebar />
        <Routes>
          <Route path="/" element= { <Dashboard /> } />
          <Route path="projects" element= { <Projects /> } />
          <Route path="tasks" element= { <Tasks /> } />
          <Route path="activitylog" element= { <ActivityLog /> } />
          <Route path="loginpage" element= { <LoginPage /> } />
        </Routes>
    </div>
    </ThemeProvider>
  );
}

export default App;
