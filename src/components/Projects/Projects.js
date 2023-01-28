import React, { useState } from "react";
import { Container, AppBar, Typography, Grow, Grid, Paper, TextField, Button } from "@mui/material";
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { getProjectsBySearch } from "../../actions/projects";
import FormProject from "../Form/FormProject.js";
import ProjectList from "./ProjectList.js";
import Pagination from "../Pagination";
import useStyles from "./styles.js";

function useQuery() {

 return new URLSearchParams(useLocation().search);
}

const Projects = () => {
    const [currentId, setCurrentId] = useState(null); 
    const classes = useStyles();
    const dispatch = useDispatch();
    const query = useQuery();
    const navigate  = useNavigate();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
    const [search, setSearch] = useState('');

    const handleKeyPress = (e) => {
      if(e.keyCode === 13) {
        searchProject();
      }
    }

    const searchProject = () => {
      if(search.trim()) {
        dispatch(getProjectsBySearch({search}));
        navigate(`/projects/search?searchQuery=${search || 'none'}`);
      } else {
        navigate('/projects');
      }
    }


    return ( 
      <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h4" align="left">Projects</Typography>
      </AppBar>
      <Grow in>
        <Container maxWidth="xl">
          <Grid container justify="space-between" justifyContent="flex-end" alignItems="stretch" spacing={3} className={classes}>
            <Grid item xs={12} sm={7}>
                  <ProjectList setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
            {(!searchQuery) && (
                <Paper elevation={6} className={classes.pagination}>
                <Pagination page={page} />
                </Paper>
              )}
              <AppBar className={classes.appBarSearch} position="static" color="inherit">
                <TextField name="search" variant="outlined" label="Search Project" fullWidth onKeyUp={handleKeyPress} value={search} onChange={(e) => setSearch(e.target.value)}/>
                <Button onClick={searchProject} className={classes.searchButton} variant="contained" color="primary">Search</Button>
              </AppBar>
              <FormProject currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
     );
}
 
export default Projects;